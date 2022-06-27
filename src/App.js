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
            "department": "내과",
            "department_group": "가정의학과, 내과, 소아청소년과, 이비인후과",
            "address_dong": "중동",
            "address_sido_sigungu": "경기도 부천시",
            "address_realated_dongs": "중동, 상동",
            "hospital_count": "11개",
            "big_hospital_count": "1개",
            "big_hospital_departments": "요양병원 1개",
            "sales_reflection": "31%",
            "hospital_table": [
                {
                    "name": "부천중앙내과의원",
                    "department": "내과",
                    "open_year": "2011년",
                    "area": "38평",
                    "prof": "내과 1명"
                },
                {
                    "name": "이완복내과의원",
                    "department": "내과",
                    "open_year": "2009년",
                    "area": "74평",
                    "prof": "내과 1명"
                },
                {
                    "name": "성모권내과의원",
                    "department": "내과",
                    "open_year": "2009년",
                    "area": "35평",
                    "prof": "내과 1명"
                },
                {
                    "name": "모아가정의학과의원",
                    "department": "가정의학과",
                    "open_year": "2009년",
                    "area": "22평",
                    "prof": "가정의학과 1명"
                },
                {
                    "name": "강내과의원",
                    "department": "내과",
                    "open_year": "2001년",
                    "area": "31평",
                    "prof": "내과 1명"
                },
                {
                    "name": "정내과의원",
                    "department": "내과",
                    "open_year": "1999년",
                    "area": "74평",
                    "prof": "내과 1명"
                },
                {
                    "name": "박동건소아과의원",
                    "department": "소아청소년과",
                    "open_year": "1997년",
                    "area": "28평",
                    "prof": "소아청소년과 1명"
                },
                {
                    "name": "조경숙이비인후과의원",
                    "department": "이비인후과",
                    "open_year": "1997년",
                    "area": "52평",
                    "prof": "이비인후과 1명"
                },
                {
                    "name": "조진수내과의원",
                    "department": "내과",
                    "open_year": "1995년",
                    "area": "21평",
                    "prof": "내과 1명"
                },
                {
                    "name": "연세가정의학과의원",
                    "department": "가정의학과",
                    "open_year": "1993년",
                    "area": "27평",
                    "prof": "가정의학과 1명"
                },
                {
                    "name": "신위경소아청소년과의원",
                    "department": "소아청소년과",
                    "open_year": "1991년",
                    "area": "25평",
                    "prof": "소아청소년과 1명"
                }
            ],
            "hospital_top10_table": [
                {
                    "name": "부천중앙내과의원",
                    "department": "내과",
                    "open_year": "2011년",
                    "area": "38평",
                    "prof": "내과 1명"
                },
                {
                    "name": "이완복내과의원",
                    "department": "내과",
                    "open_year": "2009년",
                    "area": "74평",
                    "prof": "내과 1명"
                },
                {
                    "name": "성모권내과의원",
                    "department": "내과",
                    "open_year": "2009년",
                    "area": "35평",
                    "prof": "내과 1명"
                },
                {
                    "name": "모아가정의학과의원",
                    "department": "가정의학과",
                    "open_year": "2009년",
                    "area": "22평",
                    "prof": "가정의학과 1명"
                },
                {
                    "name": "강내과의원",
                    "department": "내과",
                    "open_year": "2001년",
                    "area": "31평",
                    "prof": "내과 1명"
                },
                {
                    "name": "정내과의원",
                    "department": "내과",
                    "open_year": "1999년",
                    "area": "74평",
                    "prof": "내과 1명"
                },
                {
                    "name": "박동건소아과의원",
                    "department": "소아청소년과",
                    "open_year": "1997년",
                    "area": "28평",
                    "prof": "소아청소년과 1명"
                },
                {
                    "name": "조경숙이비인후과의원",
                    "department": "이비인후과",
                    "open_year": "1997년",
                    "area": "52평",
                    "prof": "이비인후과 1명"
                },
                {
                    "name": "조진수내과의원",
                    "department": "내과",
                    "open_year": "1995년",
                    "area": "21평",
                    "prof": "내과 1명"
                },
                {
                    "name": "연세가정의학과의원",
                    "department": "가정의학과",
                    "open_year": "1993년",
                    "area": "27평",
                    "prof": "가정의학과 1명"
                }
            ],
            "big_hospital_table": [
                {
                    "name": "다온요양병원",
                    "department": "요양병원",
                    "open_year": "2018년",
                    "area": "1128평",
                    "prof": "가정의학과 1명, 산부인과 1명, 외과 1명"
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
            "market_size": "2억 17만원",
            "market_trend": "감소",
            "hospital_count_past": "11개",
            "hospital_count_now": "11개",
            "hospital_count_trend": "유지",
            "profit_per_area_size": "45만원",
            "profit_per_area_trend": "증가",
            "address_dong": "중동",
            "department": "내과",
            "market_max_size": "2억 3333만원",
            "market_max_year": "2021년",
            "market_max_month": "10월",
            "market_min_size": "1억 6723만원",
            "market_min_year": "2022년",
            "market_min_month": "2월",
            "3y_trend_start_year": "2020년",
            "3y_trend_start_market_size": "1억 9386만원",
            "3y_trend_end_year": "2022년",
            "3y_trend_end_market_size": "1억 9057만원",
            "3y_trend_percent": "2%",
            "3y_trend_hospital_count_difference": "0개",
            "profit_per_50p": "2250만원",
            "3y_trend_profit_per_area_start_year": "2020년",
            "3y_trend_profit_per_area_start_market_size": "43만원",
            "3y_trend_profit_per_area_end_year": "2022년",
            "3y_trend_profit_per_area_end_market_size": "43만원",
            "3y_trend_profit_per_area_percent": "0%",
            "market_size_short_trend": [
                {
                    "class": "2021년 6월",
                    "value": 21159
                },
                {
                    "class": "2021년 7월",
                    "value": 18923
                },
                {
                    "class": "2021년 8월",
                    "value": 19461
                },
                {
                    "class": "2021년 9월",
                    "value": 17792
                },
                {
                    "class": "2021년 10월",
                    "value": 23333
                },
                {
                    "class": "2021년 11월",
                    "value": 23220
                },
                {
                    "class": "2021년 12월",
                    "value": 21032
                },
                {
                    "class": "2022년 1월",
                    "value": 17711
                },
                {
                    "class": "2022년 2월",
                    "value": 16723
                },
                {
                    "class": "2022년 3월",
                    "value": 20405
                },
                {
                    "class": "2022년 4월",
                    "value": 21013
                },
                {
                    "class": "2022년 5월",
                    "value": 19430
                }
            ],
            "market_size_long_trend": [
                {
                    "class": "2020년",
                    "value": 19386
                },
                {
                    "class": "2021년",
                    "value": 19130
                },
                {
                    "class": "2022년",
                    "value": 19057
                }
            ],
            "hospital_count_short_trend": [
                {
                    "class": "2021년 2분기",
                    "value": 11
                },
                {
                    "class": "2021년 3분기",
                    "value": 11
                },
                {
                    "class": "2021년 4분기",
                    "value": 11
                },
                {
                    "class": "2022년 1분기",
                    "value": 11
                }
            ],
            "hospital_count_long_trend": [
                {
                    "class": "2020년",
                    "value": 11
                },
                {
                    "class": "2021년",
                    "value": 11
                },
                {
                    "class": "2022년",
                    "value": 11
                }
            ],
            "profit_per_area_short_trend": [
                {
                    "class": "2021년 6월",
                    "value": 48
                },
                {
                    "class": "2021년 7월",
                    "value": 43
                },
                {
                    "class": "2021년 8월",
                    "value": 42
                },
                {
                    "class": "2021년 9월",
                    "value": 39
                },
                {
                    "class": "2021년 10월",
                    "value": 54
                },
                {
                    "class": "2021년 11월",
                    "value": 51
                },
                {
                    "class": "2021년 12월",
                    "value": 48
                },
                {
                    "class": "2022년 1월",
                    "value": 40
                },
                {
                    "class": "2022년 2월",
                    "value": 39
                },
                {
                    "class": "2022년 3월",
                    "value": 46
                },
                {
                    "class": "2022년 4월",
                    "value": 46
                },
                {
                    "class": "2022년 5월",
                    "value": 43
                }
            ],
            "profit_per_area_long_trend": [
                {
                    "class": "2020년",
                    "value": 43
                },
                {
                    "class": "2021년",
                    "value": 43
                },
                {
                    "class": "2022년",
                    "value": 43
                }
            ]
        },
        "competitive_analysis": {
            "all_hospital_average_profit": "1719만원",
            "new_hospital_average_profit": "정보 없음",
            "competition_type": "균형적",
            "competition_rate": "0.18로",
            "address_dong": "중동",
            "department": "내과",
            "new_hospital_count": "0개",
            "all_to_new_compare": "낮습니다",
            "hospital_profit_distribution_chart": [
                {
                    "class": "의원1",
                    "value": 6257
                },
                {
                    "class": "의원2",
                    "value": 2285
                },
                {
                    "class": "의원3",
                    "value": 2091
                },
                {
                    "class": "의원4",
                    "value": 1965
                },
                {
                    "class": "의원5",
                    "value": 1323
                },
                {
                    "class": "의원6",
                    "value": 755
                },
                {
                    "class": "의원7",
                    "value": 726
                },
                {
                    "class": "의원8",
                    "value": 682
                },
                {
                    "class": "의원9",
                    "value": 596
                },
                {
                    "class": "의원10",
                    "value": 516
                }
            ],
            "competition_table": [
                {
                    "profit": "6257만원",
                    "acquisition_rate": "36%",
                    "rate_squared": 0.13
                },
                {
                    "profit": "2285만원",
                    "acquisition_rate": "13%",
                    "rate_squared": 0.02
                },
                {
                    "profit": "2091만원",
                    "acquisition_rate": "12%",
                    "rate_squared": 0.01
                },
                {
                    "profit": "1965만원",
                    "acquisition_rate": "11%",
                    "rate_squared": 0.01
                },
                {
                    "profit": "1323만원",
                    "acquisition_rate": "8%",
                    "rate_squared": 0.01
                },
                {
                    "profit": "755만원",
                    "acquisition_rate": "4%",
                    "rate_squared": 0
                },
                {
                    "profit": "726만원",
                    "acquisition_rate": "4%",
                    "rate_squared": 0
                },
                {
                    "profit": "682만원",
                    "acquisition_rate": "4%",
                    "rate_squared": 0
                },
                {
                    "profit": "596만원",
                    "acquisition_rate": "3%",
                    "rate_squared": 0
                },
                {
                    "profit": "516만원",
                    "acquisition_rate": "3%",
                    "rate_squared": 0
                }
            ],
            "competition_top10_table": [
                {
                    "profit": "6257만원",
                    "acquisition_rate": "36%",
                    "rate_squared": 0.13
                },
                {
                    "profit": "2285만원",
                    "acquisition_rate": "13%",
                    "rate_squared": 0.02
                },
                {
                    "profit": "2091만원",
                    "acquisition_rate": "12%",
                    "rate_squared": 0.01
                },
                {
                    "profit": "1965만원",
                    "acquisition_rate": "11%",
                    "rate_squared": 0.01
                },
                {
                    "profit": "1323만원",
                    "acquisition_rate": "8%",
                    "rate_squared": 0.01
                },
                {
                    "profit": "755만원",
                    "acquisition_rate": "4%",
                    "rate_squared": 0
                },
                {
                    "profit": "726만원",
                    "acquisition_rate": "4%",
                    "rate_squared": 0
                },
                {
                    "profit": "682만원",
                    "acquisition_rate": "4%",
                    "rate_squared": 0
                },
                {
                    "profit": "596만원",
                    "acquisition_rate": "3%",
                    "rate_squared": 0
                },
                {
                    "profit": "516만원",
                    "acquisition_rate": "3%",
                    "rate_squared": 0
                }
            ],
            "competition_rest_info": [
                {
                    "rest_hospital_count": 0,
                    "rate_sum_top10": 98,
                    "rate_squared_sum_top10": 0.18,
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
            "new_hospital_table": [],
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
            "major_customer_age_sex": "50대 여성",
            "major_customer_profit": "4천~6천만원",
            "major_customer_profit_ratio": "44%",
            "average_profit_per_customer": "2만 1361원",
            "address_dong": "중동",
            "department": "내과",
            "customer_male_ratio": "38%",
            "customer_female_ratio": "62%",
            "sex_compare": "여성",
            "male_max_count_age": "60대 이상으로",
            "male_max_count_ratio": "35%",
            "female_max_count_age": "50대로",
            "female_max_count_ratio": "29%",
            "max_average_profit_per_customer": "2만 5059원",
            "max_average_profit_per_customer_year": "2021년",
            "max_average_profit_per_customer_month": "8월",
            "min_average_profit_per_customer": "1만 4596원",
            "min_average_profit_per_customer_year": "2022년",
            "min_average_profit_per_customer_month": "3월",
            "3year_trend_early_size": "2만 2376원",
            "3year_trend_late_size": "1만 256원",
            "3year_trend_percent": "16%",
            "3year_trend_compare": "감소",
            "sex_distribution_chart": [
                {
                    "class": "남성",
                    "value": 38
                },
                {
                    "class": "여성",
                    "value": 62
                }
            ],
            "male_age_distribution_chart": [
                {
                    "class": "20대",
                    "value": 3
                },
                {
                    "class": "30대",
                    "value": 12
                },
                {
                    "class": "40대",
                    "value": 21
                },
                {
                    "class": "50대",
                    "value": 28
                },
                {
                    "class": "60대 이상",
                    "value": 35
                }
            ],
            "female_age_distribution_chart": [
                {
                    "class": "20대",
                    "value": 5
                },
                {
                    "class": "30대",
                    "value": 16
                },
                {
                    "class": "40대",
                    "value": 21
                },
                {
                    "class": "50대",
                    "value": 29
                },
                {
                    "class": "60대 이상",
                    "value": 27
                }
            ],
            "customer_profit_distribution_chart": [
                {
                    "class": "정보 없음",
                    "value": 2
                },
                {
                    "class": "2천만원 미만",
                    "value": 2
                },
                {
                    "class": "2000만원~3000만원",
                    "value": 0
                },
                {
                    "class": "3000만원~4000만원",
                    "value": 17
                },
                {
                    "class": "4000만원~6000만원",
                    "value": 44
                },
                {
                    "class": "6000만원~8000만원",
                    "value": 20
                },
                {
                    "class": "8000만원~1억원",
                    "value": 9
                },
                {
                    "class": "1억원 이상",
                    "value": 4
                }
            ],
            "average_profit_per_customer_short_chart": [
                {
                    "class": "2021년 6월",
                    "value": 24756
                },
                {
                    "class": "2021년 7월",
                    "value": 23948
                },
                {
                    "class": "2021년 8월",
                    "value": 25059
                },
                {
                    "class": "2021년 9월",
                    "value": 20810
                },
                {
                    "class": "2021년 10월",
                    "value": 24247
                },
                {
                    "class": "2021년 11월",
                    "value": 21252
                },
                {
                    "class": "2021년 12월",
                    "value": 22589
                },
                {
                    "class": "2022년 1월",
                    "value": 21236
                },
                {
                    "class": "2022년 2월",
                    "value": 17874
                },
                {
                    "class": "2022년 3월",
                    "value": 14596
                },
                {
                    "class": "2022년 4월",
                    "value": 18168
                },
                {
                    "class": "2022년 5월",
                    "value": 21800
                }
            ],
            "average_profit_per_customer_long_chart": [
                {
                    "class": "2020년",
                    "value": 22376
                },
                {
                    "class": "2021년",
                    "value": 22418
                },
                {
                    "class": "2022년",
                    "value": 18735
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
