import "./key-number-box.css";

import React from "react";

const KeyNumberBoxFat = (props) => {
    return (
        <div className="key-number-box-fat-wrapper">
            <div className="key-number-box-fat">
                <div className="key-number-box-header">{props.header}</div>
                <div className="key-number-box-line"></div>
                <div className="key-number-box-body">{props.body}</div>
            </div>
        </div>
    );
};

export default KeyNumberBoxFat;
