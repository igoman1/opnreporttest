// 개요 section

import React from 'react';
import Cover from '../layout/Cover';
import BarChart from '../components/BarChart';
import LineChart from './../components/LineChart';
import DonutChart from '../components/DonutChart';


const Section1 = () => {
    const imagePath='cover1.png';

    const sectionHeader = {
        sectionTitle: "개요",
        sectionList: ['의료기관 목록', '개원여기 분석 결과']
    }

    return (
        <div>
            <Cover 
            fileName="Cover1.png"
            sectionHeader={sectionHeader}/>
            <div>
            결과입니다
                <BarChart />
                <LineChart />
                <DonutChart />
            </div>
        </div>
    );
};

export default Section1;