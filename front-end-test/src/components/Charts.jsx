import React from "react";

const Charts = () => {
  return (
    <div className="flex flex-col items-center gap-8 pt-24">
      <div className="w-11/12 lg:w-[914px] h-[313px] bg-gray-300 drop-shadow-md rounded-sm">
        Main Chart
      </div>
      <div className="flex w-11/12 lg:w-[914px] flex-wrap flex-col md:flex-row gap-[22px]">
        <div className="w-full lg:w-[515px] h-[414px] bg-gray-300 drop-shadow-md rounded-sm">
          Donut chart
        </div>
        <div className="w-10/12 lg:w-[376px] h-[414px] bg-gray-300 drop-shadow-md rounded-sm">
          Services
        </div>
      </div>
      <div className=" w-[914px] h-[200px] bg-gray-300 drop-shadow-md rounded-sm mb-60">
        Services Activity
      </div>
    </div>
  );
};

export default Charts;
