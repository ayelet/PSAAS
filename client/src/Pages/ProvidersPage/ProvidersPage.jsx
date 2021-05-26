import "./ProvidersPage.css";

import React, { useState } from "react";
// import Filter from "../../components/Filters/Filter/Filter";
import ProviderCard from "../../components/ProviderCard";
import FilterRating from "../../components/Filters/FilterRating/FilterRating";
import FilterByDate from "../../components/Filters/FilterByDate/FilterByDate";
import FilterProviderType from "../../components/Filters/FilterProviderType/FilterProviderType";
import FilterPrice from "../../components/Filters/FilterPrice/FilterPrice";
import { Form, Button } from "react-bootstrap";
import ProvidersList from "../../components/ProvidersList/ProvidersList";
import ProvidersMap from "../../components/ProvidersMap/ProvidersMap";
// import { Card } from "react-bootstrap";

export const ProvidersPage = () => {
  const [filters, setFilters] = useState([]);
  const [displayFiltered, setDisplayFiltered] = useState(false);
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
    // setMaxPrice(data.maxValue);
    // setFilterPrice(data.filterPrice);
    updateFilters("price");
  };

  const handleClearFilters = (e) => {
    setFilters([]);
    setDisplayFiltered(false);
    console.log("filter display state: ", displayFiltered);
  };
  //////////////////////////////////
  // const addOrRemoveFilter = (item) => {
  //   // remove

  //   if (filters.includes(item)) {
  //     console.log("removing filter");
  //     const filteredItems = filters.filter(
  //       (filteredItem) => filteredItem !== item
  //     );
  //     setFilters([...filteredItems]);
  //   } else {
  //     // add filter
  //     console.log("adding filter");
  //     setFilters([...filters, item]);
  //   }
  //   console.log(filters);

  //   setDisplayFiltered(filters.length > 0);
  //   console.log("filters= length: ", filters.length, displayFiltered);
  // };
  ////////////////////////////////////
  // const addFilter = (item) => {
  //   if (item.active) && (!filters.includes(item))
  //     setFilters([...filters, item])

  // }

  // const removeFilter = (item ) => {
  //   if (!item.active && filters.includes(item))
  //       const filteredItems = filters.filter(
  //       (filteredItem) => filteredItem !== item
  //     );
  //     setFilters([...filteredItems]);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const updateFilters = (name) => {
    let data = {};
    switch (name) {
      case "price":
        data = {
          name: name,
          active: filterPrice,
          min: 0,
          max: maxPrice,
        };
        break;
      default:
        break;
    }
    if (data.active) {
      let tempFilters = filters.filter((item) => item.name !== data.name);
      setFilters([...tempFilters, data]);
    }
    // setFilters([...filters, data]);
    // addOrRemoveFilter(data);
  };

  return (
    <div className="providers-page">
      <aside className="providers-filters">
        <Form onSubmit={handleSubmit}>
          <Button onClick={handleClearFilters}>Clear filters</Button>
          <div className="filter-wrapper">
            <FilterRating parentCallback={handleFilterByRating} />
          </div>
          <div className="filter-wrapper">
            <FilterProviderType parentCallnack={handleFilterByServiceType} />
          </div>
          <div className="filter-wrapper">
            <FilterPrice parentCallback={handleFilterByPrice} />
          </div>
          <div className="filter-wrapper">
            <FilterByDate parentCallback={handleFilterByDate} />
          </div>
          <Button variant="info" type="submit">
            Submit
          </Button>
        </Form>
      </aside>
      <main className="providers-list">
        <ProviderCard
          filters={filters}
          onChange={updateFilters}
          displayFiltered={displayFiltered}
        />
      </main>{" "}
      <aside className="providers-map">
        <ProvidersMap />
      </aside>
      <hr />
      <ProvidersList />
    </div>
  );
};
