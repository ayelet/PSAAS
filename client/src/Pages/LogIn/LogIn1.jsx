import "./LogIn.css";
import React, { useState } from "react";
import PropTypes from "prop-types";
// import api from "../../api/api";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

async function loginUser(credentials) {
  try {
    console.log("Login user", credentials);
    const url = "api/login";
    const { data } = await axios.post(url, {
      body: JSON.stringify(credentials),
    });
    // console.log("recieved response ", data);
    // return data;
    return { token: "test123" };
    // setData(data);
  } catch (err) {
    console.log("Login Error:", err);
  }

  // return fetch("http://localhost:8000/login", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(credentials),
  // }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  console.log("setToken ", setToken);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    console.log("setToken", setToken);
    setToken(token);
  };

  return (
    <div className="form-wrapper">
      <div className="login-wrapper">
        <h1>Sign in to your account</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <p>email</p>
              <input
                type="text"
                onChange={(e) => setUserName(e.target.value)}
              />
            </label>
          </div>
          <label>
            <p>Password</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
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
  );
}
