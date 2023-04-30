import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const MainChart = () => {
  const options = {
    title: {
      text: "Meu gráfico de linha",
    },
    xAxis: {
      categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    },
    yAxis: {
      title: {
        text: "Valores",
      },
    },
    series: [
      {
        name: "Série 1",
        data: [1, 2, 3, 4, 5, 6],
      },
      {
        name: "Série 2",
        data: [2, 4, 6, 8, 10, 12],
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
};

export default MainChart;
