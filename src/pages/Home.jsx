import React, {useState} from "react";
import InputForm from "../components/InputForm";
import ColoredHeader from "../layout/ColoredHeader";
import "./home.css";

const Home = (props) => {

  return (
    <>
      <ColoredHeader />
      <InputForm 
      input={props.inputHandlerApp}/>
    </>
  );
};

export default Home;
