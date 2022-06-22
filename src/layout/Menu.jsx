import "./menu.css";

import { Link } from "react-scroll";
import React from "react";
import { useState } from "react";

const menuItems = ["개요", "시장분석", "경쟁분석", "고객분석"];

const Menu = (props) => {
    const [currentTarget, setCurrentTarget] = useState(null);

    const linkHandler = (target) => {
        setCurrentTarget(target);
        console.log(target);
    };
    const style = {
        color: props.isInCover ? "white" : "#3955B4",
    };
    return (
        <div className="menu" style={style}>
            {menuItems.map((item, i) => {
                if (currentTarget === i) {
                    return (
                        <Link
                            smooth={true}
                            to={`section-${i + 1}`}
                            spy={true}
                            onClick={linkHandler.bind(null, i)}
                        >
                            <span
                                style={{
                                    fontSize: "16px",
                                    textDecorationLine: "underline",
                                }}
                            >
                                {item}
                            </span>
                        </Link>
                    );
                }
                return (
                    <Link
                        smooth={true}
                        to={`section-${i + 1}`}
                        spy={true}
                        onClick={linkHandler.bind(null, i)}
                    >
                        <span>{item}</span>
                    </Link>
                );
            })}
        </div>
    );
};

export default Menu;
