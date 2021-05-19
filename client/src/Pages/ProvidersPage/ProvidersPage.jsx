import "./ProvidersPage.css";

import React from "react";
import Filter from "../../components/Filter/Filter";
import ProviderCard from "../../components/ProviderCard/ProviderCard";
import FilterRating from "../../components/FilterRating/FilterRating";
import FilterByDate from "../../components/FilterByDate/FilterByDate";
import FilterProviderType from "../../components/Filters/FilterProviderType/FilterProviderType";
// import { Card } from "react-bootstrap";

export const ProvidersPage = () => {
  //  handleCallback = (childData) => {
  //    this.setState({ data: childData });
  //  };

  const handleFilterByRating = (data) => {
    console.log("Parent: option chosen: ", data);
  };

  return (
    <div className="providers-page">
      <aside className="providers-filters">
        <div className="filter-wrapper">
          <FilterRating parentCallback={handleFilterByRating} />
        </div>
        <div className="filter-wrapper">
          <FilterByDate />
        </div>
        <div className="filter-wrapper">
          <FilterProviderType />
        </div>

        <Filter name="Search By Price" />
        <Filter name="Filter 2" />
        <Filter name="Filter 3" />
      </aside>
      <main className="providers-list">
        <ProviderCard />
      </main>
    </div>
  );
};
