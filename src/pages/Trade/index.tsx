import { useState } from 'react'
import {
  SegmentedControl,
  TextInput,
  Button,
  Table,
  Title,
} from '@mantine/core'

import TradeFirst from './TradeFirst'

const data = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    lastPrice: '$30,000',
    change24h: '2.5%',
    volume: '$100M',
    marketCap: '$600B',
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    lastPrice: '$2,000',
    change24h: '1.8%',
    volume: '$50M',
    marketCap: '$200B',
  },
  {
    name: 'Litecoin',
    symbol: 'LTC',
    lastPrice: '$150',
    change24h: '3.0%',
    volume: '$10M',
    marketCap: '$10B',
  },
]

function Trade() {
  const [search, setSearch] = useState('')

  return (
    <div className="flex flex-col space-y-4 text=['#FFFFFF']">
      <TradeFirst />

      <SegmentedControl data={['Asset Catalog', 'My Orders']} />

      <Title order={4} className="text-[#FFFFFF]">
        All investment opportunities
      </Title>

      <div className="flex item-center">
        <TextInput
          className="w-full"
          placeholder="Search"
          value={search}
          onChange={e => setSearch(e.currentTarget.value)}
        />
        <Button ml="lg" w={150}>
          Search
        </Button>
      </div>

      <div className="overflow-auto border-solid border-[#EBEDF0] rounded-lg text-[#FFFFFF]">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              <Table.Th>Symbol</Table.Th>
              <Table.Th>Last Price</Table.Th>
              <Table.Th>Change (24H)</Table.Th>
              <Table.Th>Volume</Table.Th>
              <Table.Th>Market Cap</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {data
              .filter(d => d.name.toLowerCase().includes(search.toLowerCase()))
              .map(d => (
                <Table.Tr key={d.symbol}>
                  <Table.Td>{d.name}</Table.Td>
                  <Table.Td>{d.symbol}</Table.Td>
                  <Table.Td>{d.lastPrice}</Table.Td>
                  <Table.Td>{d.change24h}</Table.Td>
                  <Table.Td>{d.volume}</Table.Td>
                  <Table.Td>{d.marketCap}</Table.Td>
                </Table.Tr>
              ))}
          </Table.Tbody>
        </Table>
      </div>
    </div>
  )
}

export default Trade
