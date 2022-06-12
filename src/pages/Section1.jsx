// 개요 section

import React from 'react';
import Cover from '../layout/Cover';


const Section1 = () => {
    const imagePath='cover1.png';

    const sectionHeader = {
        sectionTitle: "개요",
        sectionList: ['의료기관 목록', '개원여기 분석 결과']
    }

    return (
        <div style={{height: '200px'}}>
            <Cover 
            fileName="Cover1.png"
            sectionHeader={sectionHeader}/>
            개요 섹션 입니다
        </div>
    );
};

export default Section1;