import { Pagination } from '@mantine/core'
import {
  IconArrowLeft,
  IconArrowRight,
  IconGripHorizontal,
} from '@tabler/icons-react'

export function CustomPagination({ total, value, onChange }: any) {
  return (
    <Pagination
      total={total}
      value={value}
      onChange={onChange}
      nextIcon={IconArrowRight}
      previousIcon={IconArrowLeft}
      dotsIcon={IconGripHorizontal}
      ml="auto"
      radius="lg"
    />
  )
}
