import CheckNav from "../assets/icons/CheckNav.png";
import React from "react";

const NavBar = () => {
  return (
    <div className="relative bg-[#43425D] w-full h-[168px] flex justify-center">
      <p className="text-white text-sm w-11/12 lg:w-container flex items-center pb-16">
        STATUS ALERTRACK
      </p>
      <div className="absolute flex gap-y-40 w-11/12 h-[107px] lg:w-[914px] bg-white drop-shadow-lg rounded-md top-24">
        <img
          className="flex mt-7 ml-7 mr-5 w-10 h-10"
          src={CheckNav}
          alt="checkIcon"
        />
        <div>
          <p className="text-lg font-bold text-[#43425D] pt-6">
            Todo o serviço operacional
          </p>
          <p className="text-sm">
            <span className="underline text-[#2F2E50]">Último incidente</span> 5
            dias atrás
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
