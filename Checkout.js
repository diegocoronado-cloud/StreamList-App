// File: src/components/Checkout.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Review your order</h2>
      <button onClick={() => navigate("/credit-card")}>Proceed to Payment</button>
    </div>
  );
};

export default Checkout;