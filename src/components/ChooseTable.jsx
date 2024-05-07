"use client";

import React, { useState } from "react";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
// import {
//   HamburgerMenuIcon,
//   DotFilledIcon,
//   CheckIcon,
//   ChevronRightIcon,
// } from "@radix-ui/react-icons";

const ChooseTable = () => {
  const [selectedOption, setSelectedOption] = useState("");

  // Function to handle change in dropdown selection
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-white text-[1.5rem]">Choose your table number:</h1>
      <select
        value={selectedOption}
        onChange={handleChange}
        className="w-1/2 rounded-[5px] h-[2.25rem] my-5"
      >
        <option value="" className="h-[2.25rem] px-2">
          Select...
        </option>
        <option value="Table 1">Table 1</option>
        <option value="Table 2">Table 2</option>
        <option value="Table 3">Table 3</option>
      </select>
      <p className="text-white text-[1.2rem]">You selected: {selectedOption}</p>
    </div>
  );
};

export default ChooseTable;
