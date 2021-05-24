import React from "react";
import { Container } from "react-bootstrap";
import rollingCat from "../../assets/img/rolling cat.gif";

const Loader = () => {
  return (
    <Container className="loader text-center">
      <img src={rollingCat} alt="rolling cat" />

      <h3>Loading...</h3>
    </Container>
  );
};

export default Loader;
