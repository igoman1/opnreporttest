import "./comp-box.css";

import CompBox from "./CompBox";
import CompBoxWhite from "./CompBoxWhite";
import React from "react";

const CompBoxCombinded = (props) => {
    const data = props.input.competition_table;
    return (
        <div className="comp-box-combinded">
            <CompBox name="매출액" num={data.profit} />
            <CompBox name="점유율" num={data.acquisition_rate} />
            <CompBoxWhite name="점유율 제곱" num={data.rate_squared} />
        </div>
    );
};

export default CompBoxCombinded;
