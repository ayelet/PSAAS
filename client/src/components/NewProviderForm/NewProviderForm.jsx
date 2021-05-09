import "./NewProviderForm.css";

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
// import { application } from "express";

// let user1 = {
//   details: {
//     first_name: "Morrie",
//     last_name: "Nolder",
//     gender: "Male",
//     email: "mnolderh@state.tx.us",
//     password: "rakeajyBTO",
//     phone: "209-320-4726",
//   },
//   serviceTypes: [
//     {
//       serviceType: "Cat Sitting",
//     },
//   ],
//   address: {
//     street: "87105 Ruskin Plaza",
//     city: "Kiryat Byalik",
//   },
//   ratings: [
//     {
//       rater_id: "Agata",
//       score: 5,
//       date: "2021-04-11T23:40:05.000Z",
//     },
//   ],
//   images: [],
//   availability: {
//     from: Date.now,
//     to: Date.now,
//   },
// };

//TODO: change fields for provider
async function addProvider(provider) {
  try {
    const headers = {
      headers: { "Content-Type": "application/json" },
    };

    console.log("Login user", provider, JSON.stringify(provider));
    const url = "/api/providers";

    const { data } = await axios.post(url, provider, { header: headers });

    console.log("recieved response ", data);
    return data;
    // setData(data);
  } catch (err) {
    console.log("Login Error:", err);
  }
}

const NewProviderForm = () => {
  //   const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [serviceTypes, setServiceTypes] = useState([]);

  const handleChange = (e) => {
    if (e.target.id === "firstName") {
      setFirstName(e.target.value);
    } else if (e.target.id === "lastName") {
      setLastName(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "city") {
      setCity(e.target.value);
    } else if (e.target.id === "street") {
      setStreet(e.target.value);
    } else if (e.target.id === "description") {
      setDescription(e.target.value);
    } else if (e.target.id === "image1") {
      //   this.setState({ imageurl: e.target.value });
      console.log(e.target.value);
    }
  };

  //TODO-ADD authentication check to form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const provider = await addProvider({
      details: {
        first_name: firstName,
        last_name: lastName,
        gender: "Female",
        email: email,
        password: password,
        phone: "933-244-7195",
      },
      address: { city, street },
      images: [
        {
          imageUrl: "https://img.etimg.com/thumb/msid-75599221",
        },
        {
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Ehof1XzEvsummQTI2l5qBt0Bibd-BMMiqw&usqp=CAU",
        },
      ],

      ratings: [],
      description: description,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          onChange={handleChange}
          placeholder="First Name"
        />
      </Form.Group>
      <Form.Group controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={handleChange}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="City" onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="street">
        <Form.Label>Street</Form.Label>
        <Form.Control
          type="text"
          placeholder="Street"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.description">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="gender">
        <Form.Label>Gender</Form.Label>
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Female"
              name="female"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="Male"
              name="male"
              type={type}
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label="Other"
              name="other"
              type={type}
              id={`inline-${type}-2`}
            />
          </div>
        ))}
      </Form.Group>
      <Form.Group controlId="services">
        <Form.Label>
          What type of services would you like to provide?
        </Form.Label>
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
      </Form.Group>

      <Form.Group controlId="image1">
        <Form.File id="my image" label="Add your image" />
      </Form.Group>

      <Button variant="info" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default NewProviderForm;
