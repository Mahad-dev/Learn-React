import React from "react";

const TestingProps = () => {
  return (
    <div>
      <Component
        style={{
          backgroundColor: "red",
          opacity: ".5",
        }}
        text="hellow"
        bg="green"
      >
        <Input />
      </Component>
    </div>
  );
};

export default TestingProps;

export const Component = ({ text, bg, style, children }) => {
  console.log(bg);
  return (
    <div
      style={{
        backgroundColor: bg,
        ...style,
      }}
      className="text-4xl"
    >
      {text} {children}
    </div>
  );
};

export const Input = ({ icon, ...props }) => {
  return (
    <div>
      <input {...props} type="text" />
    </div>
  );
};


