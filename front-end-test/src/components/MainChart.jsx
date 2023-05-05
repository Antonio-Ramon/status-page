import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const MainChart = () => {
  // Inicializa os estados de randomBrazil e randomMexico com valores pré-definidos para que ao carregar a página eles nao iniciem vazios
  const [randomBrazil, setRandomBrazil] = useState([
    2, 4.5, 5, 7.5, 6, 7, 5, 6, 8,
  ]);
  const [randomMexico, setRandomMexico] = useState([
    0, 1, 3, 2.8, 4, 3, 3, 2.8, 5,
  ]);

  // Define o efeito que atualiza os estados a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      // Cria um array com valores aleatórios para randomBrazil
      const randomBrazilData = [];
      for (let i = 0; i < 9; i++) {
        randomBrazilData.push(Math.floor(Math.random() * 1000));
      }
      // Atualiza o estado de randomBrazil com os novos valores aleatórios
      setRandomBrazil(randomBrazilData);

      // Cria um array com valores aleatórios para randomMexico
      const randomMexicoData = [];
      for (let i = 0; i < 9; i++) {
        randomMexicoData.push(Math.floor(Math.random() * 1000));
      }
      // Atualiza o estado de randomMexico com os novos valores aleatórios

      setRandomMexico(randomMexicoData);
    }, 5000);

    // Retorna uma função que limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, []);

  const options = {
    chart: {
      height: 350,
      spacingRight: 30,
      spacingLeft: 25,
      spacingBottom: 60,
      marginTop: 70,
    },
    title: {
      text: "WhatsApp - Últimas 24 horas",
      align: "left",
      style: {
        fontWeight: "normal",
      },
      y: 25,
    },
    xAxis: {
      startOnTick: false,
      categories: ["", "", "", "", "", "", "", "", ""],
      gridLineWidth: 1.2,
      gridLineDashStyle: "Dash",
      gridLineColor: "#E9EBF1",
      lineWidth: 0,
    },
    yAxis: {
      startOnTick: false,
      lineWidth: 0.3,
      gridLineWidth: 1.2,
      gridLineDashStyle: "Dash",
      gridLineColor: "#E9EBF1",
      labels: {
        enabled: false,
      },
      title: {
        text: "Notificações",
        style: {
          fontWeight: "normal",
        },
      },
    },
    legend: {
      align: "right",
      verticalAlign: "top",
      layout: "vertical",
      y: 50,
    },
    credits: {
      enabled: false,
    },

    series: [
      {
        name: "México",
        data: randomMexico,
        color: "#8C54FF",
        lineWidth: 2,
        marker: {
          symbol: "circle",
          fillColor: "white",
          lineWidth: 2,
          lineColor: null,
        },
      },
      {
        name: "Brasil",
        data: randomBrazil,
        color: "#2cd9c5",
        lineWidth: 2,

        marker: {
          symbol: "circle",
          fillColor: "white",
          lineWidth: 2,
          lineColor: null,
        },
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 700,
          },
          chartOptions: {
            legend: {
              align: "center",
              verticalAlign: "bottom",
              layout: "horizontal",
            },
          },
        },
      ],
    },
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default MainChart;
