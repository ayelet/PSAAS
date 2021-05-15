import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Card, Button, Form } from "react-bootstrap";

import { userActions } from "../_actions";

export default function Signup(props) {
  // constructor(props) {
  //   super(props);

  // this.state = {
  //   user: {
  //     firstName: "",
  //     lastName: "",
  //     userName: "",
  //     password: "",
  //   },
  //   submitted: false,
  // };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   const { user } = state;
  //   // setState({
  //   //   user: {
  //   //     ...user,
  //   //     [name]: value,
  //   //   },
  //   // });

  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // setState({ submitted: true });
    setSubmitted(true);
    // const { user } = state;
    if (firstName && lastName && userName && password) {
      props.register(firstName, lastName, userName, password);
    }
  };

  const { registering } = props;
  // const { user, submitted } = state;
  return (
    //   <div className="col-md-6 col-md-offset-3">
    //     <h2>Register</h2>
    //     <form name="form" onSubmit={handleSubmit}>
    //       <div
    //         className={
    //           "form-group" + (submitted && !firstName ? " has-error" : "")
    //         }
    //       >
    //         <label htmlFor="firstName">First Name</label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           name="firstName"
    //           value={firstName}
    //           onChange={(e) => setFirstName(e.target.value)}
    //         />
    //         {submitted && !firstName && (
    //           <div className="help-block">First Name is required</div>
    //         )}
    //       </div>
    //       <div
    //         className={
    //           "form-group" + (submitted && !lastName ? " has-error" : "")
    //         }
    //       >
    //         <label htmlFor="lastName">Last Name</label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           name="lastName"
    //           value={lastName}
    //           onChange={(e) => {
    //             setLastName(e.target.value);
    //           }}
    //         />
    //         {submitted && !lastName && (
    //           <div className="help-block">Last Name is required</div>
    //         )}
    //       </div>
    //       <div
    //         className={
    //           "form-group" + (submitted && !userName ? " has-error" : "")
    //         }
    //       >
    //         <label htmlFor="userName">Username</label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           name="userName"
    //           value={userName}
    //           onChange={(e) => setUserName(e.target.value)}
    //         />
    //         {submitted && !userName && (
    //           <div className="help-block">Username is required</div>
    //         )}
    //       </div>
    //       <div
    //         className={
    //           "form-group" + (submitted && !password ? " has-error" : "")
    //         }
    //       >
    //         <label htmlFor="password">Password</label>
    //         <input
    //           type="password"
    //           className="form-control"
    //           name="password"
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //         {submitted && !password && (
    //           <div className="help-block">Password is required</div>
    //         )}
    //       </div>
    //       <div className="form-group">
    //         <button className="btn btn-primary">Register</button>
    //         {registering && (
    //           <img
    //             src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
    //             alt=""
    //           />
    //         )}
    //         <Link to="/login" className="btn btn-link">
    //           Cancel
    //         </Link>
    //       </div>
    //     </form>
    //   </div>
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

function mapState(state) {
  const { registering } = state.registration;
  return { registering };
}

const actionCreators = {
  register: userActions.register,
};

const connectedRegisterPage = connect(mapState, actionCreators)(Signup);
export { connectedRegisterPage as RegisterPage };
