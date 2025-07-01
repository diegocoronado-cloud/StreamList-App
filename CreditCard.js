import React, { useState } from "react";

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState("");

  const handleInput = (e) => {
    let input = e.target.value.replace(/\D/g, "");
    if (input.length > 16) input = input.slice(0, 16);
    const formatted = input.replace(/(\d{4})(?=\d)/g, "$1 ");
    setCardNumber(formatted);
  };

  const handleSubmit = () => {
    localStorage.setItem("creditCard", cardNumber);
    alert("Card saved to localStorage.");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Enter Credit Card Information</h2>
      <input
        type="text"
        placeholder="1234 5678 9012 3456"
        value={cardNumber}
        onChange={handleInput}
        maxLength={19}
      />
      <button onClick={handleSubmit}>Save Card</button>
    </div>
  );
};

export default CreditCard;