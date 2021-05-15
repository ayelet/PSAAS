import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "C:\bootcampworkspacepetsitter-boardclient\node_modules\bootstrapdistcss\bootstrap.min.css";

export default function Signup(props) {
  // const emailRef = useRef();
  // const passwordRef = useRef();
  // const passwordConfirmRef = useRef();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [submitter, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // // this.setState({ submitted: true });
    // setSubmitted(true);
    // // const { user } = this.state;
    // if (user.firstName && user.lastName && user.username && user.password) {
    //   this.props.register(user);
    // }
  };

  const { registering } = props;
  return (
    // const { user, submitted } = this.state;
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required></Form.Control>
            </Form.Group>
            <Form.Group id="passwordConfirm ">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control type="passwordConfirm " required></Form.Control>
            </Form.Group>
            <Button type="submit" className="btn w-100">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? Log In
      </div>
    </>
  );
}
