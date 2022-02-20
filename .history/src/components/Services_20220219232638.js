import React from "react";
import interior from "../assets/interior.jpg";
import R from "../assets/R.png";
import building_cloud from "../assets/building_cloud.jpg";

const servicesList = [
  {
    image: building_cloud,
    service: "Beautiful Interiors",
  },
  {
    image: R,
    service: "Huge Parking Lot",
  },
  {
    image: interior,
    service: "Relaxing Places",
  },
];
const Services = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center space-y-7 ">
      <h2 className="text-gray-700 text-lg font-semibold">What You'll Get from Us</h2>
      <div className=" md:flex  md:space-x-10 justify-center items-center w-full">
        {servicesList.map((service, index) => (
          <ServicesCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;

const ServicesCard = ({ image, service }) => {
  return (
    <div className="group w-full m-3 md:w-1/4 border border-teal-200 hover:bg-teal-500 hover:ring-teal-500 rounded rounded-xl">
      <img src={image} alt="service" className="w-full h-36 object-cover rounded rounded-xl" />
      <span className="my-2 px-2 text-gray-600 group-hover:text-white">
        {service}
      </span>
      <button className="py-2 px-3 bg-white text-teal-500 group-hover:block hidden">
        Know More
      </button>
    </div>
  );
};
