import React, {useEffect, useState} from 'react';
import KeyNumberBoxLean from './../components/KeyNumberBoxLean';
import '../components/key-number-box.css';
import NumberTransformer from './../components/NumberTransformer';

const KeyNumber3x1Comp = () => {

    const sampleData= ['83246789','85691234','치열함']
    const visualData=sampleData
    visualData[0]=NumberTransformer(sampleData[0])
    visualData[1]=NumberTransformer(sampleData[1])

    const titleSet= ['전체 의원 평균 매출액', '신규 의원 평균 매출액', '경쟁 유형']

    return (
        <div className='key-number-box-lean-container'>
            {visualData.map((item, index) => <KeyNumberBoxLean body={item} header={titleSet[index]}/>)}
        </div>
    );
} ;
export default KeyNumber3x1Comp;