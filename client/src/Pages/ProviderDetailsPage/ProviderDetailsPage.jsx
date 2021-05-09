import "./ProviderDetailsPage.css";
import { createBrowserHistory } from "history";
import React from "react";

import { Container } from "react-bootstrap";

const browserHistory = createBrowserHistory();
export const ProviderDetailsPage = (props) => {
  const handleClick = () => {
    browserHistory.push("/Providers");
  };
  console.log("details about a certain provider");
  return (
    <Container className="details">
      <button onClick={handleClick} className="btn btn-info">
        Back
      </button>
      <div className="provider-details-content">
        Details about this provider
      </div>
    </Container>
  );
};
