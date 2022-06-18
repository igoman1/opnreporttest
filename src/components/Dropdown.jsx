import "./Dropdown.css";
import Select, { components } from "react-select";
import Chevron from "../asset/Chevron.svg";

const Dropdown = (props) => {
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      borderRadius: "30px",
      border: "1px solid #bdbdbd",
      boxShadow: "none",
      "&:hover": {
        border: "1px solid #bdbdbd",
      },

      width: "320px",
      padding: "0px 17px 0px 20px",
      height: "42px",
    }),
    menu: (styles) => ({
      ...styles,
      width: "320px",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        width: "320px",
        color: "black",
        backgroundColor: "white",
        ":active": {
          ...styles[":active"],
          backgroundColor: "white",
        },
        cursor: isDisabled ? "not-allowed" : "default",
      };
    },
  };

  const CustomIcon = () => {
    return <img src={Chevron} />;
  };
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator className="test" {...props}>
        <CustomIcon />
      </components.DropdownIndicator>
    );
  };
  const ValueContainer = (props) => {
    return (
      <components.ValueContainer className="title" {...props}>
        {props.children}
      </components.ValueContainer>
    );
  };

  const selectHandler = (event) => {
    props.onSelect(event);
  };
  return (
    <div className="question-wrapper-for-one">
      <div className="question">{props.title}</div>

      <Select
        onChange={selectHandler}
        components={{ ValueContainer, DropdownIndicator }}
        options={props.options}
        styles={colourStyles}
        placeholder={<div style={{ fontSize: "14px" }}>진료과목 검색</div>}
      />
    </div>
  );
};

export default Dropdown;
