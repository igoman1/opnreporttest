import React from 'react';
import "./menu.css";

const menuItems=['개요','시장분석','경쟁분석','고객분석'];

const Menu = () => {
    return (
        <div className='menu'>
            
            {menuItems.map((item)=>{
                return <div>{item}</div>
            })}
            

        </div>
    );
};

export default Menu;