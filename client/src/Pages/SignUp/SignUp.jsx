import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, Button, Form, Container } from "react-bootstrap";

import { connect } from "react-redux";
import { userActions, register } from "../../actions";
import axios from "axios";
export default function SignUp(props) {
  const history = useHistory();
  // console.log("props:", props);

  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [user, setUser] = useState({});

  const handleChange = (event) => {
    //   const { name, value } = event.target;
    const { name, value } = event.target;
    // console.log("onchnage: ", name, value);
    setUser({ ...user, [name]: value });
    // console.log("user on change: ", user);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   setSubmitted(true);

  //   console.log("registering: ", user);
  //   if (user.email && user.password) {
  //     console.log("email & pass validated");
  //     // const user = { email, password };
  //     // props.register(user);
  //     userActions.register(user);
  //   }
  //   // console.log("state: ", state);
  //   console.log("props: ", props);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const headers = {
        headers: { "Content-Type": "application/json" },
      };
      const { data } = await axios.post(
        "/api/users/",
        {
          email: user.email,
          password: user.password,
        },
        { header: headers }
      );
      localStorage.setItem("token", JSON.stringify(data.token));
      // userHasAuthenticated(true);
      console.log("returning data from registration:", data);
      history.push("/providers");
    } catch (e) {
      console.log("error in registration", e.message);
    } finally {
      // window.location.reload();
    }
  };

  const { registering } = props;
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card form-wrapper style={{ background: "#f6d360" }}>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  required
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  required
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group id="passwordConfirm ">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control type="password" required></Form.Control>
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
      </div>
    </Container>
  );
}

function mapState(state) {
  console.log("mapping state to props: ", state);
  const { registering } = state.registration;
  return { registering };
}

const actionCreators = {
  register: userActions.register,
};
// function mapDispatchToProps(dispatch) {
//   return {
//     register: (key, val) => dispatch(register(key val))
//   };
// }
// const actionCreators = {
//   login: userActions.login,
//   logout: userActions.logout,
// };

const connectedSignUp = connect(mapState, { actionCreators })(SignUp);
export { connectedSignUp as SignUp };
