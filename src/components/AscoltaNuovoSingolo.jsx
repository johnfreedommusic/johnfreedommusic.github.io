import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { Container } from "react-bootstrap";
import Title from "./Title";
import SongTile from "./SongTile";
import { featuredSingle } from "../config";

const StyledSingle = styled.section`
  .single-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;
  }

  .featured-song {
    width: min(100%, 440px);
  }

  .featured-song .song-title {
    font-size: clamp(1.5rem, 3vw, 2rem);
  }
`;

const AscoltaNuovoSingolo = () => (
  <Element name="Ascolta il nuovo singolo" id="ascolta-il-nuovo-singolo">
    <StyledSingle className="section">
      <Container className="single-content">
        <Title size="h2" text="Ascolta il nuovo singolo" />
        <div className="featured-song">
          <SongTile song={featuredSingle} />
        </div>
      </Container>
    </StyledSingle>
  </Element>
);

export default AscoltaNuovoSingolo;
