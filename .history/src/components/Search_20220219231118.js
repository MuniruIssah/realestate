import React from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Search = () => {
  return (
    <div className="hidden lg:block  h- relative w-full bg-blue-600">
      <div className="absolute h-20 w-full  -top-10">
        <div className="flex shadow shadow-xl h-full w-2/5 rounded rounded-lg bg-white mx-auto px-5 py-2">
          <div className="basis-2/3 flex items-center justify-center border-r-2 border-gray-300 space-x-5 ">
            <BsSearch className="text-gray-400" />
            <input
              type="text"
              className="w-60 outline-none text-gray-400"
              placeholder="Search your land by location"
            />
            <AiOutlineCloseCircle className="text-red-500" />
          </div>
          <div className="flex justify-center items-center basis-1/3">
            <select
              name="category"
              className="text-gray-400 outline-none px-2 font-semibold appearance-none"
              id=""
            >
              <option>Category</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
