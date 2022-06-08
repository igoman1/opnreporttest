import React, {useState, useEffect} from "react";
import './result.css';
import WhiteHeader from './../layout/WhiteHeader';

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
            <header className={cls}><WhiteHeader /></header>
        </div>
        <WhiteHeader />
        <div className='result-layout'>
            결과입니다
        </div>
        </>
    );
};

export default Result;