/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Title, Stack, Table, Button, Pagination, Input } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import AdminForm from './Form';
import { IconSearch } from '@tabler/icons-react';

const data = [
  {
    id: 1,
    bankName: 'Bank 1',
    holder: 'Person 1',
    accountNumber: '1234567890',
    bin: 'BIN1',
    bic: 'BIC1',
    kba: 'KBA1',
    updatedDate: '2021-10-10',
  },
  {
    id: 1,
    bankName: 'Bank 1',
    holder: 'Person 1',
    accountNumber: '1234567890',
    bin: 'BIN1',
    bic: 'BIC1',
    kba: 'KBA1',
    updatedDate: '2021-10-10',
  },
  {
    id: 1,
    bankName: 'Bank 1',
    holder: 'Person 1',
    accountNumber: '1234567890',
    bin: 'BIN1',
    bic: 'BIC1',
    kba: 'KBA1',
    updatedDate: '2021-10-10',
  },
  {
    id: 1,
    bankName: 'Bank 1',
    holder: 'Person 1',
    accountNumber: '1234567890',
    bin: 'BIN1',
    bic: 'BIC1',
    kba: 'KBA1',
    updatedDate: '2021-10-10',
  },
  {
    id: 1,
    bankName: 'Bank 1',
    holder: 'Person 1',
    accountNumber: '1234567890',
    bin: 'BIN1',
    bic: 'BIC1',
    kba: 'KBA1',
    updatedDate: '2021-10-10',
  },
  {
    id: 1,
    bankName: 'Bank 1',
    holder: 'Person 1',
    accountNumber: '1234567890',
    bin: 'BIN1',
    bic: 'BIC1',
    kba: 'KBA1',
    updatedDate: '2021-10-10',
  },
  {
    id: 1,
    bankName: 'Bank 1',
    holder: 'Person 1',
    accountNumber: '1234567890',
    bin: 'BIN1',
    bic: 'BIC1',
    kba: 'KBA1',
    updatedDate: '2021-10-10',
  },
  {
    id: 1,
    bankName: 'Bank 1',
    holder: 'Person 1',
    accountNumber: '1234567890',
    bin: 'BIN1',
    bic: 'BIC1',
    kba: 'KBA1',
    updatedDate: '2021-10-10',
  },
  {
    id: 1,
    bankName: 'Bank 1',
    holder: 'Person 1',
    accountNumber: '1234567890',
    bin: 'BIN1',
    bic: 'BIC1',
    kba: 'KBA1',
    updatedDate: '2021-10-10',
  },
];

const AdminBanks = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedBank, setSelectedBank] = useState<any>(null); 

  return (
    <Stack align="stretch" justify="center" gap="xl" c={'#FFFFFF'}>
      <Title order={3}>Admin Bank List</Title>

      <div className="flex justify-between">
        <Input
          placeholder="Search by email, person and company"
          rightSection={<IconSearch />}
          w={300}
        />

        <Button
          onClick={() => {
            open();
            setSelectedBank(null); // Исправлено с setSelectedPerson на setSelectedBank
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
              <Table.Th>Bank Name</Table.Th>
              <Table.Th>Account Holder</Table.Th>
              <Table.Th>Account Number</Table.Th>
              <Table.Th>BIN</Table.Th>
              <Table.Th>BIC</Table.Th>
              <Table.Th>KBA</Table.Th>
              <Table.Th>Updated Date</Table.Th>
              <Table.Th></Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {data.map((d) => (
              <Table.Tr
                key={d.id}
                onClick={() => {
                  open();
                  setSelectedBank(d); 
                }}
                className="cursor-pointer"
              >
                <Table.Td>{d.id}</Table.Td>
                <Table.Td>{d.bankName}</Table.Td>
                <Table.Td>{d.holder}</Table.Td>
                <Table.Td>{d.accountNumber}</Table.Td>
                <Table.Td>{d.bin}</Table.Td>
                <Table.Td>{d.bic}</Table.Td>
                <Table.Td>{d.kba}</Table.Td>
                <Table.Td>{d.updatedDate}</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </div>

      <Pagination total={10} ml={'auto'} />

      {opened && (
        <AdminForm data={selectedBank || {}} opened={opened} close={close} /> 
      )}
    </Stack>
  );
};

export default AdminBanks;
