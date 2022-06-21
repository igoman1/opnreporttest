import React, { Component } from "react";
import Chart from "react-apexcharts";
import './chart-form.css';

const LineChart = (props) => {
  const data=props.input;

      const options = {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ['21년 5월', '6월', '7월', '8월', '9월','10월', '11월', '12월', '22년 1월', '2월', '3월', '4월']
        }
      }
      const series = [
        {
          name: "series-1",
          data: [680044, 773040, 754323, 680044, 773040, 754323, 680044, 773040, 754323, 680044, 773040, 754323]
        }
      ]
    return (
      <div className="chart-wrapper">
        <div className="chart-header">
          <div className="chart-name">{props.chartName}</div>
          <div className="chart-unit">단위: {props.chartUnit}</div>
        </div>
        <div className="app">
          <div className="row">
            <div className="mixed-chart">
              <Chart
                options={options}
                series={series}
                type="line"
                // width="500px"
              />
            </div>
          </div>
        </div>
      </div>
    );
 }
export default LineChart;