import React from 'react';
import './cover.css';

const Cover = (props) => {
    const file = require(`../asset/${props.fileName}`);

    const coverStyle = {
        background: `url(${file}) no-repeat center`,
        backgroundSize: "cover",
        height: "100vh",
    }

    return (
        <>
        <div style={coverStyle}>
        </div>
        <div>{props.sectionHeader.sectionList}</div>
        </>
    );
};

export default Cover;