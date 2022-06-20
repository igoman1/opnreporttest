import React from 'react';
import CompBox from './CompBox';
import CompBoxWhite from './CompBoxWhite';
import './comp-box.css'

const CompBoxCombinded = () => {
    return (
        <div className='comp-box-combinded'>
            <CompBox
            name='매출액'
            num='11억 5,708만원'/>
            <CompBox
            name='점유율'
            num='11%'/>
            <CompBoxWhite
            name='점유율 제곱'
            num='0.02'/>
        </div>
    );
};

export default CompBoxCombinded;