import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StreamList from "./components/StreamList";
import Movies from "./components/Movies";
import Cart from "./components/Cart";
import About from "./components/About";
import Subscriptions from "./components/Subscriptions";
import "./App.css";

function App() {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  return (
    <Router>
      <Navbar cart={cart} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<StreamList />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/subscriptions" element={<Subscriptions cart={cart} setCart={setCart} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
