import React, {useState, useEffect} from "react";
import './result.css';
import WhiteHeader from './../layout/WhiteHeader';
import ReactDOM from "react-dom";

const Result = () => {
      const [position, setPosition] = useState(window.pageYOffset)
        const [visible, setVisible] = useState(true) 
        useEffect(()=> {
            // console.log('유즈이펙트');
            const handleScroll = () => {
                let moving = window.pageYOffset
                
                setVisible(position > moving);
                setPosition(moving)
            };
            window.addEventListener("scroll", handleScroll);
            return(() => {
                window.removeEventListener("scroll", handleScroll);
            })
        }, [window.pageYOffset])

const cls = visible ? "visible" : "hidden";

    return (
        <>
        <div className={cls}>
            <WhiteHeader />
        </div>
        <div className='result-layout'>
            결과입니다
        </div>
        </>
    );
};

export default Result;