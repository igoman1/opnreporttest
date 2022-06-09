import "./input-form.css";

import React, { useState } from "react";

import Chevron from "../asset/Chevron.svg";
import DropdownSample1 from "./DropdownSample1";
import DropdownSample2 from "./DropdownSample2";

const InputForm = () => {
    const [isClicked, setisClicked] = useState(false);
    const dropdownClickHandler = () => {
        setisClicked(true);
    };

    return (
        <form>
            <div className="question-wrapper">
                <div className="question">진료과목을 알려주세요</div>
                <div style={{ marginTop: "50px" }}>직접 만든거</div>

                <div className="dropdown-wrapper">
                    <div className="department" onClick={dropdownClickHandler}>
                        <span>진료과목 검색</span>
                        <img src={Chevron} />
                    </div>
                </div>
                {isClicked ? (
                    <div className="department-list-wrapper">
                        <ul className="department-list">
                            <li>가정의학과</li>
                            <li>내과</li>
                            <li>소아청소년과</li>
                            <li>이비인후과</li>
                            <li>마취통증의학과</li>
                        </ul>
                    </div>
                ) : null}
                {/* <div style={{ marginTop: "50px" }}>라이브러리</div>
                <DropdownSample2 /> */}

                {/* <div style={{ marginTop: "50px" }}>커스텀 한거</div> */}
                <DropdownSample1 />
            </div>
        </form>
    );
};

export default InputForm;
