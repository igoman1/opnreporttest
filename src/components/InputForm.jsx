import "./input-form.css";
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import BottomButton from "./../components/BottomButton";
import { useNavigate } from "react-router-dom";
import Loader from "./Lodaer";

const InputForm = (props) => {
  const navigate = useNavigate();
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const departmentOptions = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const locationOptions = [
    { value: "경기도 고양시 마두동", label: "경기도 고양시 마두동" },
    { value: "수원시 팔달구 우만동", label: "수원시 팔달구 우만동" },
    { value: "서울시 관악구 신림동", label: "서울시 관악구 신림동" },
  ];

  let isValid = department !== "" && location !== "";

  const departmentSelectHandler = (selectedValue) => {
    setDepartment(selectedValue.value);
  };

  const locationSelectHandler = (selectedValue) => {
    setLocation(selectedValue.value);
  };

  const submitHandler = async () => {
    if (department === "" || location === "") {
      return;
    }
    console.log(department, location);

    let httpRequestIsOK = false;
    setIsLoading(true);
    setTimeout(() => {
      try {
        if (!httpRequestIsOK) {
          throw new Error("분석에 실패했습니다.");
        }
        navigate("/report");
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div>
      {isLoading ? (
        <Loader type="spin" color="RGB 값" message="분석중입니다." />
      ) : (
        <>
          <div className="question-wrapper">
            <Dropdown
              title="진료과목을 알려주세요"
              options={departmentOptions}
              onSelect={departmentSelectHandler}
            />
            <Dropdown
              title="관심있는 지역을 알려주세요"
              options={locationOptions}
              onSelect={locationSelectHandler}
            />
          </div>

          <BottomButton
            isValid={isValid}
            onSubmit={submitHandler}
          ></BottomButton>
        </>
      )}
    </div>
  );
};

export default InputForm;
