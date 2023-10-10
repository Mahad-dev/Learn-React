import React from "react";

const SwitchComponent = ({ moveLeft, moveRight , disabled }) => {
    const { disabledRight, disabledLeft } = disabled;
  return (
    <div className="flex flex-col">
      <button  disabled={disabledRight} className="px-7 disabled:bg-slate-400" onClick={moveLeft}>&gt; </button>
      <button disabled={disabledLeft} className="px-7 disabled:bg-slate-400" onClick={moveRight}>&lt; </button>
    </div>
  );
};

export default SwitchComponent;
