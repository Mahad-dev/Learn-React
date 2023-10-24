import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SlideToUnlock = ({ className, handleValue }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [max] = useState(0);
  function handleValue(e) {
    setValue(e);
  }
  return (
   <div className="p-4 bg-slate-600 w-96">
     <div className={`w-full max-w-[400px] h-[70px] relative ${className}`}>
      {value !== max && (
        <input
          className="p-0 absolute cursor-pointer opacity-0 inset-0 z-[999]"
          onChange={(e) => value !== max && handleValue(e.target.value)}
          type="range"
          value={value}
          max={max}
          onMouseUp={() => value !== max && handleValue(0)}
        />
      )}
      <button
        onClick={() => navigate("github")}
        className={`relative h-full text-white p-0 w-[100%] overflow-hidden  bg-[rgba(255,255,255,0.26)] shadow-[0px_7.62963px_7.62963px_0px_rgba(0,0,0,0.25)] rounded-full border-[1.907px] border-solid border-white`}
      >
        <span className="w-full h-full flex items-center justify-center cursor-pointer animate-fade-in relative z-[101] text-white text-[20px] font-bold text-shadow-light">
          {value === max ? "I want NFT #17446" : "Create Your ID"}
        </span>
        <span
          className="absolute rounded-full cursor-pointer bg-[rgba(106,0,241,0.67)] inset-0"
          style={{
            width: `calc(${value}% + ${100 - max}%)`,
          }}
        ></span>
        {value !== max && (
          <span
            className="w-[70px] h-[70px] grid place-items-center my-auto absolute inset-0 rounded-full cursor-pointer bg-white z-[102] "
            style={{ left: value > 17 ? `calc(${value}% - 70px)` : "0" }}
          >
            {" "}
          </span>
        )}
        {value === max && (
          <div
            className="animate-fade-in absolute inset-0 right-5 ml-auto my-auto w-[18px] h-[18px] cursor-pointer z-[500]"
            onClick={(e) => {
              handleValue(0);
              e.stopPropagation();
            }}
          >
            icon
          </div>
        )}
      </button>
    </div>
   </div>
  );
};

export default SlideToUnlock;
