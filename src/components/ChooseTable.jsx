"use client";
import React, { useState } from "react";
import { navigate } from "../lib/actions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ChooseTable = ({ allTables }) => {
  const [selectedOption, setSelectedOption] = useState("");
  // const router = useRouter();
  // const pathname = usePathname();
  // const searchParams = useSearchParams();
  // Function to handle change in dropdown selection
  const handleChange = (event) => {
    setSelectedOption(event.target.value);

    // const updatedParams = new URLSearchParams(searchParams);
    // if (event.target.value) {
    //   updatedParams.set("q", event.target.value);
    // } else {
    //   updatedParams.delete("q");
    // }

    // router.replace(`${pathname}?${updatedParams.toString()}`);
  };

  return (
    <form action={navigate}>
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
          {/* <option value="Table 1">Table 1</option>
        <option value="Table 2">Table 2</option>
        <option value="Table 3">Table 3</option>
        <option value="Table 4">Table 4</option>
        <option value="Table 5">Table 5</option>
        <option value="Table 6">Table 6</option>
        <option value="Table 7">Table 7</option> */}

          {allTables.map((table) => {
            return (
              <option
                key={table.tableId}
                value={table.tableNumber}
              >{`Table ${table.tableNumber}`}</option>
            );
          })}
        </select>
        <p className="text-white text-[1.2rem]">
          You selected: {selectedOption}
        </p>
        <input type="hidden" name="id" value={selectedOption} />
        <button className="bg-red-500 tracking-[.5rem] font-bold uppercase text-white px-7 w-[17rem] py-2 rounded-md mt-6">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ChooseTable;
