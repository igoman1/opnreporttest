// 경쟁분석 section
import React from 'react';
import CompBar from './../components/CompBar';
import Cover from './../layout/Cover';
import KeyNumber3x1Comp from './../layout/KeyNumber3x1Comp';
import SectionBody from './../layout/SectionBody';
import Card from './../components/Card';
import BarChart from './../components/BarChart';
import HospitalList from '../layout/HospitalList';

const Section3 = () => {
    
    const sectionHeader = {
        sectionTitle: "경쟁 분석",
        sectionList: ['의원 매출액 분포 (최근 12개월 평균)', '의원별 점유율과 경쟁 지표', '신규 의원 목록 (최근 24개월 간)', '폐업 의원 목록 (최근 24개월 간)']
    }

    return (
        <>
        <div>
        <Cover
            fileName='Cover3.png'
            sectionHeader={sectionHeader}/>
        </div>
        <KeyNumber3x1Comp />
        <SectionBody/>
        <Card>
            <BarChart
            chartName='의원 매출액 분포 (최근 1년간 월평균)'
            chartUnit='만원'
            chartNote='상위 10개 의원만 표시 중' />
        </Card>
        <Card>
            <CompBar />
        </Card>
        <HospitalList
        listTitle= '신규 의원 목록(최근24개월 간)' />
        <HospitalList
        listTitle= '폐업 의원 목록(최근24개월 간)' />

        </>
    );
};

export default Section3;