import "./chart-form.css";

import React, { Component } from "react";

import Chart from "react-apexcharts";

const DonutChart = (props) => {
    const rawData=props.input
    console.log(rawData)
    // const series = Object.values(rawData);
    // console.log(series)
    const series=[1,2,3,4,5]


    const options = {
        chart: {
            type: "donut",
        },
        fill: {
            colors: [
                "#4277d9f1",
                "#7bb33b",
                "#13dbde",
                "#ce6161",
                "#9d00ff",
                "#8db08a",
            ],
        },
        colors: [
            "#4277d9f1",
            "#7bb33b",
            "#13dbde",
            "#ce6161",
            "#9d00ff",
            "#8db08a",
        ],
        legend: {
            position: "bottom",
        },
        dataLabels: {
            enabled: true,
            style: {
                fontSize: "10px",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: "bold",
            },
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,

                        value: {
                            fontSize: "22px",
                            show: true,
                            color: "blue",
                        },
                    },
                },
            },
        },
    };


    return (
        <div className="chart-wrapper">
            <div className="donut-title">{props.title}</div>
            <div className="donut-header">{props.header}</div>
            <div className="donut">
                <Chart options={options} series={series} type="donut" />
            </div>
        </div>
    );
};

export default DonutChart;
