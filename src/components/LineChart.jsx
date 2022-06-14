import React, { Component } from "react";
import Chart from "react-apexcharts";

class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ['21년 5월', '6월', '7월', '8월', '9월','10월', '11월', '12월', '22년 1월', '2월', '3월', '4월']
        }
      },
      series: [
        {
          name: "series-1",
          data: [680044, 773040, 754323, 680044, 773040, 754323, 680044, 773040, 754323, 680044, 773040, 754323]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LineChart;