import React, { useState } from "react";
import "./StreamList.css";

const StreamList = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      console.log("User Input:", input);
      setInput("");
    }
  };

  return (
    <div className="streamlist-container">
      <h2>Welcome to StreamList</h2>
      <form onSubmit={handleSubmit} className="streamlist-form">
        <input
          type="text"
          placeholder="Enter a movie or show title..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StreamList;