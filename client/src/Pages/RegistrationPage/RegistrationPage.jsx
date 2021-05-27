import "./RegistrationPage.css";

import React from "react";
import NewProviderForm from "../../components/NewProviderForm/NewProviderForm";
import { Container, Col, Row } from "react-bootstrap";
const RegistrationPage = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col className="mt-5" xs lg="6" style={{ backgroundColor: "#F6D360" }}>
          <h1>Register for the service</h1>
          <NewProviderForm />
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationPage;
