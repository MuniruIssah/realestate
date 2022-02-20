import React from 'react'


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



const ServicesCard=()=>{
    return(
        <div className="flex-1 border border-teal-200">
            <img src="" alt="" className="w-full h-8 object-cover" />
            span.my-2
        </div>
    );
}