import BarChart from "./../components/BarChart";
import Card from "./../components/Card";
import Cover from "../layout/Cover";
import KeyNumber2x3 from "./../layout/KeyNumber2x3";
import LineChart from "../components/LineChart";
// 시장분석 section
import React from "react";
import SectionTwoBody from "../layout/SectionTwoBody";

const Section2 = (props) => {
    const sectionHeader = {
        sectionTitle: "시장 분석",
        sectionList: [
            "시장규모 단기 추세 (12개월)",
            "시장규모 장기 추세 (3년)",
            "의원 1평당 매출액 단기 추세 (12개월)",
            "의원 1평당 매출액 장기 추세 (3년)",
        ],
    };

    return (
        <>
            <div>
                <Cover fileName="Cover2.png" sectionHeader={sectionHeader} />
                <div id="section-2">
                    <KeyNumber2x3 input={props.input} />
                    <SectionTwoBody input={props.input} />
                    <Card>
                        <LineChart
                            chartName="시장규모 단기 추세 (12개월)"
                            chartUnit="만원"
                            input={props.input['12m_trend_chart']}
                        />
                    </Card>
                    <Card>
                        <BarChart
                            chartName="시장규모 장기 추세 (3년)"
                            chartUnit="만원"
                            input={props.input['3y_trend_chart']}
                        />
                    </Card>
                    <Card>
                        <LineChart
                            chartName="의원 개수 단기 추세 (12개월)"
                            chartUnit="개"
                            input={props.input['hospital_count_chart']}
                        />
                    </Card>
                    <Card>
                        <BarChart
                            chartName="의원 개수 장기 추세 (3년)"
                            chartUnit="개"
                            input={props.input['hospital_count_chart']}
                        />
                    </Card>
                    <Card>
                        <LineChart
                            chartName="의원 1평당 매출액 단기 추세 (12개월)"
                            chartUnit="만원"
                            input={props.input['12m_trend_chart']}
                        />
                    </Card>
                    <Card>
                        <BarChart
                            chartName="의원 1평당 매출액 장기 추세 (3년)"
                            chartUnit="만원"
                            input={props.input['3y_trend_chart']}
                        />
                    </Card>
                </div>
            </div>
        </>
    );
};

export default React.memo(Section2);
