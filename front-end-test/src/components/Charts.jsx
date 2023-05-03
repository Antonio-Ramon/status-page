import React from "react";
import MainChart from "./MainChart";
import DonutChart from "./DonutChart";
import Services from "./Services";
import ServicesActivity from "./ServicesActivity";
import BarsTest from "./BarsTest";

const Charts = () => {
  return (
    <div className="flex flex-col items-center gap-8 pt-24">
      <div className="w-11/12 lg:w-[914px] bg-gray-300 drop-shadow-md rounded-sm">
        <MainChart />
      </div>

      <div className="flex w-11/12 lg:w-[914px] flex-wrap flex-col lg:flex-row items-center md:items-center gap-[22px]">
        <div className="w-full lg:w-[515px] bg-gray-300 drop-shadow-md rounded-sm">
          <DonutChart />
        </div>
        <div className="w-full lg:w-[376px] h-[400px] bg-white drop-shadow-md rounded-sm">
          <Services />
        </div>
      </div>

      <div className="w-11/12 lg:w-[914px] pb-10 flex flex-col items-center justify-center bg-white drop-shadow-md rounded-sm">
        <div className="w-full flex pl-5 md:pl-16 lg:pl-20 pt-6 pb-9">
          <p className="text-lg text-[#4D4F5C]">
            Tempo de Atividades dos Serviços
          </p>
        </div>
        <BarsTest />
        {/* <ServicesActivity /> */}
        <div className="w-full flex pl-5 md:pl-16 lg:pl-20 pt-3">
          <p className="text-sm text-[#4D4F5C]">30 dias atrás</p>
        </div>
      </div>
    </div>
  );
};

export default Charts;
