import "./FilterByDate.css";

import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Form } from "react-bootstrap";

const FilterByDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div>
      <Form.Group>
        <Form.Label>Available Dates</Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Label>From:</Form.Label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="sm"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>To: &nbsp; </Form.Label>
        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
      </Form.Group>
    </div>
  );
};

export default FilterByDate;
