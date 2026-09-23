import React from "react";
// Styles
import { ThemeProvider } from "styled-components";
// State
import { useDispatch, useSelector } from "react-redux";
import { selectMode, setMode } from "./app/appSlice";
// Router
import { HashRouter, Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
// Components
import { ErrorBoundary } from "react-error-boundary";
import AppFallback from "./components/AppFallback";
import GlobalStyles from "./components/GlobalStyles";
import ScrollToTop from "./components/ScrollToTop";
import { Element } from "react-scroll";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// Config
import { footerTheme } from "./config";
// Util
import { getPreferredTheme, setTheme } from "./utils";
// Images
import TabIcon from "./images/Untitled_design-removebg-preview.png";

// #region component
const App = () => {
  const theme = useSelector(selectMode);
  const dispatch = useDispatch();

  // Theme
  const setThemes = React.useCallback(
    (theme) => {
      if (theme) {
        dispatch(setMode(theme));
        setTheme(theme);
      } else {
        dispatch(setMode(getPreferredTheme()));
        setTheme(getPreferredTheme());
      }
    },
    [dispatch]
  );

  React.useEffect(() => {
    setThemes();
  }, [setThemes]);

  // Set favicon to custom logo
  React.useEffect(() => {
    const link = document.querySelector("link[rel='icon']") || document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    link.href = TabIcon;
    document.head.appendChild(link);
  }, []);

  return (
    <ErrorBoundary FallbackComponent={AppFallback}>
      <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true, }}>
        <ThemeProvider theme={{ name: theme }}>
          <ScrollToTop />
          <GlobalStyles />
          <Element name={"Home"} id="home">
            <NavBar callBack={(theme) => setThemes(theme)} />
          </Element>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer mode={footerTheme} />
        </ThemeProvider>
      </HashRouter>
    </ErrorBoundary>
  );
};

// #endregion

export default App;
