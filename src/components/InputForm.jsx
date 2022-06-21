import "./input-form.css";

import React, { useState } from "react";

import BottomButton from "./../components/BottomButton";
import Dropdown from "./Dropdown";
import Loader from "./Lodaer";
import { inputHandler } from "../pages/Home";
import { useNavigate } from "react-router-dom";

const InputForm = (props) => {
    const navigate = useNavigate();
    const [department, setDepartment] = useState("");
    const [location, setLocation] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const [fetchedData, setFetchedData] = useState({});

    const departmentOptions = [
        { value: "일반의원", label: "일반의원" },
        { value: "가정의학과", label: "가정의학과" },
        { value: "내과", label: "내과" },
        { value: "소아청소년과", label: "소아청소년과" },
        { value: "이비인후과", label: "이비인후과" },
        { value: "마취통증의학과", label: "마취통증의학과" },
        { value: "재활의학과", label: "재활의학과" },
        { value: "정형외과", label: "정형외과" },
        { value: "신경외과", label: "신경외과" },
        { value: "신경과", label: "신경과" },
        { value: "정신건강의학과", label: "정신건강의학과" },
        { value: "병리과", label: "병리과" },
        { value: "진단검사의학과", label: "진단검사의학과" },
        { value: "피부과", label: "피부과" },
        { value: "성형외과", label: "성형외과" },
        { value: "외과", label: "외과" },
        { value: "비뇨의학과", label: "비뇨의학과" },
        { value: "산부인과", label: "산부인과" },
        { value: "안과", label: "안과" },
        { value: "결핵과", label: "결핵과" },
        { value: "흉부외과", label: "흉부외과" },
        { value: "직업환경의학과", label: "직업환경의학과" },
        { value: "예방의학과", label: "예방의학과" },
        { value: "응급의학과", label: "응급의학과" },
        { value: "영상의학과", label: "영상의학과" },
        { value: "방사선종양학과", label: "방사선종양학과" },
        { value: "치과", label: "치과" },
        { value: "핵의학과", label: "핵의학과" },
    ];

    const locationOptions = [
        {
            value: "서울특별시 강남구 신사동",
            label: "서울특별시 강남구 신사동",
        },
        {
            value: "서울특별시 강남구 논현1동",
            label: "서울특별시 강남구 논현1동",
        },
        {
            value: "서울특별시 강남구 논현2동",
            label: "서울특별시 강남구 논현2동",
        },
        {
            value: "서울특별시 강남구 압구정동",
            label: "서울특별시 강남구 압구정동",
        },
        {
            value: "서울특별시 강남구 청담동",
            label: "서울특별시 강남구 청담동",
        },
        {
            value: "서울특별시 강남구 삼성1동",
            label: "서울특별시 강남구 삼성1동",
        },
        {
            value: "서울특별시 강남구 삼성2동",
            label: "서울특별시 강남구 삼성2동",
        },
        {
            value: "서울특별시 강남구 대치1동",
            label: "서울특별시 강남구 대치1동",
        },
        {
            value: "서울특별시 강남구 대치2동",
            label: "서울특별시 강남구 대치2동",
        },
        {
            value: "서울특별시 강남구 대치4동",
            label: "서울특별시 강남구 대치4동",
        },
        {
            value: "서울특별시 강남구 역삼1동",
            label: "서울특별시 강남구 역삼1동",
        },
        {
            value: "서울특별시 강남구 역삼2동",
            label: "서울특별시 강남구 역삼2동",
        },
        {
            value: "서울특별시 강남구 도곡1동",
            label: "서울특별시 강남구 도곡1동",
        },
        {
            value: "서울특별시 강남구 도곡2동",
            label: "서울특별시 강남구 도곡2동",
        },
        {
            value: "서울특별시 강남구 개포1동",
            label: "서울특별시 강남구 개포1동",
        },
        {
            value: "서울특별시 강남구 개포2동",
            label: "서울특별시 강남구 개포2동",
        },
        {
            value: "서울특별시 강남구 개포4동",
            label: "서울특별시 강남구 개포4동",
        },
        {
            value: "서울특별시 강남구 세곡동",
            label: "서울특별시 강남구 세곡동",
        },
        {
            value: "서울특별시 강남구 일원본동",
            label: "서울특별시 강남구 일원본동",
        },
        {
            value: "서울특별시 강남구 일원1동",
            label: "서울특별시 강남구 일원1동",
        },
        {
            value: "서울특별시 강남구 일원2동",
            label: "서울특별시 강남구 일원2동",
        },
        {
            value: "서울특별시 강남구 수서동",
            label: "서울특별시 강남구 수서동",
        },
    ];

    let isValid = department !== "" && location !== "";

    const departmentSelectHandler = (selectedValue) => {
        setDepartment(selectedValue.value);
    };

    const locationSelectHandler = (selectedValue) => {
        setLocation(selectedValue.value);
    };

    const submitHandler = async () => {
        if (department === "" || location === "") {
            return;
        }
        setIsLoading(true);

        analyze()
            .then(() => {
                setIsLoading(false);
                navigate("/report");
            })
            .catch((error) => {
                setIsLoading(false);
                alert(error.message);
            });
    };

    const analyze = async () => {
        const resp = await fetch(
            `https://opn-server2.herokuapp.com/report/?department=${department}&location=${location}`
        );
        const respJSON = await resp.json();
        setFetchedData(respJSON);
        props.input(respJSON);

        if (!resp.ok) {
            throw new Error("Something went wrong!");
        }
    };

    return (
        <div>
            {isLoading ? (
                <Loader type="spin" color="RGB 값" message="분석중입니다." />
            ) : (
                <>
                    <div className="question-wrapper">
                        <Dropdown
                            title="진료과목을 알려주세요"
                            options={departmentOptions}
                            onSelect={departmentSelectHandler}
                        />
                        <Dropdown
                            title="관심있는 지역을 알려주세요"
                            options={locationOptions}
                            onSelect={locationSelectHandler}
                        />
                    </div>

                    <BottomButton
                        isValid={isValid}
                        onSubmit={submitHandler}
                    ></BottomButton>
                </>
            )}
        </div>
    );
};

export default InputForm;
