import React from 'react'
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
const SmilesAndComments = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center space-y-7 p-7">
      <h2 className="text-gray-700 text-xl font-semibold">
        What You'll Get from Us
      </h2>
      
      <div className=" md:flex  md:space-x-10 justify-center items-start w-full">
        {servicesList.map((service, index) => (
          <ServicesCard key={index} {...service} />
        ))}
      </div>
    </div>
  )
}

export default SmilesAndComments