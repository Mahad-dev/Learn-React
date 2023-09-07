import React, { useEffect, useState } from "react";

const ArrayPuah = () => {
  const [PushItems, setPushItems] = useState(["item 1", "item 2", "item 3"]);
  const [value, setValue] = useState("add anything");
  const handleAddItem = () => {
    setPushItems([...PushItems, value]);
  };
  const handleRemoveItem = () => {
    setPushItems(PushItems.slice(0, -1));
  };
  const handleInputRemove = () => {
    const updatedItems = PushItems.filter((item) => item !== value);
    setPushItems(updatedItems);
  };

  return (
    <div className="item">
      <ul>
        {PushItems.map((index) => (
          <li key={index}>{index}</li>
        ))}
      </ul>
      <button onClick={handleAddItem}>click me</button>
      <button onClick={handleRemoveItem}>Remove item</button>
      <button disabled={PushItems.length === 0} onClick={handleInputRemove}>
        Remove input
      </button>
      <div className="input">
        <input
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleAddItem();
            }
          }}
          type="text"
        />
      </div>
    </div>
  );
};

export default ArrayPuah;
