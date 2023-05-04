import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const MainChart = () => {
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
      startOnTick: true,
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
        data: [0, 1, 3, 2.8, 4, 3, 3, 2.8, 5],
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
        data: [2, 4.5, 5, 7.5, 6, 7, 5, 6, 8],
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

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default MainChart;
