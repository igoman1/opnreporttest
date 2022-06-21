import React, {useMemo, useState} from 'react';
import faker from 'faker';
import Table from '../components/Table';
import './hospital-list.css';
import Card from '../components/Card';

faker.seed(100);

const HospitalList = (props) => {
    // console.log(props.input.hospital_table);

//   const [hosData, setHosData] = useState([]);
//  setHosData ([props.input.hospital_table]);
//   console.log(hosData);


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
            accessor: "year",
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

      const data = useMemo(
        () =>
          Array(10)
            .fill()
            .map(() => ({
              name: faker.name.lastName(),
              department: faker.internet.email(),
              year: faker.phone.phoneNumber(),
              area: faker.date.month(),
              prof: faker.name.firstName(),
            })),
        []
      );


    return (
          <Card>
          <div className='hospital-list-text'>{props.listTitle}</div>
            <Table columns={columns} data={data} />
          </Card>

    );
};

export default HospitalList;