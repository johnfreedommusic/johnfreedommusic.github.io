import React from "react";
// Components
import { Element } from "react-scroll";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import SongTile from "./SongTile";
// Config
import { featuredSingle, musicData } from "../config";

const musicOrder = [
  "La cometa di Halley",
  "Storia di un brav'uomo",
  "Lullaby Hotel",
  "La cometa di Halley (Acoustic Version)",
  "Mente Criminale",
];

const visibleMusic = [featuredSingle, ...musicData]
  .filter((song) => musicOrder.includes(song.name))
  .sort((first, second) =>
    musicOrder.indexOf(first.name) - musicOrder.indexOf(second.name)
  );

// #region component
const Musica = () => {
  return (
    <Element name={"Musica"} id="musica">
      <section className="section">
        <Container className="d-flex justify-content-center">
          <Title size={"h2"} text={"Musica"} />
        </Container>
        <Container className="mt-4">
          <Row xs={1} sm={2} md={2} lg={5} className="g-4">
            {visibleMusic.map((song) => (
              <Col key={song.name}>
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

