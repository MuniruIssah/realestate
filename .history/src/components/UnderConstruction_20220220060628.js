import React from 'react'

const servicesList = [
    {
      image: building_cloud,
      service: "Beautiful Interiors",
      description
    },
    {
      image: R,
      service: "Huge Parking Lot",
      description
    },
    {
      image: interior,
      service: "Relaxing Places",
      description
    },
  ];

const UnderConstruction = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center space-y-10">
        <h2 className="text-gray-700 text-lg font-semibold">
        What You'll Get from Us
      </h2>
    </div>
  )
}

export default UnderConstruction



const UnderConstructionCard = ({ image, service,description }) => {
    return (
      <div className="group w-full my-5 md:w-1/5 border border-teal-200 hover:bg-teal-600 hover:ring-teal-600 rounded rounded-xl">
        <img
          src={image}
          alt="service"
          className="w-full h-36 object-cover rounded rounded-xl group-hover:contrast-50"
        />
        <span className="block py-4 px-2 text-gray-600 font-semibold group-hover:text-white ">
          {service}
        </span>
        <button className="mx-3 mb-3 py-2 px-3 bg-white text-teal-600 group-hover:block hidden rounded rounded-2xl ">
          Know More
        </button>
      </div>
    );
  };