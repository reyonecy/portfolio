import Image from "next/image";
import React from "react";


export default function Hero () {
  return (
    <>
    <div className=" mt-16 h-full flex px-40 justify-between pt-20 pb-20 text-white ">
      <div className="w-1/2 flex flex-col space-y-5">
      <h1 className="text-6xl ml-28  w-56 ">Hey <span className="animate-pulse">👋</span></h1>
        <h1 className="text-4xl font-bold  cursor-default   w-100 transition duration-800 ease-in">I&#39;m <span className="text-red-500">Reyone chaudhary</span></h1>
        <h2 className="text-2xl ml-14 pl-4 font-semibold w-64   cursor-default">Software Engineer</h2>
        <p className="text-xl text-center  -ml-6 cursor-default opacity-70 ">
        An overview providing insights into my personal and professional journey, detailing my crafted cadence and engagements.
        </p>
      </div>
      <div className="1/2  -mt-4  ">
      <Image alt="myimage" className=" transition duration-300 ease-in-out rounded-full hover:shadow-red-500/50 hover:shadow-xl" src="/profile.jpg" width={350} height={350}/>
    </div>
    </div>
    </>
  );
};
