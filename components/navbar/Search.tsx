"use client";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(true);
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)}>
        <AiOutlineSearch className="w-[25px] h-[25px]  text-white mx-[10px] cursor-pointer hover:scale-110 transition-all ease-in-out" />
      </button>
      <input
        type="text"
        placeholder="search"
        className={`absolute transition-all ease-in-out w-[150px]  right-[-80px] rounded-[8px] px-2  ${
          open ? "top-[30px]" : "top-[-100px]"
        } focus:outline-none`}
      />
    </div>
  );
};
export default Search;
