import "./ProvidersPage.css";

import React, { useState, useEffect } from "react";
// import Filter from "../../components/Filters/Filter/Filter";
import ProviderCard from "../../components/ProviderCard";
import FilterRating from "../../components/Filters/FilterRating/FilterRating";
import FilterByDate from "../../components/Filters/FilterByDate/FilterByDate";
import FilterProviderType from "../../components/Filters/FilterProviderType/FilterProviderType";
import FilterPrice from "../../components/Filters/FilterPrice/FilterPrice";
import { Form, Button } from "react-bootstrap";
// import { Card } from "react-bootstrap";

export const ProvidersPage = () => {
  const [filters, setFilters] = useState();
  const [filterPrice, setFilterPrice] = useState(false);
  const [maxPrice, setMaxPrice] = useState(0);
  const handleFilterByRating = (data) => {
    console.log("Parent: option chosen: ", data);
  };

  const handleFilterByServiceType = (data) => {
    console.log("Parent: service types: ", data);
  };

  const handleFilterByDate = (data) => {
    console.log("Parent: dates:, ", data);
  };

  const handleFilterByLocation = (data) => {
    console.log("Parent: filter by distance: ", data);
  };

  const handleFilterByPrice = (data) => {
    console.log("Parent callback = price filter: ", data);
    setMaxPrice(data.maxPrice);
    setFilterPrice(data.filterPrice);
    updateFilters("price");
  };
  //////////////////////////////////
  const addOrRemoveFilter = (item) => {
    if (filters.includes(item)) {
      const filteredItems = filters.filter(
        (filteredItem) => filteredItem !== item
      );
      setFilters([...filteredItems]);
    } else {
      setFilters([...filters, item]);
    }
  };
  ////////////////////////////////////

  const handleSubmit = (e) => {
    console.log("Form submitted");
  };

  const updateFilters = (updatedFilter) => {
    let data = {};
    switch (updatedFilter) {
      case "price":
        return data = {
          filter: "price",
          active: filterPrice,
          min: 0,
          max: maxPrice,
        };
        // addOrRemoveFilter(data);
      default:
        return data;
    }
  };

  return (
    <div className="providers-page">
      <aside className="providers-filters">
        <Form onSubmit={handleSubmit}>
          <div className="filter-wrapper">
            <FilterRating parentCallback={handleFilterByRating} />
          </div>
          <div className="filter-wrapper">
            <FilterByDate parentCallback={handleFilterByDate} />
          </div>
          <div className="filter-wrapper">
            <FilterProviderType parentCallnack={handleFilterByServiceType} />
          </div>
          <div className="filter-wrapper">
            <FilterPrice parentCallback={handleFilterByPrice} />
          </div>
          <Button variant="info" type="submit">
            Submit
          </Button>
        </Form>
      </aside>
      <main className="providers-list">
        <ProviderCard filters={filters} />
      </main>
    </div>
  );
};
