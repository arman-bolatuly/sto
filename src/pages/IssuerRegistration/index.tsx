/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { Title, Stack, Table, Input, Button, Pagination } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconSearch } from '@tabler/icons-react'
import AdminForm from './Form'

const data = [
  {
    id: 1,
    company: 'Company 1',
    email: 'person1@mail.ru',
    authority: 'Issuer',
    updatedDate: '2021-10-10',
  },
  {
    id: 2,
    company: 'Company 2',
    email: 'person2@mail.ru',
    authority: 'Issuer',
    updatedDate: '2021-10-10',
  },
  {
    id: 3,
    company: 'Company 1',
    email: 'person3@mail.ru',
    authority: 'Admin',
    updatedDate: '2021-10-10',
  },
  {
    id: 4,
    company: 'Company 2',
    email: 'person4@mail.ru',
    authority: 'Issuer',
    updatedDate: '2021-10-10',
  },
  {
    id: 5,
    company: 'Company 1',
    email: 'person1@mail.ru',
    authority: 'Admin',
    updatedDate: '2021-10-10',
  },
  {
    id: 6,
    company: 'Company 1',
    email: 'person2@mail.ru',
    authority: 'Issuer',
    updatedDate: '2021-10-10',
  },
  {
    id: 7,
    company: 'Company 2',
    email: 'person3@mail.ru',
    authority: 'Issuer',
    updatedDate: '2021-10-10',
  },
  {
    id: 8,
    company: 'Company 2',
    email: 'person4@mail.ru',
    authority: 'Admin',
    updatedDate: '2021-10-10',
  },
  {
    id: 9,
    company: 'Company 1',
    email: 'person3@mail.ru',
    authority: 'Issuer',
    updatedDate: '2021-10-10',
  },
  {
    id: 10,
    company: 'Company 1',
    email: 'person4@mail.ru',
    authority: 'Admin',
    updatedDate: '2021-10-10',
  },
]

const AdminsIssuers = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedPerson, setSelectedPerson] = useState<any>(null);

  return (
    <Stack align="stretch" justify="center" gap="xl" c={'#FFFFFF'}>
      <Title order={3}>Issuers Registration</Title>

      <div className="flex justify-between">
        <Input
          placeholder="Search by email, person and company"
          rightSection={<IconSearch />}
          w={300}
        />

        <Button
          onClick={() => {
            open();
            setSelectedPerson(null); 
          }}
        >
          Add
        </Button>
      </div>

      <div className="overflow-auto border-solid border-[#EBEDF0] rounded-lg">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ID</Table.Th>
              <Table.Th>Company Name</Table.Th>
              <Table.Th>Email</Table.Th>
              <Table.Th>Authority</Table.Th>
              <Table.Th>Updated Date</Table.Th>
              <Table.Th></Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {data.map(d => (
              <Table.Tr
                key={d.id}
                onClick={() => {
                  open();
                  setSelectedPerson(d); 
                }}
                className="cursor-pointer"
              >
                <Table.Td>{d.id}</Table.Td>
                <Table.Td>{d.company}</Table.Td>
                <Table.Td>{d.email}</Table.Td>
                <Table.Td>{d.authority}</Table.Td>
                <Table.Td>{d.updatedDate}</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </div>

      <Pagination total={10} ml={'auto'} />

      {opened && (
        <AdminForm
          data={selectedPerson || {}} 
          opened={opened}
          close={close}
        />
      )}
    </Stack>
  );
};

export default AdminsIssuers;