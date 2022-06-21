import "./hospital-list.css";

import React, { useMemo, useState } from "react";

import Card from "../components/Card";
import Table from "../components/Table";
// import faker from "faker";

// faker.seed(100);

const HospitalList = (props) => {
    // const rawData = props.input
    // const tmp = rawData[0]
    // const dataColumn = Object.keys(tmp)
    // console.log(rawData)
    // console.log(dataColumn)
   
    
    const columns = useMemo(
        () => [
            {
                accessor: "name",
                Header: "사업장명",
            },
            {
                accessor: "department",
                Header: "진료과",
            },
            {
                accessor: "open_year",
                Header: "개원년도",
            },
            {
                accessor: "area",
                Header: "면적",
            },
            {
                accessor: "prof",
                Header: "전문의",
            },
        ],
        []
    );

    const data = props.input

    // const data = useMemo(
    //     () =>
    //         Array(10)
    //             .fill()
    //             .map(() => ({
    //                 name: faker.name.lastName(),
    //                 department: faker.internet.email(),
    //                 year: faker.phone.phoneNumber(),
    //                 area: faker.date.month(),
    //                 prof: faker.name.firstName(),
    //             })),
    //     []
    // );

    return (
        <Card>
            <div className="hospital-list-text">{props.listTitle}</div>
            <Table columns={columns} data={data} />
        </Card>
    );
};

export default HospitalList;
