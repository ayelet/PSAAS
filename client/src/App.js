import "./App.css";
import React from "react";
// import Signup from "./components/Pages/SignUp/SignUp";
// import welcome from "./assets/img/welcome.jpg";
// import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import { BrowserRouter } from "react-router-dom";
import IndexPage from "./Pages/IndexPage/IndexPage";
import Layout from "./components/Layout/Layout";
import { Provider } from "react-redux";
import { store } from "./helpers/store";
// import { useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <IndexPage />{" "}
        </Layout>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
