import CheckLogs from "../assets/icons/CheckLogs.png";
import EyeLogs from "../assets/icons/EyeLogs.png";
import IncidentLogs from "../assets/icons/IncidentLogs.png";
import React from "react";

const Logs = () => {
  return (
    <div className="relative flex flex-col items-center gap-5 pt-36 pb-10">
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
              <p className="text-base mb-1">Solução</p>
              <p className="text-xs text-[#4D4F5C]">
                Gerador atenderá como backup em casos semelhantes, garantindo
                assim, a continuidade por períodos maiores que 23 horas.
              </p>
              <p className="text-xs text-[#4D4F5C] mt-4">16:10</p>
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
              <p className="text-xs text-[#4D4F5C] mt-4">15:53</p>
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
                paradas do fornecimento de energia de forma segura.
              </p>
              <p className="text-xs text-[#4D4F5C] mt-4">14:25 </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 lg:w-[914px] h-auto bg-white drop-shadow-md rounded-sm">
        <div className="flex flex-col p-10 gap-10">
          <strong className="text-[14px] text-[#4D4F5C]">
            29 de Abril 2020
          </strong>
          <div className="flex flex-row">
            <p className="italic text-sm text-[#4D4F5C]">
              Nenhum incidente neste dia
            </p>
          </div>
        </div>
      </div>

      <div className="w-11/12 lg:w-[914px] h-auto bg-white drop-shadow-md rounded-sm">
        <div className="flex flex-col p-10 gap-10">
          <strong className="text-[14px] text-[#4D4F5C]">
            28 de Abril 2020
          </strong>
          <div className="flex flex-row">
            <div className="flex-shrink-0 mr-5">
              <img src={CheckLogs} alt="" />
            </div>
            <div>
              <p className="text-base mb-1">Solução</p>
              <p className="text-xs text-[#4D4F5C]">
                WhatsApp voltou a operar normalmente.
              </p>
              <p className="text-xs text-[#4D4F5C] mt-4">8:38</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex-shrink-0 mr-5">
              <img src={EyeLogs} alt="" />
            </div>
            <div>
              <p className="text-base mb-1">Problema sendo monitorado</p>
              <p className="text-xs text-[#4D4F5C]">
                O serviço está sendo restaurado para alguns países.
              </p>
              <p className="text-xs text-[#4D4F5C] mt-4">5:08</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex-shrink-0 mr-5">
              <img src={IncidentLogs} alt="" />
            </div>
            <div>
              <p className="text-base mb-1">WhatsApp Interrompido</p>
              <p className="text-xs text-[#4D4F5C]">
                O WhatsApp está passando por uma interrupção geral em todo o
                mundo. Não é poss ível usar o serviço porque o servidor está
                fora do ar.
              </p>
              <p className="text-xs text-[#4D4F5C] mt-4">3:25</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logs;
