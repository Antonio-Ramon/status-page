import React from "react";
import { Tooltip } from "primereact/tooltip";

const ServicesActivity = () => {
  const barras = []; // array para armazenar as barras que serão renderizadas

  // Loop que cria 31 barras
  for (let i = 1; i <= 31; i++) {
    // Define o texto que aparecerá na tooltip de acordo com o dia
    const tooltipText =
      i === 30
        ? `${i} de junho de 2023 Em Manutenção`
        : i === 28 || i === 31
        ? `${i} de junho de 2023 Sistema Oscilando`
        : `${i} de junho de 2023 Operando`;

    // Adiciona a barra atual ao array de barras, com sua cor correspondente
    barras.push(
      <div
        key={i}
        id={`bar-${i}`}
        className="barras h-16 w-4 bg-[#4AD991] mr-1 md:mr-2 lg:mr-2"
        style={
          i === 30
            ? { backgroundColor: "#FF215D" }
            : i === 28 || i === 31
            ? { backgroundColor: "#FFDA83" }
            : {}
        }
      >
        <Tooltip
          target={`#bar-${i}`} // Define o alvo da tooltip para a barra atual
          content={tooltipText} // Define o texto da tooltip para o texto correspondente ao dia atual
          position="top"
          showDelay={200}
          hideDelay={200}
          style={{ fontSize: "0.9rem", width: "150px" }}
        />
      </div>
    );
  }

  return <div className="w-11/12 flex flex-row justify-center">{barras}</div>;
};

export default ServicesActivity;
