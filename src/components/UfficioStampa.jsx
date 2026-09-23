import React from "react";
import styled from "styled-components";
// Components
import { Element } from "react-scroll";
import { Container } from "react-bootstrap";
import Title from "./Title";
// Data
import articles from "../data/pressArticles.generated.json";

// #region styled-components
const StyledSection = styled.section`
  .press-carousel {
    position: relative;
    width: 100%;
    max-width: 100%;
    min-width: 0;
    overflow: hidden;
  }

  .press-list {
    display: flex;
    gap: 1.5rem;
    overflow-x: auto;
    padding: 0.5rem 3.5rem 1.5rem;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
  }

  .press-list::-webkit-scrollbar {
    display: none;
  }

  .press-card {
    flex: 0 0 min(21rem, 82vw);
    overflow: hidden;
    color: inherit;
    text-decoration: none;
    border: var(--border);
    border-radius: 0.75rem;
    background: ${({ theme }) =>
      theme.name === "light" ? "var(--bs-light)" : "var(--bs-dark)"};
    scroll-snap-align: start;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .press-card:hover,
  .press-card:focus-visible {
    color: inherit;
    transform: translateY(-0.25rem);
    box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.2);
  }

  .press-preview,
  .press-placeholder {
    width: 100%;
    aspect-ratio: 16 / 9;
  }

  .press-preview {
    display: block;
    object-fit: cover;
  }

  .press-placeholder {
    display: grid;
    place-items: center;
    padding: 1rem;
    color: #1d1d1d;
    font-weight: 700;
    text-align: center;
    background: linear-gradient(135deg, #ffdc6f, #f1b94b);
  }

  .press-title {
    margin: 0;
    padding: 1.25rem;
    font-size: 1.15rem;
    line-height: 1.4;
  }

  .carousel-arrow {
    position: absolute;
    z-index: 1;
    top: 50%;
    width: 2.75rem;
    height: 2.75rem;
    border: var(--border);
    border-radius: 50%;
    color: #1d1d1d;
    background: #ffdc6f;
    font-size: 1.65rem;
    line-height: 1;
    transform: translateY(-50%);
  }

  .carousel-arrow:disabled {
    cursor: default;
    opacity: 0.35;
  }

  .carousel-arrow-left {
    left: 0;
  }

  .carousel-arrow-right {
    right: 0;
  }

  @media (max-width: 575px) {
    .press-list {
      max-width: 100%;
      padding: 0.5rem 0 1.5rem;
      overscroll-behavior-x: contain;
    }

    .press-card {
      flex: 0 0 100%;
      min-width: 0;
      max-width: 100%;
    }

    .press-title {
      overflow-wrap: anywhere;
    }
  }
`;
// #endregion

// #region component
const UfficioStampa = () => {
  const listRef = React.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(false);

  const updateArrows = React.useCallback(() => {
    const list = listRef.current;
    if (!list) return;

    setCanScrollLeft(list.scrollLeft > 1);
    setCanScrollRight(
      list.scrollLeft + list.clientWidth < list.scrollWidth - 1
    );
  }, []);

  React.useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows]);

  const scroll = (direction) => {
    const list = listRef.current;
    if (!list) return;

    const card = list.querySelector(".press-card");
    const gap = parseFloat(window.getComputedStyle(list).columnGap) || 0;
    const distance = card ? card.offsetWidth + gap : list.clientWidth;

    list.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  };

  return (
    <Element name={"Ufficio Stampa"} id="ufficio-stampa">
      <StyledSection className="section">
        <Container>
          <Container className="d-flex justify-content-center mb-4">
            <Title size={"h2"} text={"Ufficio Stampa"} />
          </Container>

          {articles.length > 0 && (
            <div className="press-carousel">
              <button
                type="button"
                className="carousel-arrow carousel-arrow-left"
                aria-label="Articoli precedenti"
                disabled={!canScrollLeft}
                onClick={() => scroll(-1)}
              >
                &#8249;
              </button>

              <div
                className="press-list"
                ref={listRef}
                onScroll={updateArrows}
              >
                {articles.map((article) => (
                  <a
                    className="press-card"
                    href={article.url}
                    key={article.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {article.image ? (
                      <img
                        className="press-preview"
                        src={article.image}
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="press-placeholder">
                        {new URL(article.url).hostname.replace(/^www\./, "")}
                      </div>
                    )}
                    <h3 className="press-title">{article.title}</h3>
                  </a>
                ))}
              </div>

              <button
                type="button"
                className="carousel-arrow carousel-arrow-right"
                aria-label="Articoli successivi"
                disabled={!canScrollRight}
                onClick={() => scroll(1)}
              >
                &#8250;
              </button>
            </div>
          )}
        </Container>
      </StyledSection>
    </Element>
  );
};
// #endregion

export default UfficioStampa;
