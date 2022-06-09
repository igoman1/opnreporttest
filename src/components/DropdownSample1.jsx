import "./DropdownSample1.css";

import Select, { components } from "react-select";

import Chevron from "../asset/Chevron.svg";
import React from "react";

const DropdownSample1 = () => {
    const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
    ];

    const colourStyles = {
        control: (styles) => ({
            ...styles,
            backgroundColor: "white",
            borderRadius: "30px",
            border: "1px solod #bdbdbd",
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
        console.log(props);
        return (
            <components.ValueContainer className="test2" {...props}>
                {props.children}
            </components.ValueContainer>
        );
    };
    return (
        <div>
            <Select
                components={{ ValueContainer, DropdownIndicator }}
                options={options}
                styles={colourStyles}
                placeholder={
                    <div style={{ fontSize: "14px" }}>진료과목 검색</div>
                }
            />
        </div>
    );
};

export default DropdownSample1;
