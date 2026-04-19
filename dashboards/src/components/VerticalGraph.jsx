import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

// register chart components
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export const VerticalGraph = ({ data }) => {
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Bar data={data} />
    </div>
  );
};