import React, {useState, useEffect} from "react";
import './result.css';
import WhiteHeader from './../layout/WhiteHeader';
import ApexChart from 'react-apexcharts';
import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";
import Menu from "../layout/Menu";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

const donutData = {
    series: [50,40,30,10,0],
    options: {
      chart: {
        type: 'donut',
      },
      legend: {
        position: 'bottom'
      },
      responsive: [{
        breakpoint: 480,
      }],
      plotOptions: {
        pie: {
          donut: {
            // hollow: {  
            //   margin: 15,
            //   size: '70%',
            //   image: '../../css/images/a-icon.jpg',
            //   imageWidth: 64,
            //   imageHeight: 64,
            //   imageClipped: false
            // },
            labels: {
              show: true,
              total: {
                showAlways: true,
                show: true,
                label: 'ALARM',
                fontSize: '12px',
                color: 'red'
              },
              value: {
                fontSize: '22px',
                show: true,
                color: 'blue',
              },
            },
          }
        }
      },
      labels: ["침입", "배회", "쓰러짐", "화재", "안전모"],
      title: {
        text: '이벤트별 통계',
        align: 'center'
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ['#fff']
        },
        background: {
          enabled: true,
          foreColor: '#000',
          borderWidth: 0
        }
      }
    },
  }


const Result = () => {

    const [position, setPosition] = useState(window.pageYOffset)
    const [visible, setVisible] = useState(true) 
    useEffect(()=> {
        const handleScroll = () => {
           let moving = window.pageYOffset
           
           setVisible(position > moving);
           setPosition(moving)
        };
        window.addEventListener("scroll", handleScroll);
        return(() => {
           window.removeEventListener("scroll", handleScroll);
        })
    })
  
  const cls = visible ? "visible" : "hidden";

  
    return (
        <>
        <div className="App">
            <header className={cls}><WhiteHeader /><Menu /></header>
        </div>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        {/* <div className='result-layout'>
            결과입니다
            <ApexChart 
            options={donutData.options}
            series={donutData.series}
            type="donut" 
            width="500"
        />
        </div> */}
        </>
    );
};

export default Result;