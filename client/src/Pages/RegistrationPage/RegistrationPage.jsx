import "./RegistrationPage.css";

import React from "react";
import NewProviderForm from "../../components/NewProviderForm/NewProviderForm";
import { Container, Col, Row } from "react-bootstrap";
const RegistrationPage = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          <h1>Register for the service</h1>
          <NewProviderForm />
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationPage;
