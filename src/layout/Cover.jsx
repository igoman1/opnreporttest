import "./cover.css";

import React from "react";

const Cover = React.forwardRef((props, target) => {
    const file = require(`../asset/${props.fileName}`);

    const coverStyle = {
        background: `url(${file}) no-repeat center`,
        backgroundSize: "cover",
        height: "100vh",
    };

    return (
        <>
            <div style={coverStyle} ref={target}>
                <div className="section-header">
                    <div className="section-title">
                        {props.sectionHeader.sectionTitle}
                    </div>

                    <div className="section-list">
                        {props.sectionHeader.sectionList.map((item) => {
                            return (
                                <div className="section-list-item">{item}</div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
});

export default Cover;
