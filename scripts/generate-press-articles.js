const fs = require("fs");
const path = require("path");

const rootDirectory = path.resolve(__dirname, "..");
const linksPath = path.join(rootDirectory, "src/data/pressLinks.json");
const outputPath = path.join(
  rootDirectory,
  "src/data/pressArticles.generated.json"
);

const decodeHtml = (value = "") =>
  value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) =>
      String.fromCodePoint(parseInt(code, 16))
    )
    .replace(/&quot;/gi, '"')
    .replace(/&apos;|&#39;/gi, "'")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/\s+/g, " ")
    .trim();

const getAttribute = (tag, attribute) => {
  const match = tag.match(
    new RegExp(`${attribute}\\s*=\\s*(?:["']([^"']*)["']|([^\\s>]+))`, "i")
  );
  return match ? match[1] || match[2] || "" : "";
};

const getMetaContent = (html, keys) => {
  const metaTags = html.match(/<meta\b[^>]*>/gi) || [];

  for (const tag of metaTags) {
    const key = (getAttribute(tag, "property") || getAttribute(tag, "name"))
      .toLowerCase()
      .trim();

    if (keys.includes(key)) {
      return decodeHtml(getAttribute(tag, "content"));
    }
  }

  return "";
};

const getFallbackTitle = (url) => {
  const { hostname, pathname } = new URL(url);
  const pathTitle = decodeURIComponent(pathname)
    .split("/")
    .filter(Boolean)
    .pop()
    ?.replace(/[-_]+/g, " ");

  const title = pathTitle || hostname.replace(/^www\./, "");
  return title.charAt(0).toUpperCase() + title.slice(1);
};

const getFirstContentImage = (html) => {
  const articleHtml =
    html.match(/<article\b[\s\S]*?<\/article>/i)?.[0] ||
    html.match(/<main\b[\s\S]*?<\/main>/i)?.[0] ||
    html;
  const imageTags = articleHtml.match(/<img\b[^>]*>/gi) || [];

  for (const tag of imageTags) {
    const source =
      getAttribute(tag, "data-lazy-src") ||
      getAttribute(tag, "data-src") ||
      getAttribute(tag, "src");

    if (source && !source.startsWith("data:")) return decodeHtml(source);
  }

  return "";
};

const extractArticle = async (url, cachedArticle) => {
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) " +
          "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml",
        "Accept-Language": "it-IT,it;q=0.9,en;q=0.8",
      },
      redirect: "follow",
      signal: AbortSignal.timeout(15000),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const html = await response.text();
    const metaTitle = getMetaContent(html, [
      "og:title",
      "twitter:title",
      "title",
    ]);
    const documentTitle = decodeHtml(
      html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] || ""
    );
    const image =
      getMetaContent(html, [
        "og:image",
        "og:image:url",
        "twitter:image",
        "twitter:image:src",
      ]) || getFirstContentImage(html);

    return {
      url,
      title: metaTitle || documentTitle || getFallbackTitle(url),
      image: image
        ? new URL(image, response.url).href
        : cachedArticle?.image || "",
    };
  } catch (error) {
    console.warn(`Could not refresh press preview for ${url}: ${error.message}`);
    return (
      cachedArticle || {
        url,
        title: getFallbackTitle(url),
        image: "",
      }
    );
  }
};

const run = async () => {
  const rawLinks = JSON.parse(fs.readFileSync(linksPath, "utf8"));

  if (!Array.isArray(rawLinks)) {
    throw new Error("src/data/pressLinks.json must contain a JSON array.");
  }

  const links = [...new Set(rawLinks.map((link) => link.trim()).filter(Boolean))];

  links.forEach((link) => {
    const url = new URL(link);
    if (!url.protocol.match(/^https?:$/)) {
      throw new Error(`Press link must use http or https: ${link}`);
    }
  });

  let cachedArticles = [];
  try {
    cachedArticles = JSON.parse(fs.readFileSync(outputPath, "utf8"));
  } catch {
    // The generated file is created below when it does not exist yet.
  }

  const cacheByUrl = new Map(
    cachedArticles.map((article) => [article.url, article])
  );
  const articles = await Promise.all(
    links.map((link) => extractArticle(link, cacheByUrl.get(link)))
  );

  fs.writeFileSync(outputPath, `${JSON.stringify(articles, null, 2)}\n`);
  console.log(`Generated ${articles.length} press article preview(s).`);
};

run().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
