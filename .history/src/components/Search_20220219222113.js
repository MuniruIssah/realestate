import React from 'react'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineCloseCircle}
const Search = () => {
  return (
    <div className="hidden lg:block relative w-full bg-blue-600">
        <div className="absolute h-24 w-full  -top-14">
            <div className="flex shadow shadow-xl h-full w-2/5 rounded rounded-lg bg-white mx-auto px-3 py-2">
               <div className="flex">
                    <BsSearch/>
                    <input type="text" />
               </div>
            </div>
        </div>
    </div>
  )
}

export default Search