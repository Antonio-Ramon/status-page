import React from "react";
import { Tooltip } from "primereact/tooltip";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/fluent-light/theme.css";
import CheckServices from "../assets/icons/CheckServices.png";
import MaintainServices from "../assets/icons/MaintainServices.png";
import AlertServices from "../assets/icons/AlertServices.png";

const Services = () => {
  const working = "Operando Lorem Ipsum";
  const maintain = "Em Manutenção Lorem Ipsum";
  const alert = "Oscilando Lorem Ipsum ";

  return (
    <div className="flex flex-col m-7 gap-3">
      <p className="text-xl mb-6">Serviços</p>
      <p className="flex flex-row justify-between text-[#4D4F5C]">
        SacDigital
        <img className="w-7" id="check" src={CheckServices} alt="" />
        <Tooltip
          target="#check"
          content={working}
          position="left"
          showDelay={200}
          hideDelay={200}
          style={{ fontSize: "0.9rem", width: "120px" }}
        />
      </p>
      <hr />
      <p className="flex flex-row justify-between text-[#4D4F5C]">
        Panfleto.Online
        <img className="w-7" id="check" src={CheckServices} alt="" />{" "}
      </p>
      <hr />

      <p className="flex flex-row justify-between text-[#4D4F5C]">
        SMS Ideal
        <Tooltip
          target="#maintain"
          content={maintain}
          position="left"
          showDelay={200}
          hideDelay={200}
          style={{ fontSize: "0.9rem", width: "135px" }}
        />
        <img className="w-7" id="maintain" src={MaintainServices} alt="" />
      </p>
      <hr />

      <p className="flex flex-row justify-between text-[#4D4F5C]">
        Consulta Ideal
        <Tooltip
          target="#alert"
          content={alert}
          position="left"
          showDelay={200}
          hideDelay={200}
          style={{ fontSize: "0.9rem", width: "120px" }}
        />
        <img className="w-7" id="alert" src={AlertServices} alt="" />
      </p>
      <hr />

      <p className="flex flex-row justify-between text-[#4D4F5C]">
        WhatsApp
        <img className="w-7" id="check" src={CheckServices} alt="" />
      </p>
      <hr />

      <p className="flex flex-row justify-between text-[#4D4F5C]">
        WhatsApp Business API{" "}
        <img className="w-7" id="check" src={CheckServices} alt="" />
      </p>
    </div>
  );
};

export default Services;
