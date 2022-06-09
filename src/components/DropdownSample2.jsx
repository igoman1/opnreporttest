import React, { Component } from "react";

import Select from "react-select";

const asd = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "vanilla", label: "Vanilla" },
    { value: "vanilla", label: "Vanilla" },
];

const DropdownSample2 = () => <Select options={asd} />;

export default DropdownSample2;
