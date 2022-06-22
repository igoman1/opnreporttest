import "./menu.css";

import { Link } from "react-scroll";
import React from "react";

const menuItems = ["개요", "시장분석", "경쟁분석", "고객분석"];

const Menu = () => {
    return (
        <div className="menu">
            {menuItems.map((item, i) => {
                return (
                    <Link smooth={true} to={`section-${i + 1}`}>
                        {item}
                    </Link>
                );
            })}
        </div>
    );
};

export default Menu;
