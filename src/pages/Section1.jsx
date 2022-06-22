// 개요 section

import Cover from "../layout/Cover";
import Dictionary from "../layout/Dictionary";
import HospitalList from "../layout/HospitalList";
import Intro from "../layout/Intro";
import React from "react";

const Section1 = React.forwardRef((props, target) => {
    const imagePath = "cover1.png";

    const sectionHeader = {
        sectionTitle: "개요",
        sectionList: ["의료기관 목록", "개원여기 분석 결과"],
    };
    console.log(props.input)

    return (
        <>
            <div>
                <Cover
                    ref={target}
                    fileName="Cover1.png"
                    sectionHeader={sectionHeader}
                />
                <div id="section-1">
                    <Intro input={props.input} />
                    <Dictionary input={props.input} />
                    {/* <HospitalList
                        listTitle="의료기관 목록"
                        list={props.input.hospital_table}
                        header={props.input.hospital_headers}
                    /> */}
                </div>

            </div>
        </>
    );
});
export default React.memo(Section1);
