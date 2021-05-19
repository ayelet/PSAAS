import React from "react";
import useToken from "../../App/useToken";
import LoginPage from "../LoginPage/LoginPage";

function Dashboard() {
  const { token, setToken } = useToken();

  if (!token) {
    return <LoginPage setToken={setToken} />;
  }
  return <div>User's Dashboard</div>;
}

export default Dashboard;
