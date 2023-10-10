// import React from "react";

import { useState } from "react";

const inputItem = [1, 1];
const MyComponent = () => {
  const [state, setState] = useState(inputItem);
  function addItem() {
    setState([...state, 1]);
    console.log(state);
  }
  function removeItem(indexItem) {
    if (state.length > 1) {
      // const newArray = state.filter((_, index) => index !== indexItem);
      // setState(newArray);
      const newArr = state.slice(indexItem, 1);
      setState(newArr);
    }
  }
  function myFn() {
    const a = document.getElementById('root');
    // a.style.backgroundColor = 'red'
    a.innerHTML = `<button onClick={() => console.log('abc')}>button</button>`
    
  }
  function returnHtml(){
    return (<button onClick={myFn}>go back to page</button>)
  }
  return (
    <div>
      <button onClick={myFn}>click me</button>
      <button onClick={() => addItem()} className="btn">
        add item
      </button>
      <button onClick={() => setState([])} className="btn">
        Remove All
      </button>

      {state.map((_, index) => (
        <div key={index}>
          <input type="text" />
          <button
            onClick={() => removeItem(index)}
            style={{
              marginLeft: "1rem",
            }}
            className="btn"
          >
            remove item
          </button>
        </div>
      ))}
    </div>
  );
};
export default MyComponent;
