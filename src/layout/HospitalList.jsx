import "./hospital-list.css";

import React, { useMemo, useState } from "react";

import Card from "../components/Card";
import Table from "../components/Table";
import faker from "faker";

// faker.seed(100);

const HospitalList = (props) => {
    const rawData = props.list
    // console.log(props.list)
    // const header = props.header
    // console.log(rawData)
    // console.log(header)
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

    // const data = props.input

    const data = useMemo(
        () =>
            // Array(10)
            //     .fill()
                rawData.map((item) => ({
                    name: item.name,
                    department: item.department,
                    open_year: item.open_year,
                    area: item.area,
                    prof: item.prof,
                })),
        []
    );

    return (
        <Card>
            <div className="table-wrapper">
                <div className="hospital-list-text">{props.listTitle}</div>
                <div className="hospital-list-header">{props.header}</div>
                <Table columns={columns} data={data} />
            </div>
        </Card>
    );
};

export default HospitalList;
