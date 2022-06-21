import React, {useEffect, useState} from 'react';
import KeyNumberBoxLean from '../components/KeyNumberBoxLean';
import '../components/key-number-box.css';
import NumberTransformerTwo from '../components/NumberTransformerTwo';

const KeyNumber3x1Cust = (props) => {
    const data=props.input

    const visualData=[]
    visualData.push(data.major_customer_age_sex)
    visualData.push(data.major_customer_profit)
    visualData.push(data.average_profit_per_customer)

    const titleSet= ['주요 고객 성연령', '주요 고객 소득수준', '평균 객단가']

    return (
        <div className='key-number-box-lean-container'>
            {visualData.map((item, index) => <KeyNumberBoxLean body={item} header={titleSet[index]}/>)}
        </div>
    );
} ;
export default KeyNumber3x1Cust;