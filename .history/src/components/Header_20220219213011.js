import React from "react";
const links = [
  "Home",
  "Properties",
  "Favorites",
  "Listing",
  "Blog",
  "Contact Us",
];
const Header = () => {
  return (
    <div className="flex justify-between items-center px-20 py-6">
      <span className="uppercase text-teal-400 text-xl">land large</span>
      <div className="hidden lg:flex space-x-4 items-center">{
          links.map((link,index)=>)
      }</div>
    </div>
  );
};

export default Header;

const LinkItem = ({ name }) => {
  return (
    <a href="#" className="text-gray-400 hover:text-teal-500 ">
      {name}
    </a>
  );
};
