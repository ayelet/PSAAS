import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

const HomePage = () => {
  return (
    <Jumbotron className="hero" fluid>
      <div>
        <h1>Coming Soon</h1>
        
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
