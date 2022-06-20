// 시장분석 section
import React from 'react';
import LineChart from '../components/LineChart';
import Cover from '../layout/Cover';
import SectionBody from '../layout/SectionBody';
import KeyNumber2x3 from './../layout/KeyNumber2x3';
import Card from './../components/Card';
import BarChart from './../components/BarChart';

const Section2 = () => {

    const sectionHeader = {
        sectionTitle: "시장 분석",
        sectionList: ['시장규모 단기 추세 (12개월)', '시장규모 장기 추세 (3년)', '의원 1평당 매출액 단기 추세 (12개월)', '의원 1평당 매출액 장기 추세 (3년)']
    }

    return (
        <>
        <div>
            <Cover
            fileName='Cover2.png'
            sectionHeader={sectionHeader}/>
            <KeyNumber2x3 />
            <SectionBody/>
            <Card>
                <LineChart
                chartName='시장규모 단기 추세 (12개월)'
                chartUnit='만원'/>
            </Card>
            <Card>
                <BarChart
                chartName='시장규모 장기 추세 (3년)'
                chartUnit='만원' />
            </Card>
            <Card>
                <LineChart
                chartName='의원 개수 단기 추세 (12개월)'
                chartUnit='개'/>
            </Card>
            <Card>
                <BarChart
                chartName='의원 개수 장기 추세 (3년)'
                chartUnit='개' />
            </Card>
            <Card>
                <LineChart
                chartName='의원 1평당 매출액 단기 추세 (12개월)'
                chartUnit='만원'/>
            </Card>
            <Card>
                <BarChart
                chartName='의원 1평당 매출액 장기 추세 (3년)'
                chartUnit='만원' />
            </Card>

        </div> 
        </>
    );
};

export default Section2;