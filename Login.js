// File: src/components/Login.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    login();
    navigate("/");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Login to Continue</h2>
      <button onClick={handleLogin}>Login with OAuth</button>
    </div>
  );
};

export default Login;