import React from 'react'
import interior from "../assets/interior.jpg";
import R from "../assets/R.png";
import building_cloud from "../assets/building_cloud.jpg";
import {MdOutlineArrowForwardIos} from 'react-icons/md';
const servicesList = [
    {
      image: building_cloud,
      service: "Dhanmandi Apartment",
      description:'Jangala Boro Masad'
    },
    {
      image: R,
      service: "Huge Parking Lot",
      description:'Jangala Boro Masad'
    },
    {
      image: interior,
      service: "Relaxing Places",
      description:'Jangala Boro Masad'
    },
    {
        image: building_cloud,
        service: "Dhanmandi Apartment",
        description:'Jangala Boro Masad'
      },
      {
        image: R,
        service: "Huge Parking Lot",
        description:'Jangala Boro Masad'
      },
      {
        image: interior,
        service: "Relaxing Places",
        description:'Jangala Boro Masad'
      },
      {
        image: building_cloud,
        service: "Dhanmandi Apartment",
        description:'Jangala Boro Masad'
      },
      {
        image: R,
        service: "Huge Parking Lot",
        description:'Jangala Boro Masad'
      },
      {
        image: interior,
        service: "Relaxing Places",
        description:'Jangala Boro Masad'
      },
  ];

const UnderConstruction = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center space-y-10 p-10">
        <h2 className="text-gray-700 text-lg font-semibold">
            Your <span className='text-teal-600'>Dream</span> is under construction
      </h2>
      <p className="text-gray-400 text-sm text-center max-w-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ullam ex.
        Tempora quos deserunt consectetur, ullam quasi ducimus provident
        excepturi temporibus doloremque asperiores pariatur numquam commodi
        eaque vel at dicta!
      </p>
      <div className="w-full flex flex-no-wrap space-x-10 overflow-x-auto">
        {servicesList.map((service, index) => (
          <UnderConstructionCard key={index} {...service} />
        ))}
      </div>

      <button className="bg-teal-100 rounded rounded-full text-teal-600">
            <MdOutlineArrowForwardIos/>
      </button>
      
    </div>
  )
}

export default UnderConstruction



const UnderConstructionCard = ({ image, service,description }) => {
    return (
      <div className="group flex-shrink-0 w-full my-5 md:w-52 border border-teal-200 hover:bg-teal-600 hover:ring-teal-600 rounded rounded-xl">
        <img
          src={image}
          alt="service"
          className="w-full h-36 object-cover rounded rounded-xl group-hover:contrast-50"
        />
        <span className="block py-4 px-2 text-gray-600 font-semibold group-hover:text-white ">
          {service}
        </span>
        {/* <button className="mx-3 mb-3 py-2 px-3 bg-white text-teal-600 group-hover:block hidden rounded rounded-2xl ">
          Know More
        </button> */}
      </div>
    );
  };