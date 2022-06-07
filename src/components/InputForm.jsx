import React, { useState } from 'react';
import './InputForm.css';
import Chevron from '../asset/Chevron.svg';

const InputForm = () => {
    const [isClicked, setisClicked] = useState(false);
    const dropdownClickHandler = () => {
        setisClicked(true);
    }
    return (
        <form>
            <div className='dropdown-wrapper'>
                <div className='department' onClick={dropdownClickHandler}>
                    <span>진료과목 검색</span>
                <img src={Chevron}/>
                </div>
            </div>
                {isClicked ? 
                    <div className='department-list-wrapper'>
                        <ul className='department-list'>
                            <li>가정의학과</li>
                            <li>내과</li>
                            <li>소아청소년과</li>
                            <li>이비인후과</li>
                            <li>마취통증의학과</li>
                        </ul>
                    </div>
                : null }
        </form>
    );
};

export default InputForm;

  