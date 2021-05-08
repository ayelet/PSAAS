import "./ProvidersPage.css";

import React from "react";
import Filter from "../../Filter/Filter";
import ProviderCard from "../../ProviderCard/ProviderCard";
import FilterRating from "../../FilterRating/FilterRating";
import FilterByDate from "../../FilterByDate/FilterByDate";

export const ProvidersPage = () => {
  return (
    <div className="providers-page">
      <aside className="providers-filters">
        <FilterRating />
        <FilterByDate />
        <Filter name="Filter 1" />
        <Filter name="Filter 2" />
        <Filter name="Filter 3" />
      </aside>
      <main className="providers-list">
        <ProviderCard />
      </main>
    </div>
  );
};
