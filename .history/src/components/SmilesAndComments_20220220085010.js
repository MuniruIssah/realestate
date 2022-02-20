import React from "react";
import interior from "../assets/interior.jpg";
import R from "../assets/R.png";
import building_cloud from "../assets/building_cloud.jpg";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import { CgQuote } from "react-icons/cg";
const commentList = [
  {
    image: building_cloud,
    title: "Beautiful Interiors",
    name: "Muniru Issah",
    role: "Software Developer",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ullam ex.
    Tempora quos deserunt consectetur, ullam quasi ducimus provident
    excepturi temporibus doloremque asperiores pariatur numquam commodi
    eaque vel at dicta!`,
  },
  {
    image: R,
    title: "Huge Parking Lot",
    name: "Muniru Issah",
    role: "Software Developer",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ullam ex.
    Tempora quos deserunt consectetur, ullam quasi ducimus provident
    excepturi temporibus doloremque asperiores pariatur numquam commodi
    eaque vel at dicta!`,
  },
  {
    image: interior,
    title: "Relaxing Places",
    name: "Muniru Issah",
    role: "Software Developer",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ullam ex.
      Tempora quos deserunt consectetur, ullam quasi ducimus provident
      excepturi temporibus doloremque asperiores pariatur numquam commodi
      eaque vel at dicta!`,
  },
];
const SmilesAndComments = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center space-y-10 p-10">
      <h2 className="text-gray-700 text-xl font-semibold">
        Few <span className="text-teal-600">Smiles</span> and{" "}
        <span className="text-teal-600">Comments</span>
      </h2>
      <p className="text-gray-400 text-sm text-center max-w-lg ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ullam ex.
        Tempora quos deserunt consectetur.
      </p>
      <div className="flex md:space-x-20 justify-center items-center">
        <div className="hidden md:block">
        <button className="bg-teal-100 text-xs rounded rounded-full text-teal-600 p-2 self-end shadow-md">
          <MdOutlineArrowBackIos />
        </button>
        </div>

        <div className="flex-1 md:basis-2/3 h-96 flex flex-no-wrap  overflow-x-auto scroll-smooth snap-x snap-mandatory">
          {commentList.map((comment, index) => (
            <SmilesAndCommentCard key={index} {...comment} />
          ))}
        </div>
        <div className="hidden md:block">
        <button className="bg-teal-100 text-xs rounded rounded-full text-teal-600 p-2  self-end shadow-md">
          <MdOutlineArrowForwardIos />
        </button>
        </div>
      
      </div>
    </div>
  );
};

export default SmilesAndComments;

const SmilesAndCommentCard = ({ image, title, description, name, role }) => {
  return (
    <div className="snap-start w-full h-full flex-shrink-0 md:p-5 ">
      <div className="flex justify-center items-center space-x-10 border border-teal-500 rounded rounded-lg w-full h-full p-5">
        <div className="text-right flex flex-col basis-2/3">
          <CgQuote className="text-teal-600 text-4xl self-end" />
          <span className="font-semibold text-sm text-gray-600 my-2">
            {title}
          </span>
          <p className="text-gray-400 text-sm">{description}</p>
          <span className="font-bold text-lg text-gray-600 mt-3 mb-2">
            {name}
          </span>
          <span className="font-semibold text-sm text-gray-500">{role}</span>
        </div>
        <div className="h-full basis-1/3 hidden md:block">
          <img
            src={image}
            alt={title}
            className="rounded rounder-lg  h-full  object-center"
          />
        </div>
      </div>
    </div>
  );
};
