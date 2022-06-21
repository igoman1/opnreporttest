import "./colored-header.css";

import { Link, useLocation } from "react-router-dom";

import LogoColored from "../asset/Logo-colored.png";
import React from "react";
import chevronLeft from "../asset/Chevron-left-blue.svg";

const ColoredHeader = () => {
    let location = useLocation();
    return (
        <div className="color-header">
            {location.pathname === "/" ? (
                <div style={{ visibility: "hidden" }}>.</div>
            ) : (
                <div className="previous-page-button">
                    <img className="chevron-left" src={chevronLeft} />
                    <Link to="/" className="color-previous-page-text">
                        돌아가기
                    </Link>
                </div>
            )}
            <img className="logo-colored" src={LogoColored} />
            <span className="colored-header-description">지역 분석 리포트</span>
        </div>
    );
};

export default ColoredHeader;
