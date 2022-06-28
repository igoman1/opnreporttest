import "./App.css";

import { BrowserRouter, HashRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Home from "./pages/Home";
import ReactDOM from "react-dom";
import Result from "./pages/Result";

function App() {
    // const [resultData, setResultData] = useState({});

    // const inputHandlerApp = (inputDataApp) => {
    //     setResultData(inputDataApp);
    // };

    const resultData=
    {
        "intro": {
            "department": "정형외과",
            "department_group": "마취통증의학과, 재활의학과, 정형외과, 신경외과, 신경과",
            "address_dong": "역삼1동",
            "address_sido_sigungu": "서울특별시 강남구",
            "address_realated_dongs": "역삼동",
            "hospital_count": "26개",
            "big_hospital_count": "6개",
            "big_hospital_departments": "종합병원 1개, 병원 3개, 치과병원 2개",
            "sales_reflection": "46%",
            "hospital_table": [
                {
                    "name": "친한의사의원",
                    "department": "신경외과",
                    "open_year": "2022년",
                    "area": "60평",
                    "prof": "신경외과 1명"
                },
                {
                    "name": "밸런스본의원",
                    "department": "정형외과",
                    "open_year": "2021년",
                    "area": "87평",
                    "prof": "-"
                },
                {
                    "name": "더케어마취통증의학과의원",
                    "department": "마취통증의학과",
                    "open_year": "2021년",
                    "area": "75평",
                    "prof": "마취통증의학과 1명"
                },
                {
                    "name": "역삼생생본의원·한의원",
                    "department": "정형외과",
                    "open_year": "2021년",
                    "area": "164평",
                    "prof": "-"
                },
                {
                    "name": "마디본의원",
                    "department": "정형외과",
                    "open_year": "2020년",
                    "area": "111평",
                    "prof": "외과 1명"
                },
                {
                    "name": "제이마취통증의학과의원",
                    "department": "마취통증의학과",
                    "open_year": "2020년",
                    "area": "100평",
                    "prof": "마취통증의학과 1명"
                },
                {
                    "name": "서울정석정형외과의원",
                    "department": "정형외과",
                    "open_year": "2020년",
                    "area": "110평",
                    "prof": "정형외과 1명"
                },
                {
                    "name": "연세다엘마취통증의학과내과의원",
                    "department": "내과, 마취통증의학과",
                    "open_year": "2020년",
                    "area": "124평",
                    "prof": "내과 1명, 마취통증의학과 1명"
                },
                {
                    "name": "하와유재활의학과의원",
                    "department": "재활의학과",
                    "open_year": "2018년",
                    "area": "243평",
                    "prof": "재활의학과 2명"
                },
                {
                    "name": "강남척앤척의원",
                    "department": "정형외과",
                    "open_year": "2018년",
                    "area": "53평",
                    "prof": "가정의학과 1명"
                },
                {
                    "name": "화이팅마취통증의학과의원",
                    "department": "마취통증의학과",
                    "open_year": "2018년",
                    "area": "214평",
                    "prof": "마취통증의학과 2명"
                },
                {
                    "name": "더강추정형외과의원",
                    "department": "정형외과",
                    "open_year": "2018년",
                    "area": "122평",
                    "prof": "정형외과 1명"
                },
                {
                    "name": "자연주의의원",
                    "department": "마취통증의학과",
                    "open_year": "2017년",
                    "area": "51평",
                    "prof": "-"
                },
                {
                    "name": "더건강의원",
                    "department": "산부인과, 정형외과, 피부과",
                    "open_year": "2016년",
                    "area": "91평",
                    "prof": "-"
                },
                {
                    "name": "대들보의원",
                    "department": "정형외과",
                    "open_year": "2015년",
                    "area": "21평",
                    "prof": "-"
                },
                {
                    "name": "강남바른정형외과의원",
                    "department": "정형외과",
                    "open_year": "2015년",
                    "area": "60평",
                    "prof": "정형외과 1명"
                },
                {
                    "name": "유상호정형외과의원",
                    "department": "정형외과",
                    "open_year": "2014년",
                    "area": "115평",
                    "prof": "정형외과 1명"
                },
                {
                    "name": "한가람신경외과의원",
                    "department": "신경외과",
                    "open_year": "2014년",
                    "area": "281평",
                    "prof": "신경외과 1명"
                },
                {
                    "name": "문동언마취통증의학과의원",
                    "department": "마취통증의학과",
                    "open_year": "2014년",
                    "area": "121평",
                    "prof": "마취통증의학과 2명"
                },
                {
                    "name": "연세오케이마취통증의학과의원",
                    "department": "마취통증의학과",
                    "open_year": "2012년",
                    "area": "172평",
                    "prof": "마취통증의학과 2명"
                },
                {
                    "name": "스마트정형외과의원",
                    "department": "정형외과",
                    "open_year": "2012년",
                    "area": "63평",
                    "prof": "정형외과 1명"
                },
                {
                    "name": "더맑은신경정신과의원",
                    "department": "정신건강의학과, 신경과",
                    "open_year": "2010년",
                    "area": "31평",
                    "prof": "신경과 1명, 정신건강의학과 1명"
                },
                {
                    "name": "엠제이의원",
                    "department": "피부과, 내과, 정형외과",
                    "open_year": "2009년",
                    "area": "87평",
                    "prof": "-"
                },
                {
                    "name": "강남재활의학과의원",
                    "department": "재활의학과",
                    "open_year": "1995년",
                    "area": "38평",
                    "prof": "재활의학과 1명"
                },
                {
                    "name": "신사마취통증의학과의원",
                    "department": "마취통증의학과",
                    "open_year": "1993년",
                    "area": "76평",
                    "prof": "마취통증의학과 2명"
                },
                {
                    "name": "연정신경정신과의원",
                    "department": "정신건강의학과, 신경과",
                    "open_year": "1993년",
                    "area": "14평",
                    "prof": "정신건강의학과 1명"
                }
            ],
            "hospital_top10_table": [
                {
                    "name": "친한의사의원",
                    "department": "신경외과",
                    "open_year": "2022년",
                    "area": "60평",
                    "prof": "신경외과 1명"
                },
                {
                    "name": "밸런스본의원",
                    "department": "정형외과",
                    "open_year": "2021년",
                    "area": "87평",
                    "prof": "-"
                },
                {
                    "name": "더케어마취통증의학과의원",
                    "department": "마취통증의학과",
                    "open_year": "2021년",
                    "area": "75평",
                    "prof": "마취통증의학과 1명"
                },
                {
                    "name": "역삼생생본의원·한의원",
                    "department": "정형외과",
                    "open_year": "2021년",
                    "area": "164평",
                    "prof": "-"
                },
                {
                    "name": "마디본의원",
                    "department": "정형외과",
                    "open_year": "2020년",
                    "area": "111평",
                    "prof": "외과 1명"
                },
                {
                    "name": "제이마취통증의학과의원",
                    "department": "마취통증의학과",
                    "open_year": "2020년",
                    "area": "100평",
                    "prof": "마취통증의학과 1명"
                },
                {
                    "name": "서울정석정형외과의원",
                    "department": "정형외과",
                    "open_year": "2020년",
                    "area": "110평",
                    "prof": "정형외과 1명"
                },
                {
                    "name": "연세다엘마취통증의학과내과의원",
                    "department": "내과, 마취통증의학과",
                    "open_year": "2020년",
                    "area": "124평",
                    "prof": "내과 1명, 마취통증의학과 1명"
                },
                {
                    "name": "하와유재활의학과의원",
                    "department": "재활의학과",
                    "open_year": "2018년",
                    "area": "243평",
                    "prof": "재활의학과 2명"
                },
                {
                    "name": "강남척앤척의원",
                    "department": "정형외과",
                    "open_year": "2018년",
                    "area": "53평",
                    "prof": "가정의학과 1명"
                }
            ],
            "big_hospital_table": [
                {
                    "name": "서울페이스21치과병원",
                    "department": "치과병원",
                    "open_year": "2021년",
                    "area": "152평",
                    "prof": "구강악안면외과 1명, 성형외과 1명"
                },
                {
                    "name": "강남초이스정형외과병원",
                    "department": "병원",
                    "open_year": "2015년",
                    "area": "422평",
                    "prof": "마취통증의학과 1명, 신경외과 2명, 재활의학과 1명, 정형외과 2명"
                },
                {
                    "name": "라이브치과병원",
                    "department": "치과병원",
                    "open_year": "2015년",
                    "area": "225평",
                    "prof": "치과교정과 1명, 치과보철과 1명"
                },
                {
                    "name": "선한목자병원",
                    "department": "병원",
                    "open_year": "2009년",
                    "area": "441평",
                    "prof": "내과 1명, 영상의학과 1명, 정형외과 2명"
                },
                {
                    "name": "케이에스병원",
                    "department": "병원",
                    "open_year": "2003년",
                    "area": "725평",
                    "prof": "내과 1명, 마취통증의학과 1명, 신경외과 2명, 영상의학과 1명, 정형외과 5명"
                },
                {
                    "name": "차의과학대학교 강남차병원",
                    "department": "종합병원",
                    "open_year": "1990년",
                    "area": "8902평",
                    "prof": "구강악안면외과 1명, 내과 10명, 마취통증의학과 10명, 병리과 5명, 비뇨의학과 4명, 산부인과 41명, 성형외과 1명, 소아청소년과 11명, 영상의학과 4명, 외과 5명, 정신건강의학과 1명, 진단검사의학과 2명, 통합치의학과 1명"
                }
            ],
            "hospital_headers": [
                {
                    "name": "사업장명",
                    "department": "진료과",
                    "open_year": "개원년도",
                    "area": "면적",
                    "prof": "전문의"
                }
            ]
        },
        "market_analysis": {
            "market_size": "19억 982만원",
            "market_trend": "증가",
            "hospital_count_past": "23개",
            "hospital_count_now": "26개",
            "hospital_count_trend": "증가",
            "profit_per_area_size": "92만원",
            "profit_per_area_trend": "증가",
            "address_dong": "역삼1동",
            "department": "정형외과",
            "market_max_size": "20억 9016만원",
            "market_max_year": "2021년",
            "market_max_month": "11월",
            "market_min_size": "15억 8943만원",
            "market_min_year": "2021년",
            "market_min_month": "9월",
            "3y_trend_start_year": "2020년",
            "3y_trend_start_market_size": "15억 1585만원",
            "3y_trend_end_year": "2022년",
            "3y_trend_end_market_size": "19억 1340만원",
            "3y_trend_percent": "26%",
            "3y_trend_hospital_count_difference": "3개",
            "profit_per_50p": "4600만원",
            "3y_trend_profit_per_area_start_year": "2020년",
            "3y_trend_profit_per_area_start_market_size": "80만원",
            "3y_trend_profit_per_area_end_year": "2022년",
            "3y_trend_profit_per_area_end_market_size": "89만원",
            "3y_trend_profit_per_area_percent": "11%",
            "market_size_short_trend": [
                {
                    "class": "2021년 6월",
                    "value": 189549
                },
                {
                    "class": "2021년 7월",
                    "value": 199514
                },
                {
                    "class": "2021년 8월",
                    "value": 189671
                },
                {
                    "class": "2021년 9월",
                    "value": 158943
                },
                {
                    "class": "2021년 10월",
                    "value": 187410
                },
                {
                    "class": "2021년 11월",
                    "value": 209016
                },
                {
                    "class": "2021년 12월",
                    "value": 200978
                },
                {
                    "class": "2022년 1월",
                    "value": 197813
                },
                {
                    "class": "2022년 2월",
                    "value": 185237
                },
                {
                    "class": "2022년 3월",
                    "value": 187294
                },
                {
                    "class": "2022년 4월",
                    "value": 194762
                },
                {
                    "class": "2022년 5월",
                    "value": 191596
                }
            ],
            "market_size_long_trend": [
                {
                    "class": "2020년",
                    "value": 151585
                },
                {
                    "class": "2021년",
                    "value": 170085
                },
                {
                    "class": "2022년",
                    "value": 191340
                }
            ],
            "hospital_count_short_trend": [
                {
                    "class": "2021년 2분기",
                    "value": 20
                },
                {
                    "class": "2021년 3분기",
                    "value": 24
                },
                {
                    "class": "2021년 4분기",
                    "value": 25
                },
                {
                    "class": "2022년 1분기",
                    "value": 26
                }
            ],
            "hospital_count_long_trend": [
                {
                    "class": "2020년",
                    "value": 23
                },
                {
                    "class": "2021년",
                    "value": 25
                },
                {
                    "class": "2022년",
                    "value": 26
                }
            ],
            "profit_per_area_short_trend": [
                {
                    "class": "2021년 6월",
                    "value": 98
                },
                {
                    "class": "2021년 7월",
                    "value": 102
                },
                {
                    "class": "2021년 8월",
                    "value": 94
                },
                {
                    "class": "2021년 9월",
                    "value": 78
                },
                {
                    "class": "2021년 10월",
                    "value": 90
                },
                {
                    "class": "2021년 11월",
                    "value": 101
                },
                {
                    "class": "2021년 12월",
                    "value": 94
                },
                {
                    "class": "2022년 1월",
                    "value": 91
                },
                {
                    "class": "2022년 2월",
                    "value": 87
                },
                {
                    "class": "2022년 3월",
                    "value": 89
                },
                {
                    "class": "2022년 4월",
                    "value": 89
                },
                {
                    "class": "2022년 5월",
                    "value": 90
                }
            ],
            "profit_per_area_long_trend": [
                {
                    "class": "2020년",
                    "value": 80
                },
                {
                    "class": "2021년",
                    "value": 85
                },
                {
                    "class": "2022년",
                    "value": 89
                }
            ]
        },
        "competitive_analysis": {
            "all_hospital_average_profit": "9367만원",
            "new_hospital_average_profit": "7643만원",
            "competition_type": "치열함",
            "competition_rate": "0.06으로",
            "address_dong": "역삼1동",
            "department": "정형외과",
            "new_hospital_count": "4개",
            "all_to_new_compare": "낮습니다",
            "hospital_profit_distribution_chart": [
                {
                    "class": "의원1",
                    "value": 26256
                },
                {
                    "class": "의원2",
                    "value": 20164
                },
                {
                    "class": "의원3",
                    "value": 19216
                },
                {
                    "class": "의원4",
                    "value": 17424
                },
                {
                    "class": "의원5",
                    "value": 15252
                },
                {
                    "class": "의원6",
                    "value": 13861
                },
                {
                    "class": "의원7",
                    "value": 11248
                },
                {
                    "class": "의원8",
                    "value": 11167
                },
                {
                    "class": "의원9",
                    "value": 8841
                },
                {
                    "class": "의원10",
                    "value": 6339
                }
            ],
            "competition_table": [
                {
                    "profit": "2억 6256만원",
                    "acquisition_rate": "14%",
                    "rate_squared": 0.02
                },
                {
                    "profit": "2억 164만원",
                    "acquisition_rate": "11%",
                    "rate_squared": 0.01
                },
                {
                    "profit": "1억 9216만원",
                    "acquisition_rate": "10%",
                    "rate_squared": 0.01
                },
                {
                    "profit": "1억 7424만원",
                    "acquisition_rate": "9%",
                    "rate_squared": 0.01
                },
                {
                    "profit": "1억 5252만원",
                    "acquisition_rate": "8%",
                    "rate_squared": 0.01
                },
                {
                    "profit": "1억 3861만원",
                    "acquisition_rate": "7%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 1248만원",
                    "acquisition_rate": "6%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 1167만원",
                    "acquisition_rate": "6%",
                    "rate_squared": 0
                },
                {
                    "profit": "8841만원",
                    "acquisition_rate": "5%",
                    "rate_squared": 0
                },
                {
                    "profit": "6339만원",
                    "acquisition_rate": "3%",
                    "rate_squared": 0
                },
                {
                    "profit": "5852만원",
                    "acquisition_rate": "3%",
                    "rate_squared": 0
                },
                {
                    "profit": "5847만원",
                    "acquisition_rate": "3%",
                    "rate_squared": 0
                },
                {
                    "profit": "5815만원",
                    "acquisition_rate": "3%",
                    "rate_squared": 0
                },
                {
                    "profit": "5587만원",
                    "acquisition_rate": "3%",
                    "rate_squared": 0
                },
                {
                    "profit": "5020만원",
                    "acquisition_rate": "3%",
                    "rate_squared": 0
                },
                {
                    "profit": "4712만원",
                    "acquisition_rate": "3%",
                    "rate_squared": 0
                },
                {
                    "profit": "2236만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "1041만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "985만원",
                    "acquisition_rate": "1%",
                    "rate_squared": 0
                },
                {
                    "profit": "489만원",
                    "acquisition_rate": "0%",
                    "rate_squared": 0
                }
            ],
            "competition_top10_table": [
                {
                    "profit": "2억 6256만원",
                    "acquisition_rate": "14%",
                    "rate_squared": 0.02
                },
                {
                    "profit": "2억 164만원",
                    "acquisition_rate": "11%",
                    "rate_squared": 0.01
                },
                {
                    "profit": "1억 9216만원",
                    "acquisition_rate": "10%",
                    "rate_squared": 0.01
                },
                {
                    "profit": "1억 7424만원",
                    "acquisition_rate": "9%",
                    "rate_squared": 0.01
                },
                {
                    "profit": "1억 5252만원",
                    "acquisition_rate": "8%",
                    "rate_squared": 0.01
                },
                {
                    "profit": "1억 3861만원",
                    "acquisition_rate": "7%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 1248만원",
                    "acquisition_rate": "6%",
                    "rate_squared": 0
                },
                {
                    "profit": "1억 1167만원",
                    "acquisition_rate": "6%",
                    "rate_squared": 0
                },
                {
                    "profit": "8841만원",
                    "acquisition_rate": "5%",
                    "rate_squared": 0
                },
                {
                    "profit": "6339만원",
                    "acquisition_rate": "3%",
                    "rate_squared": 0
                }
            ],
            "competition_rest_info": [
                {
                    "rest_hospital_count": 10,
                    "rate_sum_top10": 79,
                    "rate_squared_sum_top10": 0.06,
                    "rate_sum_rest": 21,
                    "rate_squared_sum_rest": 0
                }
            ],
            "new_hospital_headers": [
                {
                    "open_date": "개업일자",
                    "hospital_name": "상호명",
                    "area": "면적(평)",
                    "prof": "전문의"
                }
            ],
            "new_hospital_table": [
                {
                    "open_date": "2021년 10월 08일",
                    "hospital_name": "강남바른정형외과의원",
                    "area": "60평",
                    "prof": "정형외과 1명"
                },
                {
                    "open_date": "2021년 09월 02일",
                    "hospital_name": "제이마취통증의학과의원",
                    "area": "100평",
                    "prof": "마취통증의학과 1명"
                },
                {
                    "open_date": "2021년 08월 23일",
                    "hospital_name": "더케어마취통증의학과의원",
                    "area": "75평",
                    "prof": "마취통증의학과 1명"
                },
                {
                    "open_date": "2020년 11월 03일",
                    "hospital_name": "서울정석정형외과의원",
                    "area": "111평",
                    "prof": "정형외과 1명"
                }
            ],
            "closed_hospital_headers": [
                {
                    "open_date": "개업일자",
                    "closed_date": "폐업일자",
                    "hospital_name": "상호명",
                    "area": "면적(평)"
                }
            ],
            "closed_hospital_table": [
                {
                    "open_date": "2020년 05월 06일",
                    "closed_date": "2021년 05월 28일",
                    "hospital_name": "강남마디박사신경외과의원",
                    "area": "113평"
                },
                {
                    "open_date": "2018년 12월 28일",
                    "closed_date": "2021년 05월 03일",
                    "hospital_name": "리셋재활의학과의원",
                    "area": "109평"
                },
                {
                    "open_date": "2006년 05월 16일",
                    "closed_date": "2021년 04월 30일",
                    "hospital_name": "제이에스미의원",
                    "area": "61평"
                }
            ]
        },
        "user_analysis": {
            "major_customer_age_sex": "30대 여성",
            "major_customer_profit": "4천~6천만원",
            "major_customer_profit_ratio": "33%",
            "average_profit_per_customer": "12만 5894원",
            "address_dong": "역삼1동",
            "department": "정형외과",
            "customer_male_ratio": "48%",
            "customer_female_ratio": "52%",
            "sex_compare": "여성",
            "male_max_count_age": "30대로",
            "male_max_count_ratio": "31%",
            "female_max_count_age": "30대로",
            "female_max_count_ratio": "29%",
            "max_average_profit_per_customer": "13만 8443원",
            "max_average_profit_per_customer_year": "2022년",
            "max_average_profit_per_customer_month": "2월",
            "min_average_profit_per_customer": "11만 1822원",
            "min_average_profit_per_customer_year": "2022년",
            "min_average_profit_per_customer_month": "5월",
            "3year_trend_early_size": "12만 9711원",
            "3year_trend_late_size": "12만 9984원",
            "3year_trend_percent": "2%",
            "3year_trend_compare": "감소",
            "sex_distribution_chart": [
                {
                    "class": "남성",
                    "value": 48
                },
                {
                    "class": "여성",
                    "value": 52
                }
            ],
            "male_age_distribution_chart": [
                {
                    "class": "20대",
                    "value": 11
                },
                {
                    "class": "30대",
                    "value": 31
                },
                {
                    "class": "40대",
                    "value": 29
                },
                {
                    "class": "50대",
                    "value": 20
                },
                {
                    "class": "60대 이상",
                    "value": 9
                }
            ],
            "female_age_distribution_chart": [
                {
                    "class": "20대",
                    "value": 15
                },
                {
                    "class": "30대",
                    "value": 29
                },
                {
                    "class": "40대",
                    "value": 20
                },
                {
                    "class": "50대",
                    "value": 23
                },
                {
                    "class": "60대 이상",
                    "value": 13
                }
            ],
            "customer_profit_distribution_chart": [
                {
                    "class": "정보 없음",
                    "value": 1
                },
                {
                    "class": "2천만원 미만",
                    "value": 1
                },
                {
                    "class": "2000만원~3000만원",
                    "value": 0
                },
                {
                    "class": "3000만원~4000만원",
                    "value": 12
                },
                {
                    "class": "4000만원~6000만원",
                    "value": 33
                },
                {
                    "class": "6000만원~8000만원",
                    "value": 19
                },
                {
                    "class": "8000만원~1억원",
                    "value": 15
                },
                {
                    "class": "1억원 이상",
                    "value": 20
                }
            ],
            "average_profit_per_customer_short_chart": [
                {
                    "class": "2021년 6월",
                    "value": 116912
                },
                {
                    "class": "2021년 7월",
                    "value": 124068
                },
                {
                    "class": "2021년 8월",
                    "value": 129300
                },
                {
                    "class": "2021년 9월",
                    "value": 115326
                },
                {
                    "class": "2021년 10월",
                    "value": 127386
                },
                {
                    "class": "2021년 11월",
                    "value": 132222
                },
                {
                    "class": "2021년 12월",
                    "value": 131876
                },
                {
                    "class": "2022년 1월",
                    "value": 130441
                },
                {
                    "class": "2022년 2월",
                    "value": 138443
                },
                {
                    "class": "2022년 3월",
                    "value": 129338
                },
                {
                    "class": "2022년 4월",
                    "value": 123596
                },
                {
                    "class": "2022년 5월",
                    "value": 111822
                }
            ],
            "average_profit_per_customer_long_chart": [
                {
                    "class": "2020년",
                    "value": 129711
                },
                {
                    "class": "2021년",
                    "value": 122664
                },
                {
                    "class": "2022년",
                    "value": 126728
                }
            ]
        }
    }


    return (
        <>
        {/* <HashRouter> */}
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                {/* <Navigation /> */}
                <Routes>
                    {/* <Route
                        path="/"
                        element={<Home inputHandlerApp={inputHandlerApp} />}
                    /> */}
                    <Route
                        path="/"
                        element={<Result data={resultData} />}
                    />
                </Routes>
            </BrowserRouter>
            {/* </HashRouter> */}
        </>
    );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
