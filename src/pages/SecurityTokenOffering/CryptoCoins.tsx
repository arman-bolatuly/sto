import { useMemo, useState } from 'react'
import {
  Table,
  Title,
  Image,
  Avatar,
  Input,
  Select,
  Badge,
  Text,
} from '@mantine/core'
import {
  IconSearch,
  IconTrendingUp,
  IconTrendingDown,
} from '@tabler/icons-react'
import { useQuery } from '@tanstack/react-query'
import { useDisclosure } from '@mantine/hooks'
import debounce from 'lodash.debounce'

import { getCryptoCoins } from '../../apiService/cryptoCoinsService'
import { CustomPagination } from '../../components/ui/CustomPagination'
import TableSkeleton from '../../components/ui/TableSkeleton'
import ChartModal from './ChartModal'

const CryptoCoins = () => {
  const [activePage, setActivePage] = useState(1)

  const [perPage, setPerPage] = useState<string | null>('10')

  const [search, setSearch] = useState<string>('')

  const [coinId, setCoinId] = useState<string>('')

  const [opened, { open, close }] = useDisclosure(false)

  const debouncedSearch = useMemo(() => {
    return debounce((e: any) => {
      setSearch(e.target.value)
      setActivePage(1)
    }, 1000)
  }, [])

  const { data, isLoading, isError } = useQuery({
    queryKey: [
      'https://openapiv1.coinstats.app/coins',
      search,
      activePage,
      perPage,
    ],
    queryFn: () =>
      getCryptoCoins({
        name: search,
        page: activePage,
        limit: perPage,
      }),
  })

  const currency = data?.data?.result
  const pageCount = data?.data?.meta?.pageCount

  return (
    <section
      className="flex flex-col space-y-6 h-screen text-[#FFFFFF] mx-60"
      id="table"
    >
      <Title order={1} mt={120}>
        Crypto coins
      </Title>

      <Input
        placeholder="Поиск по названию"
        rightSection={<IconSearch />}
        ml={'auto'}
        miw={300}
        rightSectionWidth={40}
        onChange={debouncedSearch}
      />

      <div className="overflow-auto border-solid border-[#EBEDF0] rounded-[10px]">
        <Table highlightOnHover highlightOnHoverColor="#0b7285">
          <Table.Thead>
            <Table.Tr className="caption1">
              <Table.Th>Rank</Table.Th>
              <Table.Th>Coin name</Table.Th>
              <Table.Th>Symbol</Table.Th>
              <Table.Th>Market Cap</Table.Th>
              <Table.Th>Price</Table.Th>
              <Table.Th>Available supply</Table.Th>
              <Table.Th>Volume(24hr)</Table.Th>
              <Table.Th className="text-center">Pricing a day</Table.Th>
            </Table.Tr>
          </Table.Thead>
          {isLoading ? (
            <TableSkeleton rowsNum={Number(perPage)} columnsNum={8} />
          ) : isError ? (
            <Table.Tbody>
              <Table.Tr>
                <Table.Td colSpan={7} className="text-center">
                  Error fetching data
                </Table.Td>
              </Table.Tr>
            </Table.Tbody>
          ) : (
            <Table.Tbody>
              {currency?.map((c: any) => (
                <Table.Tr
                  key={c.name}
                  className="smallDemibold cursor-pointer"
                  onClick={() => {
                    open()
                    setCoinId(c.id)
                  }}
                >
                  <Table.Td>
                    <Avatar>
                      <Image src={c.icon} alt={c.name} width={32} height={32} />
                    </Avatar>
                  </Table.Td>
                  <Table.Td>{c.name}</Table.Td>
                  <Table.Td>{c.symbol}</Table.Td>
                  <Table.Td>${c.marketCap}</Table.Td>
                  <Table.Td>${c.price.toFixed(2)}</Table.Td>
                  <Table.Td>{c.availableSupply}</Table.Td>
                  <Table.Td>{c.volume.toFixed(0)}</Table.Td>
                  <Table.Td className="text-center">
                    <Badge
                      color={c.priceChange1d > 0 ? 'teal' : 'red'}
                      variant="filled"
                      className="text-xs"
                    >
                      {c.priceChange1d > 0 ? (
                        <IconTrendingUp />
                      ) : (
                        <IconTrendingDown />
                      )}
                    </Badge>
                    <Text
                      className={`${
                        c.priceChange1d > 0 ? 'text-teal-600' : 'text-red-600'
                      }`}
                    >
                      {c.priceChange1d.toFixed(2)}%
                    </Text>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          )}
        </Table>
      </div>

      <div className="flex">
        <Select
          value={perPage}
          onChange={(value: any) => {
            setPerPage(value)
            setActivePage(1)
          }}
          data={[
            { value: '5', label: 'Показывать по: 5' },
            { value: '10', label: 'Показывать по: 10' },
            { value: '15', label: 'Показывать по: 15' },
            { value: '20', label: 'Показывать по: 20' },
            { value: '25', label: 'Показывать по: 25' },
          ]}
          allowDeselect={false}
          w={200}
        />

        <CustomPagination
          value={activePage}
          onChange={setActivePage}
          total={pageCount}
        />
      </div>

      <ChartModal opened={opened} close={close} coinId={coinId} />
    </section>
  )
}

export default CryptoCoins
