import "./ProviderDetailsPage.css";
import React, { useState, useEffect } from "react";
import { Container, Breadcrumb, Card } from "react-bootstrap";
import axios from "axios";
export const ProviderDetailsPage = (props) => {
  const [providerDetails, setProviderDetails] = useState({});

  useEffect(() => {
    const url = `/api/providers`;
    console.log(props, url);
    axios
      .get(url, {
        params: {
          id: props.id,
        },
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then(function (response) {
        console.log("fetching from api: ", url, response);
        setProviderDetails(response.data);
      })
      .catch((err) => console.log(err, "couldn't find provider"));

    return () => {
      // cleanup;
    };
  }, []);

  console.log("details about a certain provider");
  return (
    <div className="details">
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/providers">Back</Breadcrumb.Item>
        <Breadcrumb.Item active>Details</Breadcrumb.Item>
      </Breadcrumb>
      <Container className="provider-details">
        <Card>
          <Card.Header>{props.id}</Card.Header>
          <Card.Body>
            <Card.Title>Ofir Ganon</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Dog Trainer, Pet Sitter & Dog Walker
            </Card.Subtitle>
            <Card.Text>
              Hi, my name is Ofir. I live in Raanana, and I'm 24 years old. I
              love pets, and I will take care of your dogs. I have a diploma in
              dog training, and I've been around pets all my life.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};
