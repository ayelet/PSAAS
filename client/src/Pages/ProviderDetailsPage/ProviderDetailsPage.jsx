import "./ProviderDetailsPage.css";
import { createBrowserHistory } from "history";
import React from "react";

const history = createBrowserHistory();
export const ProviderDetailsPage = (props) => {
  const handleClick = () => {
    history.push("/Providers");
    // <Link to="/Providers"></Link>;
  };
  console.log("details about a certain provider");
  return (
    <div className="details">
      <button onClick={handleClick} className="btn btn-info">
        Back
      </button>
      <div className="provider-details-content">
        Details about this provider
      </div>
    </div>
  );
};
