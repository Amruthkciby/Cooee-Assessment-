import React, { useState } from "react";
import "./App.css";

const Armstrong = ({ username, onLogout }) => {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [savedNumbers, setSavedNumbers] = useState([]);

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const checkArmstrong = (num) => {
    const digits = num.toString().split("");
    const power = digits.length;
    const sum = digits.reduce(
      (acc, digit) => acc + Math.pow(parseInt(digit), power),
      0
    );
    return sum === num;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = Number(number);
    if (checkArmstrong(num)) {
      setMessage(`${num} is an Armstrong number.`);
      if (!savedNumbers.includes(num)) {
        setSavedNumbers([...savedNumbers, num]);
      }
    } else {
      setMessage(`${num} is not an Armstrong number.`);
    }
  };

  return (
    <div className="form-container">
      <button className="logout-btn" onClick={onLogout}>
        Logout
      </button>
      <h2>Welcome, {username}</h2>
      <h3>Armstrong Number Checker</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Enter a number:</label>
          <input
            type="number"
            name="number"
            value={number}
            onChange={handleChange}
            placeholder="Enter a number"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Check Armstrong
        </button>
      </form>
      {message && <p>{message}</p>}
      {savedNumbers.length > 0 && (
        <div className="saved-numbers">
          <h4>Saved Armstrong Numbers:</h4>
          <ul>
            {savedNumbers.map((num, index) => (
              <li key={index}>{num}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Armstrong;
