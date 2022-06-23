import "./chart-form.css";

import React, { Component } from "react";

import Chart from "react-apexcharts";

const BarChart = (props) => {
    // yaxis:{
    //   show: false;
    // }
    const rawData = props.input;
    console.log(rawData)
    const xLabel = [];
    const chartValue =[];
    rawData.map((item)=>{
        xLabel.push(item.class);
        chartValue.push(item.value);
    })
    
    console.log(chartValue)

    const options = {
        chart: {
            id: "basic-bar",
            toolbar: {
                show: false,
            },
        },
        colors: "#3955B4",

        xaxis: {
            axisTicks: {
                show: false,
            },
            categories: xLabel,
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
        dataLabels: {
            offsetY: -20,
            style: {
                fontSize: "12px",
                colors: ["#000"],
            },
        },
        grid: {
            show: false,
        },
        plotOptions: {
            bar: {
                barWidth: "70%",
                horizontal: false,
                dataLabels: {
                    position: "top",
                    offsetY: 10,
                },
            },
        },
    };

    const series = [
        {
            name: "series-1",
            data: chartValue,
        },
    ];

    return (
        <div className="chart-wrapper">
            <div className="chart-title-area">
                <div className="chart-header">
                    <div className="chart-name">{props.chartName}</div>
                    <div className="chart-unit">단위: {props.chartUnit}</div>
                </div>
                <div className="chart-note">{props.chartNote}</div>
            </div>
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart options={options} series={series} type="bar" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BarChart;

// const donutData = {
//     series: [50,40,30,10,0],
//     options: {
//       chart: {
//         type: 'donut',
//       },
//       legend: {
//         position: 'bottom'
//       },
//       responsive: [{
//         breakpoint: 480,
//       }],
//       plotOptions: {
//         pie: {
//           donut: {
//             // hollow: {
//             //   margin: 15,
//             //   size: '70%',
//             //   image: '../../css/images/a-icon.jpg',
//             //   imageWidth: 64,
//             //   imageHeight: 64,
//             //   imageClipped: false
//             // },
//             labels: {
//               show: true,
//               total: {
//                 showAlways: true,
//                 show: true,
//                 label: 'ALARM',
//                 fontSize: '12px',
//                 color: 'red'
//               },
//               value: {
//                 fontSize: '22px',
//                 show: true,
//                 color: 'blue',
//               },
//             },
//           }
//         }
//       },
//       labels: ["침입", "배회", "쓰러짐", "화재", "안전모"],
//       title: {
//         text: '이벤트별 통계',
//         align: 'center'
//       },
//       dataLabels: {
//         enabled: true,
//         style: {
//           colors: ['#fff']
//         },
//         background: {
//           enabled: true,
//           foreColor: '#000',
//           borderWidth: 0
//         }
//       }
//     },
//   }
