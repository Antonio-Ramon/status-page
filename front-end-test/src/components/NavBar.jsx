import React from "react";

const NavBar = () => {
  return (
    <div className="relative bg-[#43425D] w-full h-[168px] flex justify-center">
      <p className="text-white text-[15px] w-[914px] flex items-center pb-16">
        STATUS ALERTRACK
      </p>
      <div className="absolute flex gap-y-40 w-11/12 h-[107px] lg:w-[914px] bg-white drop-shadow-lg rounded-md top-24">
        STATUS BAR
      </div>
    </div>
  );
};

export default NavBar;
