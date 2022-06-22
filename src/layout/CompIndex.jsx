
import React from 'react';
import './comp-index.css';
import CompBoxCombinded from './../components/CompBoxCombinded';
import CompBoxWhite from './../components/CompBoxWhite';
import CompBar from './../components/CompBar';

const CompIndex = (props) => {
    const residualCount='0개';
    const residualVal='0.00';
    const sumVal='0.10';

    return (
        <div>
            <div className="comp-index-title">의원별 점유율과 경쟁 지표</div>
            <CompBoxCombinded
            input={props.input}/>
            <div className="comp-index-sum">
                <span className="comp-index-sum-text">그외 {residualCount} 의원</span>
            <CompBoxWhite
            name='점유율 제곱'
            num={residualVal} />
            </div>
            <div className="comp-index-bottom">
            <CompBar/>
            <CompBoxWhite
            name='경쟁 지표 (점유율 제곱합)'
            num={sumVal} />
            </div>

        </div>
    );
};

export default CompIndex;
