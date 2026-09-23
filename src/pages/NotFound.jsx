import React from "react";
// Styles
import styled from "styled-components";
// Components
import { Container } from "react-bootstrap";
// Utils
import { updateTitle } from "../utils";

// #region styled-components
const StyledNotFound = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 2 * var(--nav-height) - 1rem);

  span {
    font-size: 5rem;
  }

  p {
    font-size: 2rem;
  }

`;
// #endregion

// #region component
const NotFound = () => {
  React.useEffect(() => {
    updateTitle("Pagina non trovata | John Freedom");
  }, []);

  return (
    <>
      <StyledNotFound>
        <Container className="d-flex justify-content-center">
          <span>404</span>
        </Container>
        <p className="text-center">Pagina non trovata.</p>
      </StyledNotFound>
    </>
  );
};
// #endregion

export default NotFound;
