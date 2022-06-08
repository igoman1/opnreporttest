import React from 'react';
import './white-header.css';
import chevronLeft from '../asset/Chevron-left.svg';
import logoWhite from '../asset/Logo-white.png';

const WhiteHeader = () => {
    return (
        <>
        <header className="white-header">
            <div className="previous-page-button">
                <img className="chevron-left" src={chevronLeft} />
                <span className="previous-page-text">돌아가기</span>
            </div>
            <img className="logo-white" src={logoWhite} />
            <span className="header-description">지역 분석 리포트</span>
        </header>
        </>
    );
};

export default WhiteHeader;