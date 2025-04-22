import React from "react";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
export default function Qualifications() {
  return (
    <>
      <h3 className="text-2xl text-center">My Journey</h3>
      <div className="  flex mt-8">
        <div className=" w-96  ml-40">
          <div className="flex mb-8 text-red-500">
            <span className="">
              <WorkOutlineIcon />
            </span>
            <h4 className="ml-6 font-bold text-lg ">Work Experience</h4>
          </div>
          <div className="mb-4">
            <li  className="text-lg"> Open source contribution</li>
            <p className="opacity-60 text-sm">Software developer</p>
            <p className="opacity-60 text-sm">Part time</p>
            <p className="opacity-60 text-sm">2022/07 - present</p>
          </div>
          <div>
            <li className="text-lg">Personal Projects</li>
            <p className="opacity-60 text-sm">Software developer</p>
            <p className="opacity-60 text-sm">Full time</p>
            <p className="opacity-60 text-sm">2020/05- 2021/01</p>
          </div>
          <div></div>
        </div>
        <div className="w-96 ">
        <div className="flex mb-8 text-red-500">
          <span>
            <SchoolOutlinedIcon fontSize="medium" /></span> <h4 className="ml-6 text-xl font-bold">Education</h4>
        </div>
        <div className="mb-8">
        <li className="text-lg">Tribhuvan University</li>
        <p className="text-sm opacity-60">BSc.Computer Science and Information Technology</p>
        <p className="text-sm opacity-60">2022 - 2026</p>
        </div>
        <div>
        <li className="text-lg">Gorkha International College</li>
        <p className="text-sm opacity-60">High school Science with Mathmatics</p>
        <p className="text-sm opacity-60">2019 - 2021</p>
        </div>
        </div>
      </div>
    </>
  );
}
