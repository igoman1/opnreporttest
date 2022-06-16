// 시장분석 section
import React from 'react';
import Cover from '../layout/Cover';

const Section2 = () => {

    const sectionHeader = {
        sectionTitle: "시장 분석",
        sectionList: ['시장규모 단기 추세 (12개월)', '시장규모 장기 추세(3년), 의원 1평당 매출액 단기 추세 (12개월), 의원 1평당 매출액 장기 추세 (3년)']
    }

    return (
        <>
        <div>
            <Cover
            fileName='Cover2.png'
            sectionHeader={sectionHeader}/>
        </div> 
        </>
    );
};

export default Section2;