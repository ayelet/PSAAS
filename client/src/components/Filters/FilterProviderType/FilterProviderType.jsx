import React, { useState } from "react";
import "./FilterProviderType.css";
import { BiHomeHeart } from "react-icons/bi";
import { Form } from "react-bootstrap";

const FilterProviderType = (props) => {
  const serviceTypes = [
    { name: "Pet sitting", checked: true },
    { name: "Dog Walking", checked: true },
    { name: "Pet Boarding", checked: true },
    { name: "Pet Taxi", checked: false },
  ];

  const [services, setServices] = useState([]);
  console.log(services);

  const handleChange = (event) => {
    console.log("Child value changed to ", event.target.value);
    // props.parentCallback(option);
  };

  return (
    <Form.Group controlId="services">
      <Form.Label>I'm Looking For</Form.Label>
      {["checkbox"].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            defaultChecked
            label="Pet Sitting"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
            onChange={handleChange}
          />
          <Form.Check
            inline
            defaultChecked
            label="Dog Walking"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
            onChange={handleChange}
          />
          <Form.Check
            inline
            defaultChecked
            label="Pet Boarding"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
            onChange={handleChange}
          />
          <Form.Check
            inline
            defaultChecked
            label="Pet Taxi"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
            onChange={handleChange}
          />
        </div>
      ))}
      {services.map((service) => {
        return (
          <Form.Check
            inline
            label={service.name}
            type="checkbox"
            name="group2"
            checked={service.checked}
          />
        );
      })}
    </Form.Group>
  );
};

export default FilterProviderType;

//   {/* <div className="filter-wrapper">
//       <label>I'm Looking For</label>
//           <select name="country" className="form-control select-type">
//         <option value="pet-sitters">Select Service </option>
//         <option value="pet-house-sitting">Pet Sitting </option>
//         <option value="dog-walking">Dog Walking </option>
//         <option value="dog-walking">Pet Boarding </option>
//         <option value="pet-taxi">Pet Taxi </option>
//         <option value="pet-daycare">Pet Daycare </option>
//       </select> */}
