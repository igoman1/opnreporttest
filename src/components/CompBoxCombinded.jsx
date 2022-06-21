import React from 'react';
import CompBox from './CompBox';
import CompBoxWhite from './CompBoxWhite';
import './comp-box.css'

const CompBoxCombinded = (props) => {
    const data=props.input.competition_table
    console.log(data[0])
    return (
        <div className='comp-box-combinded'>
            <CompBox
            name='매출액'
            num={data.profit}/>
            <CompBox
            name='점유율'
            num={data.acquisition_rate}/>
            <CompBoxWhite
            name='점유율 제곱'
            num={data.rate_squared}/>
        </div>
    );
};

export default CompBoxCombinded;