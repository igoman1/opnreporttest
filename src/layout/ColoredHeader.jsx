import React from 'react';
import LogoColored from '../asset/Logo-colored.png';
import './colored-header.css';

const ColoredHeader = () => {
    return (
        <div className='colored-header-container'>
            <img className='logo-colored' src={LogoColored} />
            <span className='colored-header-description'>지역 분석 리포트</span>
        </div>
    );
};

export default ColoredHeader;