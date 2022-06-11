import React from "react";
import "./bottom-button.css";
import reportIcon from "../asset/carbon_report.svg";

const BottomButton = (props) => {
  return (
    <button
      disabled={!props.isValid}
      className="bottom-wrapper"
      onClick={props.onSubmit}
    >
      <img className="report-icon" src={reportIcon} alt="report" />
      <span className="bottom-button-text">분석 리포트 보기</span>
    </button>
  );
};

export default BottomButton;
