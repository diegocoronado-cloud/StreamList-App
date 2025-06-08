import React, { useState } from "react";
import "./StreamList.css";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";

const StreamList = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setList([...list, { text: input, completed: false }]);
      setInput("");
    }
  };

  const handleDelete = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditText(list[index].text);
  };

  const handleUpdate = () => {
    const updatedList = list.map((item, i) =>
      i === editingIndex ? { ...item, text: editText } : item
    );
    setList(updatedList);
    setEditingIndex(null);
    setEditText("");
  };

  const handleComplete = (index) => {
    const updatedList = list.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setList(updatedList);
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

      <ul className="streamlist-items">
        {list.map((item, index) => (
          <li key={index} className={item.completed ? "completed" : ""}>
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={handleUpdate}><FaCheck /></button>
              </>
            ) : (
              <>
                <span>{item.text}</span>
                <div className="item-actions">
                  <button onClick={() => handleComplete(index)}><FaCheck /></button>
                  <button onClick={() => handleEdit(index)}><FaEdit /></button>
                  <button onClick={() => handleDelete(index)}><FaTrash /></button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StreamList;
