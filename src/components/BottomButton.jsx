import React from 'react';
import './bottom-button.css';
import reportIcon from '../asset/carbon_report.svg';

const BottomButton = () => {
    return (
        <div className="bottom-wrapper">
            <img className="report-icon" src={reportIcon} />
            <span className="bottom-button-text">분석 리포트 보기</span>
        </div>
    );
};

export default BottomButton;