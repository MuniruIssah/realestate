import React from "react";

const Jumbotron = () => {
  return (
    <div className="h-2/4 flex flex-col justify-center items-center space-y-4 w-full">
      <span className="lg:text-4xl text-gray-500 text-center font-semibold">
        Make Your <span className="text-teal-500">Properties</span> Safe and
        Secure
      </span>
      <p className="text-gray-300 text-xs text-center max-w-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ullam ex.
        Tempora quos deserunt consectetur, ullam quasi ducimus provident
        excepturi temporibus doloremque asperiores pariatur numquam commodi
        eaque vel at dicta!
      </p>
    </div>
  );
};

export default Jumbotron;