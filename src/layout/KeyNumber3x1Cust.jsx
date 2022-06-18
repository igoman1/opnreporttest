import React, {useEffect, useState} from 'react';
import KeyNumberBoxLean from '../components/KeyNumberBoxLean';
import '../components/key-number-box.css';
import NumberTransformerTwo from '../components/NumberTransformerTwo';

const KeyNumber3x1Cust = () => {

    const sampleData= ['50대 남성','4천~6천만원','265779']
    const visualData=sampleData
    visualData[2]=NumberTransformerTwo(sampleData[2])

    const titleSet= ['전체 의원 평균 매출액', '신규 의원 평균 매출액', '경쟁 유형']

    return (
        <div className='key-number-box-lean-container'>
            {visualData.map((item, index) => <KeyNumberBoxLean body={item} header={titleSet[index]}/>)}
        </div>
    );
} ;
export default KeyNumber3x1Cust;