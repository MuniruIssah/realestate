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
    <div className="w-full flex flex-col justify-center items-center space-y-10 p-10">
      <h2 className="text-gray-700 text-xl font-semibold">
        Your <span className="text-teal-600">Dream</span> is under construction
      </h2>
      <p className="text-gray-400 text-sm text-center max-w-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ullam ex.
        Tempora quos deserunt consectetur, ullam quasi ducimus provident
        excepturi temporibus doloremque asperiores pariatur numquam commodi
        eaque vel at dicta!
      </p>
      <div className="w-full flex flex-no-wrap space-x-10 overflow-x-auto scroll-smooth scroll-pl-6 snap-x">
        {servicesList.map((service, index) => (
          <UnderConstructionCard key={index} {...service} />
        ))}
      </div>

    </div>
  )
}

export default SmilesAndComments


const SmilesAndCommentCard=()=>{
    return
}