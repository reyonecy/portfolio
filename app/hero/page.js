import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <div className=" mt-10 h-full flex px-40 justify-between pt-20 pb-20 text-white ">
      <div className="w-1/2 flex flex-col space-y-5">
        <h1 className="text-4xl font-bold hover:text-red-500 cursor-default  w-96 transition duration-800 ease-in">Reyone chaudhary</h1>
        <h2 className="text-2xl ml-12 pl-4 font-semibold w-64 hover:text-red-500   cursor-default">Software Engineer</h2>
        <p className="text-xl  cursor-default ">
          I'm a passionate software developer with an insatiable appetite for
          learning. My journey in this field is fueled by constant self-study
          and a drive to tackle new challenges. I thrive on diving into complex
          coding problems and exploring cutting-edge technologies.
        </p>
      </div>
      <div className="1/2  -mt-12 ">
      <Image className=" transition duration-300 ease-in-out rounded-full hover:shadow-red-500/50 hover:shadow-xl" src="/profile.jpg" width={400} height={400}/>
    </div>
    </div>
  );
};
