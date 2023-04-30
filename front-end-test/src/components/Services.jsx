import React from "react";
import CheckServices from "../assets/icons/CheckServices.png";
import MaintainServices from "../assets/icons/MaintainServices.png";
import AlertServices from "../assets/icons/AlertServices.png";

const Services = () => {
  return (
    <div className="flex flex-col m-7 gap-3">
      <p className="text-xl mb-4">Serviços</p>
      <div className="flex flex-row justify-between"></div>
      <p className="flex flex-row justify-between">
        SacDigital <img src={CheckServices} alt="" />
      </p>
      <hr />
      <p className="flex flex-row justify-between">
        Panfleto.Online <img src={CheckServices} alt="" />{" "}
      </p>
      <hr />

      <p className="flex flex-row justify-between">
        SMS Ideal <img src={MaintainServices} alt="" />
      </p>
      <hr />

      <p className="flex flex-row justify-between">
        Consulta Ideal <img src={AlertServices} alt="" />
      </p>
      <hr />

      <p className="flex flex-row justify-between">
        WhatsApp <img src={CheckServices} alt="" />
      </p>
      <hr />

      <p className="flex flex-row justify-between">
        WhatsApp Business API <img src={CheckServices} alt="" />
      </p>
    </div>
  );
};

export default Services;
