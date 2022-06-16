import React, {useMemo} from 'react';
import faker from 'faker';
import Table from '../components/Table';

faker.seed(100);

const HospitalList = () => {
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
        //   {
        //     accessor: "area",
        //     Header: "Area",
        //   },
        //   {
        //     accessor: "prof",
        //     Header: "Prof",
        //   },
        ],
        []
      );

      const data = useMemo(
        () =>
          Array(53)
            .fill()
            .map(() => ({
              name: faker.name.lastName(),
              department: faker.internet.email(),
              year: faker.phone.phoneNumber(),
            //   area: faker.date.date(),
            //   prof: faker.name.firstName(),
            })),
        []
      );

    return (
        <div>
            <Table columns={columns} data={data} />
        </div>
    );
};

export default HospitalList;