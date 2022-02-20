import React from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Search = () => {
  return (
    <div className="hidden lg:block relative w-full bg-blue-600">
      <div className="absolute h-24 w-full  -top-14">
        <div className="flex shadow shadow-xl h-full w-2/5 rounded rounded-lg bg-white mx-auto px-10 py-2">
          <div className="basis-2/3 flex items-center">
            <BsSearch className="text-gray-400" />
            <input type="text" className="flex-1 outline-none text-gray-400 placeholder:pl-3 mx-2" placeholder="Search your land by location" />
            <AiOutlineCloseCircle className="text-red-500" />
          </div>
          <div className="flex justify-center items-center basis-1/3">
              <select name="category" id=""></select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
