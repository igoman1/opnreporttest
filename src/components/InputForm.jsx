import "./input-form.css";

import React, { useState } from "react";

import BottomButton from "./../components/BottomButton";
import Dropdown from "./Dropdown";
import Loader from "./Lodaer";
import { inputHandler } from "../pages/Home";
import { useNavigate } from "react-router-dom";

const tempRespJSON = {
    intro: {
        department: "정형외과",
        department_group:
            "마취통증의학과, 재활의학과, 정형외과, 신경외과, 신경과",
        address_dong: "신사동",
        address_sido_sigungu: "서울특별시 강남구",
        address_realated_dongs: "신사동, 압구정동",
        hospital_count: 9,
        big_hospital_count: 0,
        big_hospital_departments: "",
        sales_reflection: "46%",
        hospital_table: [
            {
                name: "오상신경외과의원",
                department: "신경외과",
                open_year: 2021,
                area: "97평",
                prof: "신경외과 1명",
            },
            {
                name: "연세그레이튼정형외과의원",
                department: "정형외과",
                open_year: 2020,
                area: "237평",
                prof: "정형외과 1명",
            },
            {
                name: "굿슬립신경과의원",
                department: "신경과",
                open_year: 2020,
                area: "21평",
                prof: "신경과 1명",
            },
            {
                name: "연세더바로신경외과정형외과의원",
                department: "정형외과, 신경외과",
                open_year: 2018,
                area: "400평",
                prof: "마취통증의학과 1명, 신경외과 1명, 영상의학과 1명, 정형외과 3명",
            },
            {
                name: "다솜마취통증의학과의원",
                department: "마취통증의학과",
                open_year: 2017,
                area: "11평",
                prof: "마취통증의학과 7명",
            },
            {
                name: "압구정강남바른정형외과의원",
                department: "정형외과",
                open_year: 2016,
                area: "72평",
                prof: "정형외과 1명",
            },
            {
                name: "설현욱신경과의원",
                department: "신경과",
                open_year: 2015,
                area: "20평",
                prof: "정신건강의학과 1명",
            },
            {
                name: "서울브레인신경과의원",
                department: "신경과",
                open_year: 2008,
                area: "18평",
                prof: "신경과 1명",
            },
            {
                name: "세연마취통증의학과의원",
                department: "마취통증의학과",
                open_year: 1996,
                area: "344평",
                prof: "마취통증의학과 5명",
            },
        ],
        hospital_top10_table: [],
        big_hospital_table: [],
        hospital_headers: [],
    },
    market_analysis: {
        market_size: "3억 2053만원",
        market_trend: "감소",
        hospital_count_past: "6개",
        hospital_count_now: "9개",
        hospital_count_trend: "증가",
        profit_per_area_size: "93만원",
        profit_per_area_trend: "감소",
        address_dong: "신사동",
        department: "정형외과",
        market_max_size: "5억 268만원",
        market_max_year: "2021년",
        market_max_month: "7월",
        market_min_size: "2억 3120만원",
        market_min_year: "2022년",
        market_min_month: "3월",
        "3y_trend_start_year": "2020년",
        "3y_trend_start_market_size": "3억 7263만원",
        "3y_trend_end_year": "2022년",
        "3y_trend_end_market_size": "2억 8236만원",
        "3y_trend_percent": "24%",
        "3y_trend_hospital_count_difference": "3개",
        profit_per_50p: "4650만원",
        "3y_trend_profit_per_area_start_year": "2020년",
        "3y_trend_profit_per_area_start_market_size": "108만원",
        "3y_trend_profit_per_area_end_year": "2022년",
        "3y_trend_profit_per_area_end_market_size": "82만원",
        "3y_trend_profit_per_area_percent": "24%",
        market_size_short_trend: [
            { date: "2021년 6월", value: 38885 },
            { date: "2021년 7월", value: 50268 },
            { date: "2021년 8월", value: 37490 },
            { date: "2021년 9월", value: 29060 },
            { date: "2021년 10월", value: 31950 },
            { date: "2021년 11월", value: 30486 },
            { date: "2021년 12월", value: 25317 },
            { date: "2022년 1월", value: 28860 },
            { date: "2022년 2월", value: 29685 },
            { date: "2022년 3월", value: 23120 },
            { date: "2022년 4월", value: 30889 },
            { date: "2022년 5월", value: 28626 },
        ],
        market_size_long_trend: [
            { date: "2020", value: 37263 },
            { date: "2021", value: 39348 },
            { date: "2022", value: 28236 },
        ],
        hospital_count_short_trend: [
            { date: "2021_2Q", count: 7 },
            { date: "2021_3Q", count: 7 },
            { date: "2021_4Q", count: 7 },
            { date: "2022_1Q", count: 9 },
        ],
        hospital_count_long_trend: [
            { date: 2020, count: 6 },
            { date: 2021, count: 7 },
            { date: 2022, count: 9 },
        ],
        profit_per_area_short_trend: [
            { date: "2021년 6월", value: 113 },
            { date: "2021년 7월", value: 146 },
            { date: "2021년 8월", value: 109 },
            { date: "2021년 9월", value: 84 },
            { date: "2021년 10월", value: 93 },
            { date: "2021년 11월", value: 89 },
            { date: "2021년 12월", value: 74 },
            { date: "2022년 1월", value: 84 },
            { date: "2022년 2월", value: 86 },
            { date: "2022년 3월", value: 67 },
            { date: "2022년 4월", value: 90 },
            { date: "2022년 5월", value: 83 },
        ],
        profit_per_area_long_trend: [
            { date: "2020", value: 108 },
            { date: "2021", value: 114 },
            { date: "2022", value: 82 },
        ],
    },
    competitive_analysis: {
        all_hospital_average_profit: "3억 7300만원",
        new_hospital_average_profit: "",
        competition_type: "독과점",
        competition_rate: 1.0,
        address_dong: "신사동",
        department: "정형외과",
        new_hospital_count: "",
        all_to_new_compare: "낮습니다",
        competition_table: [
            {
                profit: "3억 7300만원",
                acquisition_rate: "100%",
                rate_squared: 1.0,
            },
        ],
        competition_top10_table: [],
        competition_rest_info: [
            {
                rest_hospital_count: 0,
                rate_sum_top10: 100,
                rate_squared_sum_top10: 1.0,
                rate_sum_rest: 0,
                rate_squared_sum_rest: 0,
            },
        ],
        new_hospital_headers: [
            {
                open_date: "개업일자",
                hospital_name: "상호명",
                area: "면적(평)",
                prof: "전문의",
            },
        ],
        new_hospital_table: [],
        closed_hospital_headers: [
            {
                open_date: "개업일자",
                closed_date: "폐업일자",
                hospital_name: "상호명",
                area: "면적(평)",
            },
        ],
        closed_hospital_table: [],
    },
    user_analysis: {
        major_customer_age_sex: "60대 이상 남성",
        major_customer_profit: "4천~6천만원",
        major_customer_profit_ratio: "30%",
        average_profit_per_customer: "23만 8109원",
        address_dong: "신사동",
        department: "정형외과",
        customer_male_ratio: 57,
        customer_female_ratio: 43,
        sex_compare: "남성",
        male_max_count_age: "60대 이상",
        male_max_count_ratio: 30,
        female_max_count_age: "50대",
        female_max_count_ratio: 29,
        max_average_profit_per_customer: "33만 2022원",
        max_average_profit_per_customer_year: "2021년",
        max_average_profit_per_customer_month: "7월",
        min_average_profit_per_customer: "9만 2925원",
        min_average_profit_per_customer_year: "2022년",
        min_average_profit_per_customer_month: "3월",
        "3year_trend_early_size": "27만 5963원",
        "3year_trend_late_size": "20만 512원",
        "3year_trend_percent": "27%",
        "3year_trend_compare": "감소",
        male_age_ratio: {
            "20s": "6%",
            "30s": "15%",
            "40s": "23%",
            "50s": "27%",
            "60s_up": "30%",
        },
        female_age_ratio: {
            "20s": "6%",
            "30s": "24%",
            "40s": "17%",
            "50s": "29%",
            "60s_up": "22%",
        },
        customer_profit_ratio: {
            no_data: "1%",
            "2000_down": "0%",
            "2000_to_3000": "0%",
            "3000_to_4000": "11%",
            "4000_to_6000": "30%",
            "6000_to_8000": "18%",
            "8000_to_10000": "13%",
            "10000_up": "26%",
        },
        average_profit_per_customer_12m_chart: {
            profit_1m: 276762,
            profit_2m: 332022,
            profit_3m: 251439,
            profit_4m: 254912,
            profit_5m: 272845,
            profit_6m: 253204,
            profit_7m: 209230,
            profit_8m: 276170,
            profit_9m: 127130,
            profit_10m: 92925,
            profit_11m: 239078,
            profit_12m: 271591,
        },
        average_profit_per_customer_3y_chart: {
            year_1: 275963,
            year_2: 303617,
            year_3: 201379,
        },
    },
};

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
        // const mock = () => {
        //     return new Promise((resolve) => {
        //         setTimeout(() => {
        //             resolve(tempRespJSON);
        //         }, 2000);
        //     });
        // };
        const resp = await fetch(
            `http://localhost:8000/report/?department=${department}&location=${location}`
        );
        const respJSON = await resp.json();
        // const respJSON = await mock();

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
