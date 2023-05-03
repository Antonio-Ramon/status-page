import React from "react";
import { Tooltip } from "primereact/tooltip";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/fluent-light/theme.css";

const BarsTest = () => {
  const barras = [];

  const status = " de Junho de 2020 WhatsApp Operando";
  // Gerar as 31 barras retangulares
  for (let i = 1; i <= 31; i++) {
    barras.push(
      <div
        key={i}
        className="barras h-16 w-4 bg-[#4AD991] mr-1 md:mr-2 lg:mr-2"
        // Ajustar a cor da barra em determinados dias
        style={
          i === 30 || i === 27
            ? { backgroundColor: "#FF215D" }
            : i === 28 || i === 25
            ? { backgroundColor: "#FFDA83" }
            : {}
        }
      >
        <Tooltip
          target=".barras"
          content={i + status}
          position="top"
          style={{ fontSize: "1rem", width: "120px" }}
        />
      </div>
    );
  }
  return <div className="w-11/12 flex flex-row justify-center">{barras}</div>;
};

export default BarsTest;
