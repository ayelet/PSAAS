import "./LogIn.css";
import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
// import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Login(props) {
  // const [username, setUserName] = useState();
  // const [password, setPassword] = useState();
  //   console.log("setToken ", setToken);
  const emailRef = useRef();
  const passwordRef = useRef();
  //   const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // reset login status
  this.props.logout();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await props.login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card form-wrapper style={{ background: "#f6d360" }}>
            <Card.Body>
              <h2 className="text-center mb-4">Log In to Your Account</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Button
                  disabled={loading}
                  variant="info"
                  className="w-100"
                  type="submit"
                >
                  Log In
                </Button>
              </Form>
              <div className="w-100 text-center mt-3">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Need an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </Container>
      <div className="form-wrapper">
        <div className="login-wrapper">
          <h1>Sign in to your account</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                <p>email</p>
                <input type="text" />
              </label>
            </div>
            <label>
              <p>Password</p>
              <input type="password" />
            </label>
            <div>
              <button type="submit">Continue</button>
            </div>
          </form>
        </div>
        <div className="login-wrapper">
          <div>
            <span>Don’t have an account?</span>
          </div>
          <Link to="/SignUp">
            <Button variant="info">Sign Up</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
