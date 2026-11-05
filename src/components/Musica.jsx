import React from "react";
// Components
import { Element } from "react-scroll";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import SongTile from "./SongTile";
// Config
import { musicData } from "../config";

// #region component
const Musica = () => {
  return (
    <Element name={"Musica"} id="musica">
      <section className="section">
        <Container className="d-flex justify-content-center">
          <Title size={"h2"} text={"Musica"} />
        </Container>
        <Container className="mt-4">
          <Row xs={1} sm={2} md={2} lg={4} className="g-4">
            {musicData.map((song) => (
              <Col key={song.id}>
                <SongTile song={song} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Element>
  );
};
// #endregion

export default Musica;

