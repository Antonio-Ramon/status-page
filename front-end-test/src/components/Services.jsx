import React from "react";
import { Tooltip } from "primereact/tooltip";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/tailwind-light/theme.css";
import CheckServices from "../assets/icons/CheckServices.png";
import MaintainServices from "../assets/icons/MaintainServices.png";
import AlertServices from "../assets/icons/AlertServices.png";

const Services = () => {
  const working = "Funcionando";
  const maintain = "Manutenção";
  const alert = "Alerta";

  return (
    <div className="flex flex-col m-7 gap-3">
      <p className="text-xl mb-4">Serviços</p>
      <div className="flex flex-row justify-between"></div>
      <p className="flex flex-row justify-between">
        SacDigital
        <Tooltip
          target="#check"
          content={working}
          position="top"
          mouseTrack="true"
          mouseTrackTop={15}
        />
        <img id="check" src={CheckServices} alt="" />
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
          position="top"
          mouseTrack="true"
          mouseTrackTop={15}
        />
        <img id="maintain" src={MaintainServices} alt="" />
      </p>
      <hr />

      <p className="flex flex-row justify-between">
        Consulta Ideal
        <Tooltip
          target="#alert"
          content={alert}
          position="top"
          mouseTrack="true"
          mouseTrackTop={15}
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
