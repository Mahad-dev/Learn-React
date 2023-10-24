import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [showDropdown, setShowdropdown] = useState(false);

  function closeDropdown() {
    setShowdropdown(false);
    console.log("document");
    // document.body.style.background = "red";
  }
  useEffect(() => {
    if (showDropdown) {
      document.addEventListener("click", closeDropdown);
    }

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, [showDropdown]);

  return (
    <div>
      <div className="pt-1">
        <div className="dropdown inline-block relative">
          <button
            onClick={(e) => {
              setShowdropdown(!showDropdown);
              e.stopPropagation();
            }}
            className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
          >
            <span className="mr-1">Dropdown</span>
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
            </svg>
          </button>
          {showDropdown && (
            <ul className="dropdown-menu absolute text-gray-700 pt-1 w-full">
              <li className="">
                <a
                  className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  One
                </a>
              </li>
              <li className="">
                <Link
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  to="testing-props"
                >
                  Props
                </Link>
              </li>
              <li className="">
                <Link
                  className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  to="number-input"
                >
                  Input component
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
