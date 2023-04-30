import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const DonutChart = () => {
  const options = {
    chart: {
      type: "pie",
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
    },
    title: {
      text: "Meu gráfico de donut",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.y}</b>",
    },
    plotOptions: {
      pie: {
        innerSize: "58%",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.y}",
        },
      },
    },
    series: [
      {
        name: "Dados",
        colorByPoint: true,
        data: [
          {
            name: "Série 1",
            y: 20,
          },
          {
            name: "Série 2",
            y: 20,
          },
          {
            name: "Série 3",
            y: 30,
          },
          {
            name: "Série 4",
            y: 30,
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
