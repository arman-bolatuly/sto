import { Stack, Title, Table, Button } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

const data = [
  {
    id: 1,
    caseName: 'Real Estate',
  },
  {
    id: 2,
    caseName: 'Oil',
  },
  {
    id: 3,
    caseName: 'Natural Gas',
  },
]

const Tokens = () => {
  const navigate = useNavigate()
  return (
    <Stack align="stretch" justify="center" gap="xl" c={'#FFFFFF'}>
      <Title order={3} c="#FFFFFF">
        Case List
      </Title>

      <div className="overflow-auto border-solid border-[#EBEDF0] rounded-lg">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ID</Table.Th>
              <Table.Th className="text-end">Case Name</Table.Th>
              <Table.Th></Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {data.map(d => (
              <Table.Tr key={d.id}>
                <Table.Td>{d.id}</Table.Td>
                <Table.Td className="text-end">{d.caseName}</Table.Td>
                <Table.Td className="text-end">
                  <Button
                    onClick={() => {
                      navigate(`cases/${d.id}`)
                    }}
                  >
                    Token List
                  </Button>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </div>
    </Stack>
  )
}

export default Tokens
