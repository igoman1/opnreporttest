import "./white-header.css";

import { Link } from "react-router-dom";
import React from "react";
import chevronLeft from "../asset/Chevron-left.svg";
import logoWhite from "../asset/Logo-white.png";

const WhiteHeader = () => {
    return (
        <>
            <div className="white-header">
                <div className="previous-page-button child child-left">
                    <img className="chevron-left" src={chevronLeft} />
                    <Link to="/" className="previous-page-text">
                        돌아가기
                    </Link>
                </div>
                <div className="child child-center">
                    <img className="logo-white" src={logoWhite} />
                </div>
                <div className="child child-right">
                    <span className="header-description">분석 리포트</span>
                </div>
            </div>
        </>
    );
};

export default WhiteHeader;
