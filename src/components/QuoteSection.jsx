import React from "react";
// Styles
import styled from "styled-components";
// Components
import { Container, Row, Col } from "react-bootstrap";

// #region styled-components
const StyledQuoteSection = styled.section`
  position: absolute;
  top: calc(var(--nav-height) / 2 + 1.5cm);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  z-index: 10;
  pointer-events: none;
  
  .quote-text {
    font-size: 1.5rem;
    font-style: italic;
    color: ${({ theme }) => (theme.name === "light" ? "var(--bs-dark)" : "var(--bs-light)")};
    margin: 0;
    pointer-events: auto;
  }
`;
// #endregion

// #region component
const QuoteSection = () => {
  return (
    <StyledQuoteSection>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <p className="quote-text">"In cerca di libertà"</p>
          </Col>
        </Row>
      </Container>
    </StyledQuoteSection>
  );
};
// #endregion

export default QuoteSection;

