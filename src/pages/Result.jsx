import React, {useState, useEffect} from "react";
import './result.css';
import WhiteHeader from './../layout/WhiteHeader';
import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";
import Menu from "../layout/Menu";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

const Result = (props) => {

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

  const finalData = props.data;
  
    return (
        <>
        <div className="App">
            <header className={cls}><WhiteHeader /><Menu /></header>
        </div>
        <Section1
        input={finalData.intro} />
        <Section2
        input={finalData.market_analysis} />
        <Section3
        input={finalData.competitive_analysis} />
        <Section4
        input={finalData.user_analysis} />

        </>
    );
};

export default Result;