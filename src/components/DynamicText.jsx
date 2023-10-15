import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const DynamicText = () => {
  const [currentText, setCurrentText] = useState("");
  const [count, setCount] = useState(0);
  const [incrementing, setIncrementing] = useState(true);
  const texts = [
    "Life is short, make it sweet.",
    "Dream big and dare to fail.",
    "Stay curious and keep learning.",
    "Embrace the glorious mess that you are.",
    "In the middle of every difficulty lies opportunity.",
    "Simplicity is the ultimate sophistication.",
    "Be yourself; everyone else is already taken.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Life is really simple, but we insist on making it complicated.",
    "The only way to do great work is to love what you do.",
  ];

  console.log(count);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count === texts.length - 2) {
        setIncrementing(false);
      } else if (count === 1) {
        setIncrementing(true);
      }

      if (incrementing) {
        setCount(count + 1);
      } else {
        setCount(count - 1);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [count, incrementing]);
  return (
    <div className="flex flex-col">
      <span>new text</span>
      <span className="font-bold text-2xl">{texts[count]}</span>
      <span className="text-red-700 text-xl">{count}</span>
    </div>
  );
};

export default DynamicText;
