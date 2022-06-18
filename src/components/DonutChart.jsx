import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import './chart-form.css';

const DonutChart = (props) => {

    const options = {};
    const series = [44, 55, 41, 17, 15];
    const labels = ['A', 'B', 'C', 'D', 'E'];

    return (
      <div className='chart-wrapper'>
        <div className='donut-title'>{props.title}</div>
          <div className='donut-header'>{props.header}</div>
        <div className="donut">
          <Chart options={options} series={series} type="donut" width="380" />
        </div>
      </div>
    );
}

export default DonutChart;