import React, {useState, useEffect} from "react";
import './result.css';
import WhiteHeader from './../layout/WhiteHeader';
import Menu from './../layout/Menu';
import TableofContents from "../layout/TableofContents";
import styled from "styled-components";
import bgImageOne from "../asset/Background-image-1.png";

const Result = () => {

    const [position, setPosition] = useState(window.pageYOffset)
    const [visible, setVisible] = useState(true) 
    useEffect(()=> {
        const handleScroll = () => {
           let moving = window.pageYOffset
           
           setVisible(position > moving);
           setPosition(moving)
        };
        window.addEventListener("scroll", handleScroll);
        return(() => {
           window.removeEventListener("scroll", handleScroll);
        })
    })
  
  const cls = visible ? "visible" : "hidden";

  
    return (
        <>
        <div className="App">
            <header className={cls}><WhiteHeader /><Menu /></header>
        </div>
        <div className='result-layout'>
            <TableofContents />
            <img src={bgImageOne} />
        </div>
        </>
    );
};

export default Result;