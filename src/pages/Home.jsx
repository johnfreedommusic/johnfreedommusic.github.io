import React from "react";
// Components
import Hero from "../components/Hero";
import QuoteSection from "../components/QuoteSection";
import PhotoGallery from "../components/PhotoGallery";
import AboutMe from "../components/AboutMe";
import Novità from "../components/Novità";
import Musica from "../components/Musica";
import Projects from "../components/Projects";
import UfficioStampa from "../components/UfficioStampa";
import Contact from "../components/Contact";
import BackToTop from "../components/BackToTop";
// Config
import { bio, enable_novità } from "../config";
// Utils
import { updateTitle } from "../utils";

// #region component
const Home = () => {
  React.useEffect(() => {
    updateTitle("John Freedom");
  }, []);

  return (
    <>
      <Hero />
      <main style={{ position: 'relative' }}>
        <QuoteSection />
        <PhotoGallery />
        {enable_novità && <Novità />}
        <AboutMe bio={bio} />
        <Musica />
        <Projects />
        <UfficioStampa />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
};
// #endregion

export default Home;
