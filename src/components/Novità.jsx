import React from "react";
import styled from "styled-components";
// Components
import { Element } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
import Title from "./Title";

// #region styled-components
const StyledNovità = styled.section`
  padding-top: 0 !important;
  margin-top: -1rem !important;
  
  .title {
    margin: 0.25rem 0 !important;
  }

  .video-wrapper {
    width: 100%;
    max-width: 1000px;
    aspect-ratio: 16 / 9;
    border: var(--border);
    overflow: hidden;
    border-radius: 0.5rem;
    background: #000;
  }

  .video-frame {
    width: 100%;
    height: 100%;
    border: none;
  }

  .embed-wrapper {
    width: 100%;
    max-width: 540px;
    border: var(--border);
    overflow: hidden;
    border-radius: 0.5rem;
    background: #000;
  }

  .embed-frame {
    width: 100%;
    min-height: 620px;
    border: none;
    background: #000;
  }
  
  p {
    font-size: 1.25rem;
  }
`;
// #endregion

// #region component
const Novità = () => {
  return (
    <Element name={"Novità"} id="novità">
      <StyledNovità className="section">
        <Container className="d-flex justify-content-center mb-4">
          <Title size={"h2"} text={"Novità"} />
        </Container>
        <Container className="mt-0">
          <Row className="g-4 align-items-center justify-content-center">
            <Col xs={12} md={6} className="d-flex justify-content-center">
              <div className="embed-wrapper">
                <iframe
                  className="embed-frame"
                  src="https://www.instagram.com/p/DWi4CFCF_gP/embed"
                  title="Instagram post"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </Col>
            <Col xs={12} md={6} className="d-flex align-items-center justify-content-center text-center">
              <p className="mb-0">
                John Freedom apre il concerto dei Patagarri il 27 Marzo 2026 all'Hiroshima Mon Amour di Torino soprendendo il pubblico con la sua energia e identità. "Una serata magnifica, volevo non finisse mai" ha dichiarato lui stesso su un post di Instagram quache giorno dopo.
              </p>
            </Col>
          </Row>
          <Row className="g-4 justify-content-center mb-4 mt-4">
            <Col xs={12} className="d-flex justify-content-center">
              <div className="video-wrapper">
                <iframe
                  className="video-frame"
                  src="https://www.youtube.com/embed/quv_iEFsVZ4"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </Col>
          </Row>
        </Container>
      </StyledNovità>
    </Element>
  );
};
// #endregion

export default Novità;


