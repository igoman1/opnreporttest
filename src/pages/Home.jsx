import "./home.css";

import ColoredHeader from "../layout/ColoredHeader";
import InputForm from "../components/InputForm";
import React from "react";

const Home = (props) => {
    return (
        <>
            <ColoredHeader />
            <InputForm input={props.inputHandlerApp} />
        </>
    );
};

export default Home;
