import React from "react";
import ChartComponent from "../components/Chart";
import "./../styles/Overview.scss";

const chartData = {
  line: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Line Chart Data",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 1,
      },
    ],
  },
  pie: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Pie Chart Data",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
        borderWidth: 1,
      },
    ],
  },
};

const Overview = () => (
  <div>
    <h1 className="header">Overview</h1>

    <div className="overview_body">
      <div className="overview_content_v2">
        <div className="overview_line_chart">
          <ChartComponent data={chartData.line} type="line" />
        </div>
        <div className="overview_line_chart">
          <ChartComponent data={chartData.line} type="bar" />
        </div>
      </div>

      <div className="overview_content_v1">
        <div className="overview_pie_chart">
          <ChartComponent data={chartData.pie} type="pie" />
        </div>
      </div>
    </div>
  </div>
);

export default Overview;
