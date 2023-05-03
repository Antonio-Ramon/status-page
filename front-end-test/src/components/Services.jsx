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
      <p className="text-xl mb-4">Serviços</p>
      <div className="flex flex-row justify-between"></div>
      <p className="flex flex-row justify-between">
        SacDigital
        <img id="check" src={CheckServices} alt="" />
        <Tooltip
          target="#check"
          content={working}
          position="left"
          style={{ fontSize: "1rem", width: "120px" }}
        />
      </p>
      <hr />
      <p className="flex flex-row justify-between">
        Panfleto.Online
        <img id="check" src={CheckServices} alt="" />{" "}
      </p>
      <hr />

      <p className="flex flex-row justify-between">
        SMS Ideal
        <Tooltip
          target="#maintain"
          content={maintain}
          position="left"
          style={{ fontSize: "1rem", width: "135px" }}
        />
        <img id="maintain" src={MaintainServices} alt="" />
      </p>
      <hr />

      <p className="flex flex-row justify-between">
        Consulta Ideal
        <Tooltip
          target="#alert"
          content={alert}
          position="left"
          style={{ fontSize: "1rem", width: "120px" }}
        />
        <img id="alert" src={AlertServices} alt="" />
      </p>
      <hr />

      <p className="flex flex-row justify-between">
        WhatsApp
        <img id="check" src={CheckServices} alt="" />
      </p>
      <hr />

      <p className="flex flex-row justify-between">
        WhatsApp Business API <img id="check" src={CheckServices} alt="" />
      </p>
    </div>
  );
};

export default Services;
