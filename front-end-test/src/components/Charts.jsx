import React from "react";
import MainChart from "./MainChart";
import DonutChart from "./DonutChart";
import Services from "./Services";
import ServicesActivity from "./ServicesActivity";

const Charts = () => {
  return (
    <div className="flex flex-col items-center gap-8 pt-24">
      <div className="w-11/12 lg:w-[914px] bg-gray-300 drop-shadow-md rounded-sm">
        <MainChart />
      </div>

      <div className="flex w-11/12 lg:w-[914px] flex-wrap flex-col lg:flex-row items-center md:items-center gap-[22px]">
        <div className="w-11/12 lg:w-[515px] bg-gray-300 drop-shadow-md rounded-sm">
          <DonutChart />
        </div>
        <div className="w-11/12 lg:w-[376px] h-[400px] bg-white drop-shadow-md rounded-sm">
          <Services />
        </div>
      </div>

      <div className="w-11/12 lg:w-[914px] bg-gray-300 drop-shadow-md rounded-sm">
        <ServicesActivity />
      </div>
    </div>
  );
};

export default Charts;
