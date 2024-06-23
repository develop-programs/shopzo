"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

export default function Charts() {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => Math.floor(Math.random() * 1000)),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "#FFFFFF",
        yAxisID: "y",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => Math.floor(Math.random() * 1000)),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "#FFFFFF",
        yAxisID: "y1",
      },
    ],
  };
  return (
    <Line
      options={{
        responsive: true,
        scales: {
          y: {
            type: "linear" as const,
            display: true,
            position: "left" as const,
          },
          y1: {
            type: "linear" as const,
            display: false,
            grid: {
              drawOnChartArea: false,
            },
          },
        },
      }}
      data={data}
    />
  );
}
