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
            "department": "마취통증의학과",
            "department_group": "마취통증의학과, 재활의학과, 정형외과, 신경외과, 신경과",
            "address_dong": "아라동",
            "address_sido_sigungu": "인천광역시 서구",
            "address_realated_dongs": "당하동, 원당동",
            "hospital_count": "1개",
            "big_hospital_count": "0개",
            "big_hospital_departments": "",
            "sales_reflection": "46%",
            "hospital_table": [
                {
                    "name": "검단정형외과의원",
                    "department": "정형외과",
                    "open_year": "2022년",
                    "area": "165평",
                    "prof": "정형외과 1명"
                }
            ],
            "hospital_top10_table": [],
            "big_hospital_table": [],
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
            "market_size": "4571만원",
            "market_trend": "증가",
            "hospital_count_past": "0개",
            "hospital_count_now": "1개",
            "hospital_count_trend": "증가",
            "profit_per_area_size": "28만원",
            "profit_per_area_trend": "증가",
            "address_dong": "아라동",
            "department": "마취통증의학과",
            "market_max_size": "7217만원",
            "market_max_year": "2022년",
            "market_max_month": "5월",
            "market_min_size": "530만원",
            "market_min_year": "2022년",
            "market_min_month": "3월",
            "3y_trend_start_year": "2022년",
            "3y_trend_start_market_size": "4571만원",
            "3y_trend_end_year": "2022년",
            "3y_trend_end_market_size": "4571만원",
            "3y_trend_percent": "0%",
            "3y_trend_hospital_count_difference": "1개",
            "profit_per_50p": "1400만원",
            "3y_trend_profit_per_area_start_year": "2022년",
            "3y_trend_profit_per_area_start_market_size": "28만원",
            "3y_trend_profit_per_area_end_year": "2022년",
            "3y_trend_profit_per_area_end_market_size": "28만원",
            "3y_trend_profit_per_area_percent": "0%",
            "market_size_short_trend": [
                {
                    "class": "2022년 3월",
                    "value": 530
                },
                {
                    "class": "2022년 4월",
                    "value": 5964
                },
                {
                    "class": "2022년 5월",
                    "value": 7217
                }
            ],
            "market_size_long_trend": [
                {
                    "class": "2022년",
                    "value": 4571
                }
            ],
            "hospital_count_short_trend": [
                {
                    "class": "2021년 2분기",
                    "value": 0
                },
                {
                    "class": "2021년 3분기",
                    "value": 0
                },
                {
                    "class": "2021년 4분기",
                    "value": 0
                },
                {
                    "class": "2022년 1분기",
                    "value": 1
                }
            ],
            "hospital_count_long_trend": [
                {
                    "class": "2020년",
                    "value": 0
                },
                {
                    "class": "2021년",
                    "value": 0
                },
                {
                    "class": "2022년",
                    "value": 1
                }
            ],
            "profit_per_area_short_trend": [
                {
                    "class": "2022년 3월",
                    "value": 3
                },
                {
                    "class": "2022년 4월",
                    "value": 36
                },
                {
                    "class": "2022년 5월",
                    "value": 44
                }
            ],
            "profit_per_area_long_trend": [
                {
                    "class": "2022년",
                    "value": 28
                }
            ]
        },
        "competitive_analysis": {
            "all_hospital_average_profit": "4570만원",
            "new_hospital_average_profit": "4571만원",
            "competition_type": "독과점",
            "competition_rate": "1.0으로",
            "address_dong": "아라동",
            "department": "마취통증의학과",
            "new_hospital_count": "1개",
            "all_to_new_compare": "낮습니다",
            "hospital_profit_distribution_chart": [
                {
                    "class": "의원1",
                    "value": 4571
                }
            ],
            "competition_table": [
                {
                    "profit": "4571만원",
                    "acquisition_rate": "100%",
                    "rate_squared": 1
                }
            ],
            "competition_top10_table": [
                {
                    "profit": "4571만원",
                    "acquisition_rate": "100%",
                    "rate_squared": 1
                }
            ],
            "competition_rest_info": [
                {
                    "rest_hospital_count": 0,
                    "rate_sum_top10": 100,
                    "rate_squared_sum_top10": 1,
                    "rate_sum_rest": 0,
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
                    "open_date": "2022년 03월 15일",
                    "hospital_name": "검단정형외과의원",
                    "area": "165평",
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
            "closed_hospital_table": []
        },
        "user_analysis": {
            "major_customer_age_sex": "40대 남성",
            "major_customer_profit": "4천~6천만원",
            "major_customer_profit_ratio": "37%",
            "average_profit_per_customer": "4만 2310원",
            "address_dong": "아라동",
            "department": "마취통증의학과",
            "customer_male_ratio": "50%",
            "customer_female_ratio": "50%",
            "sex_compare": "여성",
            "male_max_count_age": "40대로",
            "male_max_count_ratio": "38%",
            "female_max_count_age": "40대로",
            "female_max_count_ratio": "35%",
            "max_average_profit_per_customer": "4만 4006원",
            "max_average_profit_per_customer_year": "2022년",
            "max_average_profit_per_customer_month": "5월",
            "min_average_profit_per_customer": "3만 9580원",
            "min_average_profit_per_customer_year": "2022년",
            "min_average_profit_per_customer_month": "3월",
            "3year_trend_early_size": "4만 2310원",
            "3year_trend_late_size": "4만 9472원",
            "3year_trend_percent": "0%",
            "3year_trend_compare": "증가",
            "sex_distribution_chart": [
                {
                    "class": "남성",
                    "value": 50
                },
                {
                    "class": "여성",
                    "value": 50
                }
            ],
            "male_age_distribution_chart": [
                {
                    "class": "20대",
                    "value": 4
                },
                {
                    "class": "30대",
                    "value": 25
                },
                {
                    "class": "40대",
                    "value": 38
                },
                {
                    "class": "50대",
                    "value": 20
                },
                {
                    "class": "60대 이상",
                    "value": 13
                }
            ],
            "female_age_distribution_chart": [
                {
                    "class": "20대",
                    "value": 3
                },
                {
                    "class": "30대",
                    "value": 27
                },
                {
                    "class": "40대",
                    "value": 35
                },
                {
                    "class": "50대",
                    "value": 23
                },
                {
                    "class": "60대 이상",
                    "value": 12
                }
            ],
            "customer_profit_distribution_chart": [
                {
                    "class": "정보 없음",
                    "value": 1
                },
                {
                    "class": "2천만원 미만",
                    "value": 3
                },
                {
                    "class": "2000만원~3000만원",
                    "value": 0
                },
                {
                    "class": "3000만원~4000만원",
                    "value": 7
                },
                {
                    "class": "4000만원~6000만원",
                    "value": 37
                },
                {
                    "class": "6000만원~8000만원",
                    "value": 29
                },
                {
                    "class": "8000만원~1억원",
                    "value": 16
                },
                {
                    "class": "1억원 이상",
                    "value": 8
                }
            ],
            "average_profit_per_customer_short_chart": [
                {
                    "class": "2022년 3월",
                    "value": 39580
                },
                {
                    "class": "2022년 4월",
                    "value": 43345
                },
                {
                    "class": "2022년 5월",
                    "value": 44006
                }
            ],
            "average_profit_per_customer_long_chart": [
                {
                    "class": "2022년",
                    "value": 42310
                }
            ]
        }
    }


    return (
        <>
        <HashRouter>
            {/* <BrowserRouter> */}
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
            {/* </BrowserRouter> */}
            </HashRouter>
        </>
    );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
