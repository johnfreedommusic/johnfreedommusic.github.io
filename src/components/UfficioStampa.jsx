import React from "react";
// Components
import { Element } from "react-scroll";
import { Container } from "react-bootstrap";
import Title from "./Title";

// #region component
const UfficioStampa = () => {
  return (
    <Element name={"Ufficio Stampa"} id="ufficio-stampa">
      <section className="section">
        <Container className="d-flex justify-content-center">
          <Title size={"h2"} text={"Ufficio Stampa"} />
        </Container>
      </section>
    </Element>
  );
};
// #endregion

export default UfficioStampa;
