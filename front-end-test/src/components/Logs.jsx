import CheckLogs from "../assets/icons/CheckLogs.png";
import EyeLogs from "../assets/icons/EyeLogs.png";
import IncidentLogs from "../assets/icons/IncidentLogs.png";
import React from "react";

const Logs = () => {
  return (
    <div className="relative flex flex-col items-center gap-8 pt-36 pb-10">
      <p className="absolute w-11/12 lg:w-[914px] flex justify-start inset-y-20 inset-auto sm:inset-y-20 lg:inset-y-20 font-normal text-[#4D4F5C] text-lg">
        Últimos Incidentes
      </p>
      <div className=" w-11/12 lg:w-[914px] h-auto bg-white drop-shadow-md rounded-sm">
        <div className="flex flex-col p-10 gap-10">
          <strong className="text-[14px] text-[#4D4F5C]">
            30 de Abril 2020
          </strong>
          <div className="flex flex-row">
            <div className="flex-shrink-0 mr-5">
              <img src={CheckLogs} alt="" />
            </div>
            <div>
              <p className="text-[16px] mb-1">Solução</p>
              <p className="text-[12px] text-[#4D4F5C]">
                Gerador atenderá como backup em casos semelhantes, garantindo
                assim, a continuidade por períodos maiores que 23 horas.
              </p>
              <p className="text-xs text-[#4D4F5C] mt-4">4 horas atrás</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex-shrink-0 mr-5">
              <img src={EyeLogs} alt="" />
            </div>
            <div>
              <p className="text-base mb-1">Problema sendo monitorado</p>
              <p className="text-xs text-[#4D4F5C]">
                Aquisição de nova unidade de GERADOR DE ENERGIA A DIESEL.
              </p>
              <p className="text-xs text-[#4D4F5C] mt-4">8 horas atrás</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex-shrink-0 mr-5">
              <img src={IncidentLogs} alt="" />
            </div>
            <div>
              <p className="text-base mb-1">Incidente Energético</p>
              <p className="text-xs text-[#4D4F5C]">
                Devido a incidentes naturais houvera a presença da falta de
                energia na região por tempo não previsto, fazendo com que hajam
                paradas do fornecimento de energia de forma segura, o que faz
                com que a cada período de 23horas seja obrigatório o reinício
                das atividades dos serviços prestados. Isto ocorre diante ao
                fato de que o gerador disponibilizado pela ALERTRACK possui
                coeficiência de até 20 Horas de disponibilidade do fornecimento
                contínuo, somados à disponibilização por parte de armazenamento
                de energia, menos o tempo necessário para o desligamento dos
                servidores
              </p>
              <p className="text-xs text-[#4D4F5C] mt-4">4 horas atrás</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 lg:w-[914px] h-auto bg-white drop-shadow-md rounded-sm">
        logs
      </div>
    </div>
  );
};

export default Logs;
