import BarChart from "./../components/BarChart";
import Card from "./../components/Card";
import Cover from "../layout/Cover";
import DonutChart from "../components/DonutChart";
import KeyNumber3x1Cust from "./../layout/KeyNumber3x1Cust";
import KeyNumberBoxLean from "../components/KeyNumberBoxLean";
import LineChart from "./../components/LineChart";
// 고객분석 section
import React from "react";
import SectionFourBody from "../layout/SectionFourBody";

const Section4 = (props) => {
    const sectionHeader = {
        sectionTitle: "고객 분석",
        sectionList: [
            "성연령대별 매출 분포",
            "소득수준별 매출 분포",
            "객단가 단기 추세 (12개월)",
            "객단가 장기 추세 (3년)",
        ],
    };
    console.log(props.input)
    return (
        <>
            <div>
                <Cover fileName="Cover4.png" sectionHeader={sectionHeader} />
            </div>
            <div id="section-4">
                <KeyNumber3x1Cust input={props.input} />
                <SectionFourBody input={props.input} />
                <Card>
                    <DonutChart
                        title="성연령대별 매출 분포"
                        header="성별분포"
                        input={props.input.male_age_ratio}
                    />
                    <DonutChart header="남성 연령 분포" input={props.input.male_age_ratio} />
                    <DonutChart header="여성 연령 분포" input={props.input.female_age_ratio} />
                </Card>
                <Card>
                    <DonutChart
                        title="소득수준별 매출 분포"
                        input={props.input.customer_profit_ratio}
                    />
                </Card>
                {/* <Card>
                    <LineChart
                        chartName="객단가 단기 추세 (12개월)"
                        chartUnit="원"
                        input={props.input.average_profit_per_customer_12m_chart}
                    />
                </Card>
                <Card>
                    <BarChart
                        chartName="객단가 장기 추세 (3년)"
                        chartUnit="원"
                        input={props.input.average_profit_per_customer_3y_chart}
                    />
                </Card> */}
            </div>
        </>
    );
};

export default React.memo(Section4);
