import React, { useState, useRef, useEffect } from "react";
import { Form, Col, Row } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";

import "./FilterPrice.css";

const FilterPrice = (props) => {
  // const { parentCallback, maxValue, filterPrice } = props;
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(50);
  const [priceFilter, setPriceFilter] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.value, e.currentTarget.value);
    setPriceFilter(e.currentTarget.value);
    // props.parentCallback(maxValue);
  };

  useEffect(() => {
    props.parentCallback({ maxValue, priceFilter });
    return () => {
      // cleanup;
    };
  }, [maxValue, priceFilter]);

  return (
    <div>
      <Form.Group controlId="maxPrice">
        <Form.Label inline>Price (&#8362;)</Form.Label>
        <Form.Check
          defaultChecked
          key="1"
          label="Any price"
          name="group1"
          type="radio"
          id="radio-1"
          value={false}
          onChange={handleChange}
        />
        <Form.Check
          key="2"
          label="Custom"
          name="group1"
          type="radio"
          id="radio-2"
          value={true}
          onChange={handleChange}
        />

        <Form.Group as={Row}>
          <Col xs="8">
            <RangeSlider
              value={maxValue}
              disabled={!priceFilter}
              onChange={(e) => {
                setMaxValue(e.target.value);
              }}
              variant="info"
              tooltip="off"
            />
          </Col>
          <Col xs="6">
            <Form.Label inline for="max-input">
              Max.{" "}
            </Form.Label>
            <Form.Control
              name="max-input"
              value={maxValue}
              onChange={(e) => {
                setMaxValue(e.target.value);
                console.log(e.target.value);
              }}
            />
          </Col>
        </Form.Group>
      </Form.Group>
    </div>
  );
};

export default FilterPrice;
