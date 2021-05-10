import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../assets/img/img5.jpg";
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img4.jpg";
import "./HomeCarousel.css";

const HomeCarousel = () => {
  return (
    <Carousel fade={false} interval={2000}>
      <Carousel.Item style={{ height: "300px" }}>
        <img className="d-block" height={300} src={img1} alt="First slide" />
        <Carousel.Caption>
          <h3>Going on Vacation?</h3>
          <p>Looking for someone to take care of your beloved pet?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "300px" }}>
        <img className="d-block" height={300} src={img2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Find A Pet Sitter</h3>
          <p>The best selection of pet care takers</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "300px" }}>
        <img className="d-block" height={300} src={img3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Pet Sitting and Boarding</h3>
          <p>Our pet care takers are verified by us</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
