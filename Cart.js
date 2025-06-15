import React, { useEffect } from "react";
import "./Cart.css";

const Cart = ({ cart, setCart }) => {
  const updateQuantity = (id, amount) => {
    const updated = cart.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
    );
    setCart(updated);
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <strong>{item.name}</strong> (${item.price.toFixed(2)}) x {item.quantity}
                <div className="cart-controls">
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <button onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
