import "./home.css";

import React, { useState } from "react";

import ColoredHeader from "../layout/ColoredHeader";
import InputForm from "../components/InputForm";
import WhiteHeader from "../layout/WhiteHeader";

const Home = (props) => {
    return (
        <>
            <ColoredHeader />
            <InputForm input={props.inputHandlerApp} />
        </>
    );
};

export default Home;
