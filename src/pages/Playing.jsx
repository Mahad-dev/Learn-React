import React from "react";
import { useMemo } from "react";
import { useState } from "react";
import SwitchComponent from "../components/SwitchComponent";
import ListComponent from "../components/ListComponent";
const items = [
  {
    label: 1,
    checked: false,
  },
  {
    label: 2,
    checked: false,
  },
  {
    label: 3,
    checked: false,
  },
  {
    label: 4,
    checked: false,
  },
  {
    label: 5,
    checked: false,
  },
];
const TestPage = () => {
  const [rightItems, setRightItems] = useState(items);
  const [leftItems, setLeftItems] = useState([]);

  const current = rightItems.map((i) => i.label);
  function check(e, id) {
    if (current.includes(id)) {
      const updatedItems = rightItems.map((item) => {
        if (item.label === id) {
          return { ...item, checked: e };
        }
        return item;
      });
      setRightItems(updatedItems);
    } else {
      const updatedItems = leftItems.map((item) => {
        if (item.label === id) {
          return { ...item, checked: e };
        }
        return item;
      });
      setLeftItems(updatedItems);
    }
  }

  function moveLeft() {
    const checkedItems = rightItems.filter((item) => item.checked);
    setLeftItems((prevLeftItems) => [...prevLeftItems, ...checkedItems]);
    const newArr = rightItems.filter((item) => !item.checked);
    setRightItems(newArr);
  }
  function moveRight() {
    const checkedItems = leftItems.filter((item) => item.checked);
    setRightItems((prevRightItems) => [...prevRightItems, ...checkedItems]);
    const newArr = leftItems.filter((item) => !item.checked);
    setLeftItems(newArr);
  }
  const [disabledRight, disabledLeft] = useMemo(() => {
    const isRightDisabled =
      rightItems.length === 0 || !rightItems.some((item) => item.checked);
    const isLeftDisabled =
      leftItems.length === 0 || !leftItems.some((item) => item.checked);

    return [isRightDisabled, isLeftDisabled];
  }, [rightItems, leftItems]);

  return (
    <div className="mx-auto">
      <div className="flex gap-3">
        <ListComponent check={check} items={rightItems} />
        <SwitchComponent
          disabled={{ disabledRight, disabledLeft }}
          moveRight={moveRight}
          moveLeft={moveLeft}
        />
        <ListComponent check={check} items={leftItems} />
      </div>
    </div>
  );
};

export default TestPage;
