import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

let numberOfBars = 31;
const data = [];

for (let i = 1; i <= numberOfBars; i++) {
  const objects = { name: `Bar ${i}`, y: 1 };
  data.push(objects);
}

const options = {
  chart: {
    type: "column",
    height: 250,
    marginBottom: 70,
    marginLeft: 50,
    marginTop: 30,
    marginRight: 50,
  },
  title: {
    text: "Tempo de Atividades dos Serviços",
    align: "left",
    style: {
      fontWeight: "normal",
    },
    x: 40,
    y: 40,
  },
  xAxis: {
    categories: data.map((item) => item.name),
    gridLineWidth: 0,
    lineWidth: 0,
    labels: {
      enabled: false,
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "",
    },
    gridLineWidth: 0,
    labels: {
      enabled: false,
    },
  },
  legend: {
    align: "left",
    floating: true,
    x: 30,
  },
  series: [
    {
      name: "90 dias atrás",
      data: data.map((item) => item.y),
    },
  ],
  plotOptions: {
    column: {
      pointWidth: 10,
      color: "#4AD991",
    },
  },
  credits: {
    enabled: false,
  },
};

const ServicesActivity = () => (
  <div className="">
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);

export default ServicesActivity;
