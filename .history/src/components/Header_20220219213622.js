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
      <span className="uppercase text-teal-400 text-xl font-semibold">land large</span>
      <div className="hidden lg:flex space-x-10 items-center">
        {links.map((link, index) => (
          <LinkItem key={index} name={link} />
        ))}
      </div>
      <button className="text-teal-500 border border-teal-500 rounded rounded-lg py-2 px-4 text-sm">
          Free Registration
      </button>
    </div>
  );
};

export default Header;

const LinkItem = ({ name }) => {
  return (
    <a href="#" className="text-gray-400 hover:text-teal-500 font-semibold">
      {name}
    </a>
  );
};
