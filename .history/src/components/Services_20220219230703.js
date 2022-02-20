import React from 'react'
imp

const servicesList=[
    {
        image:'',
        service:'Beautiful Interiors'
    },
    {
        image:'',
        service:'Huge Parking Lot'
    },
    {
        image:'',
        service:'Relaxing Places'
    },
]
const Services = () => {
  return (
    <div className="h-6 w-full flex flex-col justify-center items-center space-y-7">
        <h2 className="text-gray-700 text-lg">
            What You'll Get from Us
        </h2>
        <div className="md:flex md:space-x-10 justify-center items-center">

        </div>
    </div>
  )
}

export default Services



const ServicesCard=({image,name})=>{
    return(
        <div className="group flex-1 border border-teal-200 hover:bg-teal-500 hover:ring-teal-500">
            <img src={image} alt="service" className="w-full h-8 object-cover" />
            <span className="my-2 px-2 text-gray-600 group-hover:text-white">
                {name}
            </span>
            <button className="py-2 px-3 bg-white text-teal-500 group-hover:block hidden">
                Know More
            </button>
        </div>
    );
}