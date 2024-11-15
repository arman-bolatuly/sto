import { Skeleton, Table } from '@mantine/core'
import type { FC } from 'react'

interface TableSkeletonProps {
  rowsNum: number
  columnsNum: number
}

const TableSkeleton: FC<TableSkeletonProps> = ({ rowsNum, columnsNum }) => {
  const renderSkeletonColumns = () => {
    return [...Array(columnsNum)].map((_column: number, index) => (
      <Table.Td key={index}>
        <Skeleton height={38} />
      </Table.Td>
    ))
  }

  const renderSkeletonRows = () => {
    return [...Array(rowsNum)].map((_row: number, index) => (
      <Table.Tr key={index}>{renderSkeletonColumns()}</Table.Tr>
    ))
  }
  return (
    <Table.Tbody className="bg-[#FFFFFF]">{renderSkeletonRows()}</Table.Tbody>
  )
}

export default TableSkeleton
