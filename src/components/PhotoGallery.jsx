import React from "react";
// Styles
import styled from "styled-components";
// Components
import { Element } from "react-scroll";
import { Col, Container, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";

// #region styled-components
const StyledPhotoGallery = styled.section`
  padding-bottom: 0 !important;
  margin-bottom: -1rem !important;
  
  .carousel {
    position: relative;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    aspect-ratio: 4 / 5;
    border: none;
    overflow: visible;
    background: var(--bs-body-bg);
    padding: 0 2rem;
  }

  .photo-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* Adjacent slides inside the same frame */
  .slide {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    overflow: hidden;
  }
  .slide.center {
    left: 50%;
    transform: translate(-50%, -50%);
    width: 65%;
    aspect-ratio: 4 / 5;
    border: none;
    z-index: 2;
  }
  .slide.side {
    width: 22%;
    aspect-ratio: 4 / 5;
    opacity: 0.8;
    border: none;
    z-index: 1;
  }
  .slide.left { left: 0; }
  .slide.right { right: 0; }

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    padding: 0.25rem 0.5rem;
    cursor: pointer;
    color: ${({ theme }) => (theme.name === "light" ? "var(--bs-dark)" : "var(--bs-light)")};
    z-index: 2;
  }

  .arrow.left { left: 0.25rem; }
  .arrow.right { right: 0.25rem; }

  /* Move arrows slightly outward on non-mobile devices */
  @media screen and (min-width: 768px) {
    .arrow.left { 
      left: -6rem; 
    }
    .arrow.right { 
      right: -6rem; 
    }
  }
`;
// #endregion

// Local carousel component with arrows
const Carousel = ({ images }) => {
  const [index, setIndex] = React.useState(0);
  const total = images.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div className="carousel">
      <button className="arrow left" aria-label="Previous" onClick={prev}>
        <Icon icon="mdi:chevron-left" width="32" height="32" />
      </button>
      {/* Left (previous) */}
      <div className="slide side left">
        <img src={images[(index - 1 + total) % total]} alt="Previous" className="photo-img" />
      </div>
      {/* Center (current) */}
      <div className="slide center">
        <img src={images[index]} alt={`Slide ${index + 1}`} className="photo-img" />
      </div>
      {/* Right (next) */}
      <div className="slide side right">
        <img src={images[(index + 1) % total]} alt="Next" className="photo-img" />
      </div>
      <button className="arrow right" aria-label="Next" onClick={next}>
        <Icon icon="mdi:chevron-right" width="32" height="32" />
      </button>
    </div>
  );
};

// #region component
const PhotoGallery = () => {
  // Auto-import all images in images/photoes (jpg, jpeg, png, gif, webp)
  let photos = [];
  try {
    const ctx = require.context("../images/photoes", false, /\.(png|jpe?g|gif|webp)$/i);
    photos = ctx
      .keys()
      .sort()
      .map(ctx)
      .filter(img => !img.includes('2.jpg')); // Exclude 2.jpg from gallery
  } catch (e) {
    photos = [];
  }

  if (photos.length === 0) {
    return null;
  }

  return (
    <Element name={"Gallery"} id="gallery">
      <StyledPhotoGallery className="section">
        <Container>
          <Row className="mt-0">
            <Col className="d-flex justify-content-center">
              <Carousel images={photos} />
            </Col>
          </Row>
        </Container>
      </StyledPhotoGallery>
    </Element>
  );
};
// #endregion

export default PhotoGallery;

