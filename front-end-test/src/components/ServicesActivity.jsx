import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const data = [
  { name: "Bar 1", y: 10 },
  { name: "Bar 2", y: 10 },
  { name: "Bar 3", y: 10 },
  { name: "Bar 4", y: 10 },
  { name: "Bar 5", y: 10 },
  { name: "Bar 6", y: 10 },
  { name: "Bar 7", y: 10 },
  { name: "Bar 8", y: 10 },
  { name: "Bar 9", y: 10 },
  { name: "Bar 10", y: 10 },
];

const options = {
  chart: {
    type: "column",
  },
  title: {
    text: "Gráfico de Barras",
  },
  xAxis: {
    categories: data.map((item) => item.name),
  },
  yAxis: {
    min: 0,
    title: {
      text: "Valores",
    },
  },
  series: [
    {
      name: "Valores",
      data: data.map((item) => item.y),
    },
  ],
};

const ServicesActivity = () => (
  <HighchartsReact highcharts={Highcharts} options={options} />
);

export default ServicesActivity;
