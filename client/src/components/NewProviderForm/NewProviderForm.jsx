import "./NewProviderForm.css";

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
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

async function uploadImage(id, file) {
  try {
    const fd = new FormData();
    // console.log(selectedFile);
    fd.append("image", file[0], file.name);
    const res = axios({
      method: "post",
      url: "/providers/uploadImage/" + id,
      data: fd,
      headers: { "Content-Type": "multipart/form-data" },
    });
    // const res = await axios.post("/providers/imageUpload/:id", fd);
    console.log(res);
  } catch (err) {
    console.log("Error uploading image: ", err.message);
  }
}

const NewProviderForm = () => {
  const history = useHistory();
  //   const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [serviceTypes, setServiceTypes] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [price, setPrice] = useState(0);

  const handleChange = (e) => {
    // console.log(e.target.id, e.target.value, e.target.name);
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
    } else if (e.target.id === "price") {
      setPrice(e.target.value);
    } else if (e.target.id.includes("gender")) {
      // console.log(e.target.id, e.target.value);
      setGender(e.target.value);
    } else if (e.target.id === "description") {
      console.log("dsc:", e.target.value);
      setDescription(e.target.value);
    } else if (e.target.id.includes("checkbox")) {
      // console.log(serviceTypes, e.target.value, e.target.checked);
      if (e.target.checked) setServiceTypes([...serviceTypes, e.target.name]);
      else {
        const array = [...serviceTypes];
        // const index = array.indexOf(e.target.name);
        // // console.log("index :", index, e.target.name);
        // if (index !== -1) array.splice(index, 1);
        // setServiceTypes(array);
        setServiceTypes(array.filter((service) => service !== e.target.name));
      }
    } else if (e.target.id === "image1") {
      //   this.setState({ imageurl: e.target.value });
      console.log(e.target.value);
    }
  };

  //TODO-ADD authentication check to form
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("^^^^^provider new: ", description, serviceTypes);
    try {
      const provider = await addProvider({
        details: {
          first_name: firstName,
          last_name: lastName,
          gender: gender,
          email: email,
          password: password,
          phone: "933-244-7195",
        },
        address: { city, street },
        price: price,
        serviceTypes: serviceTypes,
        images: [
          {
            imageUrl:
              "https://images.ctfassets.net/2t8dhn7s97w9/43QTmwfv1Da9jl9G2kf4Eb/ac724988417c66238ef7b9ef3594054c/DDC_1.png",
          },
          {
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Ehof1XzEvsummQTI2l5qBt0Bibd-BMMiqw&usqp=CAU",
          },
        ],

        ratings: [],
        description: description,
      });
      await uploadImage(provider.id, selectedFile);
      history.push("/providers");
    } catch (err) {
      console.log("error in registration", e.message);
    } finally {
      // window.location.reload();
    }
  };

  const onFileSelected = (e) => {
    console.log(e.target.files);
    //TODO: add validation of images only
    setSelectedFile(e.target.files);
  };

  const onFileUpload = async (e) => {
    // const fd = new FormData();
    // console.log(selectedFile);
    // fd.append("image", selectedFile[0], selectedFile.name);
    // const res = axios({
    //   method: "post",
    //   url: "/providers/me/  const fd = new FormData();
    // console.log(selectedFile);
    // fd.append("image", selectedFile[0], selectedFile.name);
    // const res = axios({
    //   method: "post",
    //   url: "/providers/me/imageUpload/",
    //   data: fd,
    //   headers: { "Content-Type": "multipart/form-data" },
    // });
    // // const res = await axios.post("/providers/imageUpload/:id", fd);
    // console.log(res);/",
    //   data: fd,
    //   headers: { "Content-Type": "multipart/form-data" },
    // });
    // // const res = await axios.post("/providers/imageUpload/:id", fd);
    // console.log(res);
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
      <Form.Group controlId="description">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="gender">
        <Form.Label>Gender</Form.Label>

        <div key={`inline-radio`} className="mb-3">
          <Form.Check
            inline
            value="Female"
            label="Female"
            name="gender"
            type="radio"
            id={`gender-radio-1`}
            onChange={handleChange}
          />
          <Form.Check
            inline
            value="Male"
            label="Male"
            name="gender"
            type="radio"
            id={`gender-radio-2`}
            onChange={handleChange}
          />
          <Form.Check
            inline
            value="Other"
            label="Other"
            name="gender"
            type="radio"
            id={`gender-radio-3`}
            onChange={handleChange}
          />
        </div>
      </Form.Group>
      <Form.Group controlId="price">
        <Form.Label>Price/Day</Form.Label>
        <Form.Control
          inline
          type="number"
          placeholder="Price"
          onChange={handleChange}
        />
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
              name="Pet Sitting"
              type={type}
              id={`${type}-1`}
              onChange={handleChange}
            />
            <Form.Check
              inline
              label="Dog Walking"
              name="Dog Walking"
              type={type}
              id={`${type}-2`}
              onChange={handleChange}
            />
            <Form.Check
              inline
              label="Pet Boarding"
              name="Pet Boarding"
              type={type}
              id={`${type}-2`}
              onChange={handleChange}
            />
          </div>
        ))}
      </Form.Group>

      <Form.Group controlId="image1">
        <Form.File
          id="my image"
          label="Add your image"
          onChange={onFileSelected}
        />
        <Button variant="info" inline onClick={onFileUpload}>
          Upload
        </Button>
      </Form.Group>

      <Button variant="info" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default NewProviderForm;
