import "./ProviderDetailsPage.css";
import React, { useState, useEffect } from "react";
import { Container, Breadcrumb, Card, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { fakeProvider } from "./fakeProvider";
import { GiDogBowl, GiDogHouse, GiJumpingDog } from "react-icons/gi";
import { FaTaxi, FaPaw } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import Loader from "../../components/Loader/Loader";
import { IoPawOutline } from "react-icons/io5";

// const Console = (prop) => (
//   console[Object.keys(prop)[0]](...Object.values(prop)), null // ➜ React components must return something
// );

export const ProviderDetailsPage = (props) => {
  const [provider, setProvider] = useState();
  const [loading, setLoading] = useState(true);
  // const [fake] = useState(fakeProvider.provider);
  let { id } = useParams();
  // const servicesMap2Icons = [
  //   { name: "Pet Sitting", icon: GiDogBowl },
  //   { name: "Dog Walking", icon: GiJumpingDog },
  //   { name: "Pet Boarding", icon: GiDogHouse },
  //   { name: "Pet Taxi", icon: FaTaxi },
  // ];
  const Icons = [GiDogBowl, GiJumpingDog, GiDogHouse, FaTaxi];

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
      setProvider(response.data.provider);
      setLoading(false);
      console.log(response.data.provider.address);
      // console.log(provider.provider.details, provider.provider.address);
    } catch (err) {
      console.log("axios get /:id error: ", err.message);
    }
  };

  useEffect(() => {
    getProvider();
    return () => {
      // cleanup;
    };
  }, []);

  const renderServices = () => {
    // const data = provider;
    // console.log("Render services: ", data.serviceType);
    return provider.serviceType.map((service, idx) => {
      const Icon = Icons[idx];

      return (
        <div>
          <Icon size="28px" style={{ color: "#6dcce8" }} />
          <span>&nbsp;&nbsp;</span>
          <span>{service}</span>
          <span>&nbsp;&nbsp;</span>
        </div>
      );
    });
  };

  const getReviews = () => {
    let sum = provider.ratings.reduce((sum, rating) => sum + rating.score, 0);
    let avgRatings = Math.ceil(sum / provider.ratings.length);
    // <FaPaw /> <FaPaw /> <IoPawOutline /> <IoPawOutline />
    const items = [];
    {
      for (let i = 0; i < avgRatings; i++)
        items.push(<FaPaw style={{ margin: "0 2px", color: "#539eb5" }} />);
      for (let i = avgRatings; i < 5; i++)
        items.push(
          <IoPawOutline style={{ margin: "0 2px", color: "#539eb5" }} />
        );
    }
    return (
      <span>
        {items} ({provider.ratings.length} Reviews)
      </span>
    );
  };

  return loading ? (
    <Loader />
  ) : (
    { provider } && (
      <div className="details">
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/providers">Back</Breadcrumb.Item>
          <Breadcrumb.Item active>Details</Breadcrumb.Item>
        </Breadcrumb>
        <Container>
          <Row>
            <Col xs="8">
              {" "}
              <Container>
                <Card.Header>
                  <Card.Title>
                    {provider.details.first_name +
                      " " +
                      provider.details.last_name}
                  </Card.Title>
                </Card.Header>
                <Card.Header>
                  <GoLocation />
                  <span>&nbsp;&nbsp;</span>
                  {provider.address.city}
                </Card.Header>
                <Card.Body>
                  <Card.Text>{provider.description}</Card.Text>
                </Card.Body>
              </Container>
            </Col>
            <Col xs="4">
              <Container>
                <Card.Header>Service & Rates</Card.Header>
                <Card.Body>{renderServices()}</Card.Body>

                <hr class="mt-2 mb-3" />
                <Card.Body>{getReviews()}</Card.Body>
                <Card.Body className="text-center">
                  <Button variant="info">Contact</Button>
                </Card.Body>
                <Card.Body>
                  From {provider.price}
                  <span>&nbsp;&#8362;</span>/day
                </Card.Body>
                <img
                  width="100%"
                  src={provider.images[0].imageUrl}
                  alt="profile"
                />
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    )
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
