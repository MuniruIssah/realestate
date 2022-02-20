import React from "react";
import building from "../assets/R.png";
const Jumbotron = () => {
  return (
    <div
      style={{ backgroundImage: `url(${building})` }}
      className="h-3/6 flex flex-col justify-center items-center space-y-12 w-full  bg-no-repeat bg-cover bg-center"
    >
      <span className="lg:text-4xl text-gray-500 text-center font-semibold">
        Make Your <span className="text-teal-500">Properties</span> Safe and
        Secure
      </span>
      <p className="text-gray-300 text-sm text-center max-w-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ullam ex.
        Tempora quos deserunt consectetur, ullam quasi ducimus provident
        excepturi temporibus doloremque asperiores pariatur numquam commodi
        eaque vel at dicta!
      </p>
      <button className="text-white bg-teal-500 py-2 px-3 rounded rounded-md">
          Booking Land
      </button>
    </div>
  );
};

export default Jumbotron;
