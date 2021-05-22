import "./ProviderDetailsPage.css";
import React, { useState, useEffect } from "react";
import { Container, Breadcrumb, Card, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import { fakeProvider } from "./fakeProvider";
const Console = (prop) => (
  console[Object.keys(prop)[0]](...Object.values(prop)), null // ➜ React components must return something
);

export const ProviderDetailsPage = (props) => {
  const [provider, setProvider] = useState();
  const [fake] = useState(fakeProvider.provider);
  let { id } = useParams();

  const getProvider = async () => {
    // console.log("requesting data from id: ", id);
    const url = `/api/providers/` + id;
    // console.log(props, url);
    try {
      const response = await axios.get(url, {
        params: {
          id: id,
        },
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          // Authorization: `Bearer ${token}`,
        },
      });
      setProvider(response.data);
      console.log(provider);
    } catch (err) {
      console.log("axios get /:id error: ", err.message);
    }
    // axios
    //   .get(url, {
    //     params: {
    //       id: id,
    //     },
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //     },
    //   })
    //   .then(function (response) {
    //     // console.log("fetching from api: ", url, response);
    //     // console.log("Response: ", response.data);
    //     // setProvider(response.data);
    //     setProvider({ fakeProvider });
    //     console.log(provider);
    //   })
    //   .catch((err) => console.log(err, "couldn't find provider"));
  };

  useEffect(() => {
    getProvider();
    return () => {
      // cleanup;
    };
  }, []);

  return (
    <div className="details">
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/providers">Back</Breadcrumb.Item>
        <Breadcrumb.Item active>Details</Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        <Row>
          <Col xs="8">
            {" "}
            <Card>
              <Card.Header>
                {fake.serviceType.map((service, i) => {
                  return (
                    service + (i < fake.serviceType.length - 2 ? ", " : " & ")
                  );
                })}
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  {fake.details.first_name + " " + fake.details.last_name}
                </Card.Title>
                <Card.Text>{fake.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="4">
          <Card>
          
          <img width="100%" src={fake.images[0].imageUrl} alt="profile" />
          </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

//TODO - erase this later
// Card Example -
//  <Card>
//    <Card.Header>{props.id}</Card.Header>
//    <Card.Body>
//      <Card.Title>Ofir Ganon</Card.Title>
//      <Card.Subtitle className="mb-2 text-muted">
//        Dog Trainer, Pet Sitter & Dog Walker
//      </Card.Subtitle>
//      <Card.Text>
//        Hi, my name is Ofir. I live in Raanana, and I'm 24 years old. I love
//        pets, and I will take care of your dogs. I have a diploma in dog
//        training, and I've been around pets all my life.
//      </Card.Text>
//    </Card.Body>
//  </Card>;

// <Container className="provider-details">
//   <Card>
//     <Card.Header>{provider._id}</Card.Header>
//     <Card.Body>
//       <Card.Title>
//         {provider.details.first_name +
//           " " +
//           provider.details.last_name}
//       </Card.Title>
//       <Card.Subtitle className="mb-2 text-muted">
//         Dog Trainer, Pet Sitter & Dog Walker
//       </Card.Subtitle>
//       <Card.Text>
//         Hi, my name is Ofir. I live in Raanana, and I'm 24 years old. I love
//         pets, and I will take care of your dogs. I have a diploma in dog
//         training, and I've been around pets all my life.
//       </Card.Text>
//     </Card.Body>
//   </Card>
// </Container>;
