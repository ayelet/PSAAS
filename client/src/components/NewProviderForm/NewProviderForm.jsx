import "./NewProviderForm.css";

import React from "react";
import { Form, Button } from "react-bootstrap";

const NewProviderForm = () => {
  return (
    <Form>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Label>What type of services would you like to provide?</Form.Label>
      {["checkbox"].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Pet Sitting"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Dog Walking"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="Pet Boarding"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}

      <Form.Group>
        <Form.File id="my image" label="Add your image" />
      </Form.Group>

      <Button variant="info" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default NewProviderForm;
