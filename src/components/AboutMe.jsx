import React from "react";
// Styles
import styled from "styled-components";
// State
import PropTypes from "prop-types";
// Components
import { Element } from "react-scroll";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
// Images
import bioPhoto from "../images/bio_icon.webp";

// #region styled-components
const StyledAboutMe = styled.section`
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  margin-top: -1rem !important;
  margin-bottom: -1rem !important;
  
  .title {
    margin: 0.25rem 0 !important;
  }
  
  p {
    font-size: 1.25rem;
    white-space: pre-line;
  }
  .bio-img {
    width: 100%;
    max-width: 18rem;
    height: auto;
    object-fit: cover;
    border-radius: 0.5rem;
    margin: 0 auto;
    display: block;
  }

`;
// #endregion

// #region component
const propTypes = {
  avatar_url: PropTypes.string.isRequired,
  bio: PropTypes.string,
  moreInfo: PropTypes.string,
};

const AboutMe = ({ avatar_url, bio, moreInfo }) => {
  return (
    <Element name={"Bio"} id="bio">
      <StyledAboutMe className="section">
        <Container>
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"Bio"} />
          </Container>
          <Row className="align-items-center mt-0">
            <Col md={4} className="d-flex justify-content-center mb-4 mb-md-0">
              <img
                src={bioPhoto}
                alt="Bio"
                className="bio-img"
                loading="lazy"
                decoding="async"
              />
            </Col>
            <Col md={8} className="d-flex flex-column text-center">
              <Container style={{ marginTop: '2rem' }}>
                {bio && <p>{bio}</p>}
                {moreInfo && <p>{moreInfo}</p>}
              </Container>
            </Col>
          </Row>
        </Container>
      </StyledAboutMe>
    </Element>
  );
};

AboutMe.propTypes = propTypes;
// #endregion

export default AboutMe;
