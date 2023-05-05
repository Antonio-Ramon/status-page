import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const DonutChart = () => {
  // Define o estado inicial dos dados do gráfico para que ao carregar a página eles nao iniciem vazios
  const [data, setData] = useState([
    {
      name: "Norte",
      y: 20, // Define um valor aleatório entre 1 e 20 para cada fatia
    },
    {
      name: "Nordeste",
      y: 20,
    },
    {
      name: "Sudeste",
      y: 20,
    },
    {
      name: "Centro Oeste",
      y: 20,
    },
    {
      name: "Sul",
      y: 20,
    },
  ]);

  // Cria um efeito para atualizar os dados do gráfico a cada 5 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Cria um novo array de objetos baseado nos dados atuais, com valores aleatórios para cada fatia do gráfico
      const newData = data.map((item) => ({
        ...item,
        y: Math.floor(Math.random() * 20) + 1,
      }));
      // Define os novos dados no estado do componente
      setData(newData);
    }, 5000);

    // Retorna uma função que limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, [data]); // Define a dependência como o estado atual do componente para evitar que o efeito seja recriado desnecessariamente

  const options = {
    chart: {
      type: "pie",
      marginTop: 90,
      marginBottom: 30,
    },
    title: {
      text: "Brasil",
      y: 50,
      style: {
        fontWeight: "normal",
      },
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.y}</b>",
    },
    plotOptions: {
      pie: {
        innerSize: "58%",
        dataLabels: {
          enabled: false,
          format: "<b>{point.name}</b>: {point.y}",
        },
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Usuários ativos",
        colorByPoint: true,
        data,
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default DonutChart;
