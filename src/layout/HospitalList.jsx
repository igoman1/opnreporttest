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
            accessor: "email",
            Header: "Email",
          },
          {
            accessor: "phone",
            Header: "Phone",
          },
        ],
        []
      );

      const data = useMemo(
        () =>
          Array(53)
            .fill()
            .map(() => ({
              name: faker.name.lastName() + faker.name.firstName(),
              email: faker.internet.email(),
              phone: faker.phone.phoneNumber(),
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