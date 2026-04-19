import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// register chart components
ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart({ data }) {
  return (
    <div style={{ width: "300px", margin: "30px auto" }}>
      <Doughnut data={data} />
    </div>
  );
}