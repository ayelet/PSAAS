import "./ProviderCard.css";
import axios from "axios";

import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FaHeart } from "react-icons/fa";
import providers1 from "./provider.json";

// try {
//   const baseUrl = "http://localhost:5001/bank/users/";
//       axios.get(baseUrl).then(function (response) {
//         console.log(response);
//         setAccounts(response.data);
//         console.log(accounts);
//       });
//     } catch (err) {
//       console.log(err);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

const ProviderCard = () => {
  const [providers, setProviders] = useState([]);
  const url = "/api/providers";

  useEffect(() => {
    // effect
    try {
      console.log("api request ", url);
      axios.get(url).then(function (response) {
        console.log("fetching from api: ", url, response);
        setProviders(response.data);
        console.log(providers);
      });
    } catch (err) {
      console.log("Error in fetching data from server ", err);
    }
    return () => {
      // cleanup
    };
    //eslint disable
  }, []);

  const renderListItem = (provider) => {
    console.log("card of provider: ", provider);
    return (
      <Card
        style={{ width: "24rem" }}
        border="info"
        className="mt-5 ml-2 col-xs-3 text-center"
      >
        <Card.Img variant="top" src={provider.images[0].imageUrl} />
        <Card.Body>
          <Card.Title>
            {provider.details.first_name + " " + provider.details.last_name}
            <FaHeart className="fa-heart" />
          </Card.Title>
          {/*  <Card.Subtitle>
            {provider.serviceTypes.map((service) => service.serviceType + " ")}
          </Card.Subtitle> */}
          <Card.Text>{provider.address.city}</Card.Text>
          <Link to="/ProviderDetailsPage ">
            <Button variant="info" className="text-center">
              Details
            </Button>
          </Link>
        </Card.Body>
      </Card>
    );
  };

  return (
    <Container>
      <Row className="text-center">
        {providers.map((provider) => renderListItem(provider))}
      </Row>
    </Container>
  );
};

export default ProviderCard;
