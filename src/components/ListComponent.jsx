import React from "react";
import Item from "./Item";

const ListComponent = ({ items, check }) => {
  return (
    <div className="flex flex-col min-w-[250px] border border-black p-8 rounded-lg">
      {items.map((item) => (
        <React.Fragment key={item.label}>
          <Item item={item} check={check} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default ListComponent;
