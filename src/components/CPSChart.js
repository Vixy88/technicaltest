import React from "react";
import { useState } from "react";
import { UserData } from "../data/Data";
import { LineChart } from "./LineChart";

function CPSChart() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "Average CPS",
        data: UserData.map((data) => data.avgScore),
        backgroundColor: ["rgba(75,192,291,1"],
        borderColor: "rgba(75,192,291,1",
        tension: 0.3,
        fill: "start",
        responsive: true,
      },
    ],
  });

  const options = {
    scales: {
      y: {
        min: 0,
        max: 5,
        stepSize: 1,
      },
      x: {},
    },
  };

  return (
    <div>
      <div className="chartContainer">
        <LineChart chartData={userData} options={options} />
      </div>
    </div>
  );
}

export default CPSChart;
