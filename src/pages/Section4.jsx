// 고객분석 section
import React from 'react';
import KeyNumberBoxLean from '../components/KeyNumberBoxLean';
import Cover from '../layout/Cover';
import KeyNumber3x1Cust from './../layout/KeyNumber3x1Cust';
import SectionBody from './../layout/SectionBody';
import Card from './../components/Card';
import DonutChart from '../components/DonutChart';
import LineChart from './../components/LineChart';
import BarChart from './../components/BarChart';


const Section4 = () => {
    const sectionHeader = {
        sectionTitle: "고객 분석",
        sectionList: ['성연령대별 매출 분포', '소득수준별 매출 분포','객단가 단기 추세 (12개월)', '객단가 장기 추세 (3년)']
    }
    return (
        <>
        <div>
            <Cover
            fileName="Cover4.png"
            sectionHeader={sectionHeader}/>       
        </div>
        <KeyNumber3x1Cust />
        <SectionBody/>
        <Card>
            <DonutChart
            title='성연령대별 매출 분포'
            header='성별분포' />
            <DonutChart
            header='남성 연령 분포' />
            <DonutChart
            header='여성 연령 분포' />
        </Card>
        <Card>
            <DonutChart
            title='소득수준별 매출 분포' />
        </Card>
        <Card>
                <LineChart
                chartName='객단가 단기 추세 (12개월)'
                chartUnit='원'/>
        </Card>
        <Card>
                <BarChart
                chartName='객단가 장기 추세 (3년)'
                chartUnit='원' />
        </Card>

        </>
    );
};

export default Section4;