import React from "react";

const Items = ({ item, check }) => {
  return (
    <div className="flex items-center">
      <div className="flex">
        <input
          id={item.label}
          checked={item.checked}
          onChange={(e) => {
            check(e.target.checked , item.label);
          }}
         
          type="checkbox"
        />
      </div>
      <label htmlFor={item.label} className="mb-1 ml-3">
        {item.label}
      </label>
    </div>
  );
};

export default Items;
