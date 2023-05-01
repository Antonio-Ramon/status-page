import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const DonutChart = () => {
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
        name: "Usuários",
        colorByPoint: true,
        data: [
          {
            name: "Norte",
            y: 20,
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
        ],
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
