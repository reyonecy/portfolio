import Image from "next/image";
import React from "react";


export default function Hero () {
  return (
    <>
    <div className=" mt-8 ml-4 md:mt-16 h-full md:flex md:flex-row flex-col px-10 md:px-40 justify-between  pt-20 pb-20 text-white ">
      <div className="w-1/2 flex flex-col space-y-5">
      <h1 className="text-4xl md:text-6xl ml-20 md:ml-28  w-56 ">Hey <span className="animate-pulse">👋</span></h1>
        <h1 className="text-2xl md:text-4xl font-bold  cursor-default  w-96 md:w-full  transition duration-800 ease-in">I&#39;m <span className="text-red-500">Reyone chaudhary</span></h1>
        <h2 className="text-xl ml-6 md:text-2xl md:ml-14 pl-4 font-semibold w-64   cursor-default">Software Engineer</h2>
        <p className="md:text-xl text-sm  md:text-center w-72 md:w-full text-center  md:-ml-6 cursor-default opacity-70 ">
        An overview providing insights into my personal and professional journey, detailing my crafted cadence and engagements.
        </p>
      </div>
      <div className="mt-4 w-72 h-72 md:w-96 md:h-96  md:-mt-4  ">
      <Image alt="myimage" className=" transition duration-300 ease-in-out rounded-full hover:shadow-red-500/50 hover:shadow-xl" src="/profile.jpg" width={350} height={350}/>
    </div>
    </div>
    </>
  );
};
