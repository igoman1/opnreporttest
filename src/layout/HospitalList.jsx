import React, {useMemo} from 'react';
import faker from 'faker';
import Table from '../components/Table';
import './hospital-list.css';
import Card from '../components/Card';

faker.seed(100);

const HospitalList = (props) => {
    const columns = useMemo(
        () => [
          {
            accessor: "name",
            Header: "Name",
          },
          {
            accessor: "department",
            Header: "Department",
          },
          {
            accessor: "year",
            Header: "Year",
          },
          {
            accessor: "area",
            Header: "Area",
          },
          {
            accessor: "prof",
            Header: "Prof",
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

      const data1 = [10]

    return (
          <Card>
          <div className='hospital-list-text'>{props.listTitle}</div>
            <Table columns={columns} data={data} />
          </Card>

    );
};

export default HospitalList;