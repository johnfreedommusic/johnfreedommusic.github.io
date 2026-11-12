import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { Container } from "react-bootstrap";
import Title from "./Title";

const StyledLive = styled.section`
  .live-video {
    width: 100%;
    max-width: 1000px;
    aspect-ratio: 16 / 9;
    margin: 1.5rem auto 0;
    overflow: hidden;
    border: var(--border);
    border-radius: 0.5rem;
  }

  .live-video iframe {
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const UltimaEsibizioneLive = () => (
  <Element name="Ultima esibizione live" id="ultima-esibizione-live">
    <StyledLive className="section">
      <Container>
        <Container className="d-flex justify-content-center">
          <Title size="h2" text="Ultima esibizione live" />
        </Container>
        <div className="live-video">
          <iframe
            src="https://www.youtube.com/embed/07ciIZ56sG8"
            title="Ultima esibizione live di John Freedom"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </Container>
    </StyledLive>
  </Element>
);

export default UltimaEsibizioneLive;
