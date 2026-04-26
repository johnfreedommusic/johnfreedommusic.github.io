import React from "react";
// Components
import { Element } from "react-scroll";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";

// #region component
const Projects = () => {
  return (
    <Element name={"Video"} id="video">
      <section className="section">
        <Container>
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"Video"} />
          </Container>
          <Container className="mt-4">
            <Row className="g-4 justify-content-center mb-4">
              <Col xs={12} className="d-flex justify-content-center">
                <div style={{ width: "100%", maxWidth: "1000px", aspectRatio: "16 / 9", border: "var(--border)", overflow: "hidden", borderRadius: "0.5rem" }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/C24Qsc5Lghc"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ border: "none" }}
                  />
                </div>
              </Col>
            </Row>
            <Row className="g-4 justify-content-center mb-4">
              <Col xs={12} className="d-flex justify-content-center">
                <div style={{ width: "100%", maxWidth: "1000px", aspectRatio: "16 / 9", border: "var(--border)", overflow: "hidden", borderRadius: "0.5rem" }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/fi8sJsUm1P4 "
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ border: "none" }}
                  />
                </div>
              </Col>
            </Row>
            <Row className="g-4 justify-content-center">
              <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
                <div style={{ width: "100%", maxWidth: "360px", aspectRatio: "9 / 16", border: "var(--border)", overflow: "hidden", borderRadius: "0.5rem" }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/HUaYIgSw5Q0"
                    title="YouTube Shorts video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ border: "none" }}
                  />
                </div>
              </Col>
              <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
                <div style={{ width: "100%", maxWidth: "360px", aspectRatio: "9 / 16", border: "var(--border)", overflow: "hidden", borderRadius: "0.5rem" }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/Ze4dgNoQY4I"
                    title="YouTube Shorts video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ border: "none" }}
                  />
                </div>
              </Col>
              <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
                <div style={{ width: "100%", maxWidth: "360px", aspectRatio: "9 / 16", border: "var(--border)", overflow: "hidden", borderRadius: "0.5rem" }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/bUno8g7yIDA"
                    title="YouTube Shorts video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ border: "none" }}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </Element>
  );
};
// #endregion

export default Projects;
