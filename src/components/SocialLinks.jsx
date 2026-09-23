import React from "react";
// Styles
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Config
import { socialLinks } from "../config";

// #region styled-components
const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;
// #endregion

// #region component
const SocialLinks = () => {
  return (
    <StyledSocialLinks>
      {socialLinks.instagram && (
        <a href={socialLinks.instagram} aria-label="Instagram" className="link-icons">
          <Icon icon="fa-brands:instagram" />
        </a>
      )}
      {socialLinks.tiktok && (
        <a href={socialLinks.tiktok} aria-label="TikTok" className="link-icons">
          <Icon icon="fa-brands:tiktok" />
        </a>
      )}
      {socialLinks.youtube && (
        <a href={socialLinks.youtube} aria-label="YouTube" className="link-icons">
          <Icon icon="fa-brands:youtube" />
        </a>
      )}
      {socialLinks.spotify && (
        <a href={socialLinks.spotify} aria-label="Spotify" className="link-icons">
          <Icon icon="fa6-brands:spotify" />
        </a>
      )}
      {socialLinks.soundcloud && (
        <a href={socialLinks.soundcloud} aria-label="SoundCloud" className="link-icons">
          <Icon icon="fa6-brands:soundcloud" />
        </a>
      )}
    </StyledSocialLinks>
  );
};
// #endregion

export default SocialLinks;
