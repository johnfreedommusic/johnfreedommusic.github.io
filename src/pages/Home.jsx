import React from "react";
// State
import { useGetUsersQuery } from "../app/apiSlice";
// Components
import Hero from "../components/Hero";
import QuoteSection from "../components/QuoteSection";
import PhotoGallery from "../components/PhotoGallery";
import AboutMe from "../components/AboutMe";
import Novità from "../components/Novità";
import Musica from "../components/Musica";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import BackToTop from "../components/BackToTop";
// Config
import { filteredProjects, bio, moreInfo } from "../config";
// Utils
import { updateTitle } from "../utils";

// #region component
const Home = () => {
  const { data: userData } = useGetUsersQuery();

  React.useEffect(() => {
    const displayName = userData?.name || "John Freedom";
    updateTitle(displayName);
  }, [userData]);

  return (
    <>
      <Hero name={userData?.name || "John Freedom"} />
      <main style={{ position: 'relative' }}>
        <QuoteSection />
        <PhotoGallery />
        <Novità />
        <AboutMe
          avatar_url={userData.avatar_url}
          bio={bio}
          moreInfo={moreInfo}
        />
        <Musica />
        <Projects filteredProjects={filteredProjects} />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
};
// #endregion

export default Home;
