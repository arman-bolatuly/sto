import {
  Stack,
  Table,
  Title,
  Text,
  Input,
  Button,
  Badge,
  Image,
  Progress,
  ActionIcon,
} from '@mantine/core'
import { useParams } from 'react-router-dom'
import { IconInfoCircle } from '@tabler/icons-react'

const data = [
  {
    id: 1,
    tokenImage:
      'https://plus.unsplash.com/premium_photo-1663931932637-e30332303b71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG9rZW58ZW58MHx8MHx8fDA%3D',
    tokenName: 'Nishi1 Building Securities',
    tokenShortName: 'NI1BS',
    tokenType: 'Debt',
    term: {
      start: '2021-01-01',
      end: '2022-01-01',
    },
    status: 'Active',
    stoReach: {
      current: 30000,
      target: 100000,
      completedPercent: 30,
    },
  },
  {
    id: 2,
    tokenImage:
      'https://images.unsplash.com/photo-1666032250188-b6797784b249?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRva2VufGVufDB8fDB8fHww',
    tokenName: 'Nishi2 Building Securities',
    tokenShortName: 'NI2BS',
    tokenType: 'Equity',
    term: {
      start: '2021-01-01',
      end: '2022-01-01',
    },
    status: 'Issued',
    stoReach: {
      current: 10000,
      target: 100000,
      completedPercent: 10,
    },
  },
  {
    id: 3,
    tokenImage:
      'https://images.unsplash.com/photo-1666816943145-bac390ca866c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG9rZW58ZW58MHx8MHx8fDA%3D',
    tokenName: 'Nishi3 Building Securities',
    tokenShortName: 'NI3BS',
    tokenType: 'Equity',
    term: {
      start: '2021-01-01',
      end: '2022-01-01',
    },
    status: 'Issued',
    stoReach: {
      current: 10000,
      target: 100000,
      completedPercent: 10,
    },
  },
  {
    id: 4,
    tokenImage:
      'https://images.unsplash.com/photo-1641932269869-46d52e20d8a1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dG9rZW58ZW58MHx8MHx8fDA%3D',
    tokenName: 'Nishi4 Building Securities',
    tokenShortName: 'NI4BS',
    tokenType: 'Equity',
    term: {
      start: '2021-01-01',
      end: '2022-01-01',
    },
    status: 'Issued',
    stoReach: {
      current: 10000,
      target: 100000,
      completedPercent: 10,
    },
  },
  {
    id: 5,
    tokenImage:
      'https://images.unsplash.com/photo-1666625519702-7270420bb4f9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRva2VufGVufDB8fDB8fHww',
    tokenName: 'Nishi5 Building Securities',
    tokenShortName: 'NI5BS',
    tokenType: 'Equity',
    term: {
      start: '2021-01-01',
      end: '2022-01-01',
    },
    status: 'Issued',
    stoReach: {
      current: 10000,
      target: 100000,
      completedPercent: 10,
    },
  },
  {
    id: 6,
    tokenImage:
      'https://images.unsplash.com/photo-1666032250188-b6797784b249?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRva2VufGVufDB8fDB8fHww',
    tokenName: 'Nishi6 Building Securities',
    tokenShortName: 'NI6BS',
    tokenType: 'Equity',
    term: {
      start: '2021-01-01',
      end: '2022-01-01',
    },
    status: 'Issued',
    stoReach: {
      current: 60000,
      target: 100000,
      completedPercent: 60,
    },
  },
  {
    id: 7,
    tokenImage:
      'https://images.unsplash.com/photo-1666032250188-b6797784b249?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRva2VufGVufDB8fDB8fHww',
    tokenName: 'Nishi7 Building Securities',
    tokenShortName: 'NI7BS',
    tokenType: 'Equity',
    term: {
      start: '2021-01-01',
      end: '2022-01-01',
    },
    status: 'Issued',
    stoReach: {
      current: 70000,
      target: 100000,
      completedPercent: 70,
    },
  },
  {
    id: 8,
    tokenImage:
      'https://images.unsplash.com/photo-1666032250188-b6797784b249?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRva2VufGVufDB8fDB8fHww',
    tokenName: 'Nishi8 Building Securities',
    tokenShortName: 'NI8BS',
    tokenType: 'Equity',
    term: {
      start: '2021-01-01',
      end: '2022-01-01',
    },
    status: 'Issued',
    stoReach: {
      current: 80000,
      target: 100000,
      completedPercent: 80,
    },
  },
  {
    id: 9,
    tokenImage:
      'https://images.unsplash.com/photo-1666032250188-b6797784b249?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRva2VufGVufDB8fDB8fHww',
    tokenName: 'Nishi9 Building Securities',
    tokenShortName: 'NI9BS',
    tokenType: 'Equity',
    term: {
      start: '2021-01-01',
      end: '2022-01-01',
    },
    status: 'Issued',
    stoReach: {
      current: 90000,
      target: 100000,
      completedPercent: 90,
    },
  },
  {
    id: 10,
    tokenImage:
      'https://images.unsplash.com/photo-1666032250188-b6797784b249?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRva2VufGVufDB8fDB8fHww',
    tokenName: 'Nishi10 Building Securities',
    tokenShortName: 'NI10BS',
    tokenType: 'Equity',
    term: {
      start: '2021-01-01',
      end: '2022-01-01',
    },
    status: 'Issued',
    stoReach: {
      current: 100000,
      target: 100000,
      completedPercent: 100,
    },
  },
]

const TokenList = () => {
  const { caseId } = useParams()
  return (
    <Stack align="stretch" justify="center" gap="xl" c={'#FFFFFF'}>
      <div className="flex justify-between items-center">
        <Title order={3} c="#FFFFFF">
          STO List
        </Title>

        <Text className="caption1">Case ID: {`${caseId}`}</Text>
      </div>

      <div className="flex justify-between items-center">
        <Input placeholder="Search" w={250} />

        <Button>Create Token</Button>
      </div>

      <div className="overflow-auto border-solid border-[#EBEDF0] rounded-lg">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Token Image</Table.Th>
              <Table.Th>Token Name</Table.Th>
              <Table.Th>Token Type</Table.Th>
              <Table.Th>Term</Table.Th>
              <Table.Th>Token Status</Table.Th>
              <Table.Th>STO Reach</Table.Th>
              <Table.Th></Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {data.map(d => (
              <Table.Tr key={d.id}>
                <Table.Td>
                  <Image w={100} h={100} src={d?.tokenImage} radius="md" />
                </Table.Td>
                <Table.Td>
                  <div className="flex flex-col space-y-1">
                    <Text className="bodyDemibold">{d.tokenName}</Text>
                    <Text className="initial2">{d.tokenShortName}</Text>
                    <Badge color="green" c="white" radius={4}>
                      Released
                    </Badge>
                  </div>
                </Table.Td>
                <Table.Td>{d.tokenType}</Table.Td>
                <Table.Td>
                  {d.term.start} - {d.term.end}
                </Table.Td>
                <Table.Td>{d.status}</Table.Td>
                <Table.Td>
                  <div className="flex flex-col space-y-1">
                    <Text className="bodyDemibold">
                      {d.stoReach.current} / {d.stoReach.target} USD
                    </Text>
                    <Progress
                      value={d.stoReach.completedPercent}
                      size="lg"
                      transitionDuration={200}
                    />

                    <Text className="caption1">
                      {d.stoReach.completedPercent}% Completed
                    </Text>
                  </div>
                </Table.Td>

                <Table.Td>
                  <ActionIcon variant="transparent">
                    <IconInfoCircle />
                  </ActionIcon>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </div>
    </Stack>
  )
}

export default TokenList
