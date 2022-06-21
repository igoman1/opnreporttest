import "./white-header.css";

import { Link } from "react-router-dom";
import React from "react";
import chevronLeft from "../asset/Chevron-left.svg";
import logoWhite from "../asset/Logo-white.png";

const WhiteHeader = () => {
    return (
        <>
            <div className="white-header">
                <div className="previous-page-button">
                    <img className="chevron-left" src={chevronLeft} />
                    <Link to="/" className="previous-page-text">
                        돌아가기
                    </Link>
                </div>
                <img className="logo-white" src={logoWhite} />
                <span className="header-description">지역 분석 리포트</span>
            </div>
        </>
    );
};

export default WhiteHeader;
