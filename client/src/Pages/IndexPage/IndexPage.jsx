import React from "react";

import { Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

// import AboutPage from "../About/AboutPage";
// import ContactPage from "../Contact/Contact";
import HomePage from "../HomePage/HomePage";
import LoginPage from "../LoginPage/LoginPage";
import useToken from "../../App/useToken";
import { ProvidersPage } from "../ProvidersPage/ProvidersPage";
import { ProviderDetailsPage } from "../ProviderDetailsPage/ProviderDetailsPage";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import Signup from "../SignUp/SignUp";
import { PrivateRoute } from "../../components/PrivateRoute";

export default function IndexPage() {
  const { token, setToken } = useToken();
  return (
    <div>
      <Route path="/" exact component={HomePage} />
      <Route
        path="/Login"
        exact
        render={(props) => <LoginPage {...props} setToken={setToken} />}
      />
      <Route path="/SignUp" exact render={(props) => <Signup />} />
      <Route
        path="/Dashboard"
        exact
        render={(props) => <Dashboard {...props} token={token} />}
      />
      <Route path="/Providers" exact component={ProvidersPage} />
      <Route path="/Provider/:id" exact component={ProviderDetailsPage} />
      <Route path="/Provider/service/:name" exact component={ProvidersPage} />
      <Route
        path="/RegisterProvider"
        exact
        render={(props) => <RegistrationPage {...props} setToken={setToken} />}
      />
      {/*   <Route path="/Contact" exact component={ContactPage} />
        <Route path="/About" exact component={AboutPage} />
       
    
      */}
    </div>
  );
}
