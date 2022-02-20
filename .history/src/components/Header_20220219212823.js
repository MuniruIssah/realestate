import React from "react";
const Links=[
    'Home','Properties'
]
const Header = () => {
  return (
    <div className="flex justify-between items-center px-20 py-6">
      <span className="uppercase text-teal-400 text-xl">land large</span>
      <div className="hidden lg:flex space-x-4 items-center">
          {
        
          }
      </div>
    </div>
  );
};

export default Header;

const LinkItem = ({ name }) => {
  return (
    <a href="#" className="text-gray-400">
      {name}
    </a>
  );
};
