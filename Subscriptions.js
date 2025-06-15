import React, { useEffect, useState } from "react";
import { products } from "../data/data";
import "./Subscriptions.css";

const Subscriptions = ({ cart, setCart }) => {
  const [warning, setWarning] = useState("");

  const addToCart = (item) => {
    const isSubscription = item.type === "subscription";
    const existingSub = cart.find(i => i.type === "subscription");

    if (isSubscription && existingSub) {
      setWarning("Only one subscription can be added at a time.");
      return;
    }

    const existing = cart.find(i => i.id === item.id);
    if (existing) {
      const updated = cart.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      setCart(updated);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    setWarning("");
  };

  return (
    <div className="subscriptions-container">
      <h2>Subscriptions & Products</h2>
      {warning && <p className="warning">{warning}</p>}
      <div className="product-grid">
        {products.map(item => (
          <div className="product-card" key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <strong>${item.price.toFixed(2)}</strong>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscriptions;
