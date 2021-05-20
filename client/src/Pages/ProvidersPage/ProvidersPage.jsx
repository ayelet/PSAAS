import "./ProvidersPage.css";

import React from "react";
import Filter from "../../components/Filters/Filter/Filter";
import ProviderCard from "../../components/ProviderCard/ProviderCard";
import FilterRating from "../../components/Filters/FilterRating/FilterRating";
import FilterByDate from "../../components/Filters/FilterByDate/FilterByDate";
import FilterProviderType from "../../components/Filters/FilterProviderType/FilterProviderType";
import FilterPrice from "../../components/Filters/FilterPrice/FilterPrice";
// import { Card } from "react-bootstrap";

export const ProvidersPage = () => {


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
  };

  return (
    <div className="providers-page">
      <aside className="providers-filters">
        <div className="filter-wrapper">
          <FilterRating parentCallback={handleFilterByRating} />
        </div>
        <div className="filter-wrapper">
          <FilterByDate parentCallback={handleFilterByDate} />
        </div>
        <div className="filter-wrapper">
          <FilterProviderType parentCallBack={handleFilterByServiceType} />
        </div>
        <div className="filter-wrapper">
          <FilterPrice parentCallBack={handleFilterByPrice} />
        </div>
        
      </aside>
      <main className="providers-list">
        <ProviderCard />
      </main>
    </div>
  );
};
