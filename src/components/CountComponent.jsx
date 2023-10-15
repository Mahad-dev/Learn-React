import React from "react";
import { useRef } from "react";
import { useState } from "react";

const CountComponent = () => {
  const [count, setCount] = useState(0);
  //   console.log(count);
  const countRef = useRef(null);
  return (
    <div className="flex flex-col">
      <span className="p-5 rounded-md bg-blue-600 text-white">{count}</span>
      <span className="p-5 rounded-md bg-blue-600 text-white">Ref count</span>
      <input ref={countRef} type="text" />
      <button
        onClick={() => {
          setCount(countRef.current.value);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default CountComponent;
