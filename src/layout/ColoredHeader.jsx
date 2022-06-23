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
                <div className="child" style={{ visibility: "hidden" }}>
                    .
                </div>
            ) : (
                <div className="previous-page-button child child-left">
                    <img className="chevron-left" src={chevronLeft} />
                    <Link to="/" className="color-previous-page-text">
                        돌아가기
                    </Link>
                </div>
            )}
            <div className="child child-center ">
                <img className="logo-colored" src={LogoColored} />
            </div>
            <div className="child child-right">
                <span className="colored-header-description">
                    분석 리포트
                </span>
            </div>
        </div>
    );
};

export default ColoredHeader;
