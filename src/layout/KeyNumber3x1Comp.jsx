import React, {useEffect, useState} from 'react';
import KeyNumberBoxLean from './../components/KeyNumberBoxLean';
import '../components/key-number-box.css';
import NumberTransformer from './../components/NumberTransformer';

const KeyNumber3x1Comp = (props) => {
    const data=props.input

    // const sampleData= ['83246789','85691234','치열함']
    const visualData=[]
    visualData.push(data.all_hospital_average_profit)
    visualData.push(data.new_hospital_average_profit)
    visualData.push(data.competition_type)

    const titleSet= ['전체 의원 평균 매출액', '신규 의원 평균 매출액', '경쟁 유형']

    return (
        <div className='key-number-box-lean-container'>
            {visualData.map((item, index) => <KeyNumberBoxLean body={item} header={titleSet[index]}/>)}
        </div>
    );
} ;
export default KeyNumber3x1Comp;
