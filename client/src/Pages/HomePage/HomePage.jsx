import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";

const HomePage = () => {
  return (
    <Jumbotron className="hero" fluid>
      <div>
        <HomeCarousel />
        <Link to="/Providers">
          <Button variant="info">I'm a pet owner</Button>{" "}
        </Link>
        <Link to="/#">
          <Button variant="info">I'm a pet sitter</Button>
        </Link>
      </div>
    </Jumbotron>
  );
};

export default HomePage;
