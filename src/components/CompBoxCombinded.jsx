import "./comp-box.css";

import CompBox from "./CompBox";
import CompBoxWhite from "./CompBoxWhite";
import React from "react";

const CompBoxCombinded = (props) => {
    const rawData = props.input;
    console.log(rawData)
    const data=rawData.slice(0,5)
    console.log(data)

    return (
        <div>
        {data.map((item)=>{
            return <div className="comp-box-combinded">
            <CompBox name="매출액" num={item.profit} />
            <CompBox name="점유율" num={item.acquisition_rate} />
            <CompBoxWhite name="점유율 제곱" num={item.rate_squared} />
        </div>
            
        })}
        </div>
    );
};

export default CompBoxCombinded;

            // {menuItems.map((item)=>{
            //     return <div>{item}</div>
            // })}
                