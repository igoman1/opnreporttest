import "./result.css";

import React, { useEffect, useRef, useState } from "react";

import ColoredHeader from "../layout/ColoredHeader";
import Menu from "../layout/Menu";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import WhiteHeader from "./../layout/WhiteHeader";
import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";

const Result = (props) => {
    const [isInCover, setIsInCover] = useState(true);
    const [position, setPosition] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
    const [coverHeight, setCoverHeight] = useState(0);
    const coverImage = useRef();

    useEffect(() => {
        const handleScroll = () => {
            let moving = window.pageYOffset;
            if (moving < 50) {
                setIsInCover(true);
                return;
            }
            setVisible(position > moving);
            setPosition(moving);
            setCoverHeight(coverImage.current.clientHeight);

            const targets = Array(4)
                .fill()
                .map((arr, i) => {
                    return document
                        .getElementById(`section-${i + 1}`)
                        .getBoundingClientRect().y;
                });
            for (let i = 0; i < targets.length; i++) {
                if (targets[i] < 0) {
                    setIsInCover(false);

                    continue;
                }
                if (0 <= targets[i] && targets[i] <= coverHeight) {
                    setIsInCover(true);
                    break;
                } else {
                    setIsInCover(false);
                    break;
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
    const cls = visible ? "visible" : "hidden";

    const finalData = props.data;
    // console.log(finalData);
    return (
        <>
            <div className="App">
                <header className={cls}>
                    {isInCover ? <WhiteHeader /> : <ColoredHeader />}
                    <Menu />
                </header>
            </div>
            <Section1 ref={coverImage} input={finalData.intro} />
            <Section2 input={finalData.market_analysis} />
            <Section3 input={finalData.competitive_analysis} />
            <Section4 input={finalData.user_analysis} />
        </>
    );
};

export default Result;
