import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import StreamList from "./components/StreamList";
import Movies from "./components/Movies";
import Cart from "./components/Cart";
import About from "./components/About";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import CreditCard from "./components/CreditCard";
import Subscriptions from "./components/Subscriptions";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute><StreamList /></PrivateRoute>} />
            <Route path="/movies" element={<PrivateRoute><Movies /></PrivateRoute>} />
            <Route path="/subscriptions" element={<PrivateRoute><Subscriptions cart={cart} setCart={setCart} /></PrivateRoute>} />
            <Route path="/cart" element={<PrivateRoute><Cart cart={cart} setCart={setCart} /></PrivateRoute>} />
            <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
            <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
            <Route path="/credit-card" element={<PrivateRoute><CreditCard /></PrivateRoute>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
