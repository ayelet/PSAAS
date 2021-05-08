import "./App.css";
// import Signup from "./components/Pages/SignUp/SignUp";
// import welcome from "./assets/img/welcome.jpg";
// import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import { BrowserRouter } from "react-router-dom";
import IndexPage from "./components/Pages/IndexPage/IndexPage";
import Layout from "./components/Layout/Layout";
// import { useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <IndexPage />{" "}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
