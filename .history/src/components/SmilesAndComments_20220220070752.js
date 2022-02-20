import React from "react";
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
        Few <span className="text-teal-600">Smiles</span> and <span className="text-teal-600">Comments</span>
      </h2>
      <p className="text-gray-400 text-sm text-center max-w-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ullam ex.
        Tempora quos deserunt consectetur, ullam quasi ducimus provident
        excepturi temporibus doloremque asperiores pariatur numquam commodi
        eaque vel at dicta!
      </p>
      <div className="w-full flex flex-no-wrap space-x-10 overflow-x-auto scroll-smooth scroll-pl-6 snap-x">
        {commentList.map((comment, index) => (
          <SmilesAndCommentCard key={index} {...comment} />
        ))}
      </div>
    </div>
  );
};

export default SmilesAndComments;

const SmilesAndCommentCard = ({ image, title, content, name, role }) => {
  return (
    <div className="border border-teal-500 flex justify-center space-x-10 h-96"></div>
  );
};
