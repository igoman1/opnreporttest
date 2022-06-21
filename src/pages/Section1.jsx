// 개요 section

import React from 'react';
import Cover from '../layout/Cover';
import Intro from '../layout/Intro';
import Dictionary from '../layout/Dictionary';
import HospitalList from '../layout/HospitalList';


const Section1 = (props) => {
    const imagePath='cover1.png';

    const sectionHeader = {
        sectionTitle: "개요",
        sectionList: ['의료기관 목록', '개원여기 분석 결과']
    }

    return (
        <>
        <div>
            <Cover 
            fileName="Cover1.png"
            sectionHeader={sectionHeader}/>
            <Intro
            input={props.input}/>
            <Dictionary
            input={props.input} />
            <HospitalList
            listTitle='의료기관 목록'
            input={props.input}/>
                {/* <BarChart />
                <LineChart />
                <DonutChart /> */}
        </div>

        </>

    );
};

export default Section1;