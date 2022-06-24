
import React from 'react';
import './comp-index.css';
import CompBoxCombinded from './../components/CompBoxCombinded';
import CompBoxWhite from './../components/CompBoxWhite';
import CompBar from './../components/CompBar';

const CompIndex = (props) => {
    const raw = props.input
    // console.log(raw)
    const compTable=props.input.competition_top10_table;
    const residual=props.input.competition_rest_info[0];
    // console.log(compTable)
    // console.log(residual)
    // console.log(residual)
    // console.log(residual[0].rate_squared_sum_rest)

    let residualCount =residual.rest_hospital_count;
    let residualVal=residual.rate_squared_sum_rest;
    let topVal=residual.rate_squared_sum_top10;
    let sumVal=residualVal+topVal

    return (
        <div>
            <div className="comp-index-title">의원별 점유율과 경쟁 지표</div>
            <CompBoxCombinded
            input={compTable}/>
            <div className="comp-index-sum">
                <span className="comp-index-sum-text">그외 {residualCount}개 의원</span>
            <CompBoxWhite
            name='점유율 제곱'
            num={residualVal} />
            </div>
            <div className="comp-index-bottom">
            <CompBar
            value={sumVal}/>
            <CompBoxWhite
            name='경쟁 지표 (점유율 제곱합)'
            num={sumVal} />
            </div>

        </div>
    );
};

export default CompIndex;
