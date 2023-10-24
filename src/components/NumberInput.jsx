import React, { useState } from "react";
import { useRef } from "react";

function NumberInput() {
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      // Use a regular expression to allow only digits
      setInputValue(value);
      setError(""); // Clear any previous error
    } else {
      setError("Please enter only numbers.");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        pattern="\d*"
        placeholder="Enter numbers only"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
      value={value}
        type="number"
        placeholder="Enter number"
        onChange={(e) => {
            setValue(e.target.value);
            console.log(value);
        }}
      />
      <button className="text-white" onClick={() => console.log(value)}>Value {value}</button>
      <button className="text-white" onClick={() => console.log(value)}>Value {value}</button>
    </div>
  );
}

export default NumberInput;
