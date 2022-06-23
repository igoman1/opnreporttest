import "./hospital-list.css";

import React, { useMemo, useState } from "react";

import Card from "../components/Card";
import Table from "../components/Table";
import faker from "faker";

// faker.seed(100);

const NewHospitalList = (props) => {
    const rawData = props.list
    // const header = pro ps.header
    // console.log(rawData)
    // console.log(header)
    // console.log(dataColumn)
   
    
    const columns = useMemo(
        () => [
          {
            accessor: "open_date",
            Header: "개업일자",
          },

          {
                accessor: "name",
                Header: "상호명",
              },
              // {
              //   accessor: "department",
              //   Header: "진료과",
              // },
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
                    name: item.hospital_name,
                    open_date: item.open_date,
                    // department: item.department,
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

export default NewHospitalList;
