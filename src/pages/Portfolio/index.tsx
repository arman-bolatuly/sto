import { SegmentedControl, Title, Text, Card, Button } from '@mantine/core'
import { IconArrowRight } from '@tabler/icons-react'

import First from './First'

function Portfolio() {
  return (
    <div className="flex flex-col space-y-6">
      <Title order={3} className="text-[#FFFFFF]">
        Portfolio
      </Title>
      <First />
      <div className="p-4 bg-white rounded-[10px]">
        <Title order={4}>Portfolio Value</Title>
        <Text size="xl" className="mt-2">
          $0.00
        </Text>
      </div>
      <Card shadow="sm" component="a" href="#" h={84}>
        <div className="flex justify-between items-center">
          <div>
            <Title order={6}>
              Hamilton Lane's Record-Breaking $5.6B Secondaries Fund - Now
              Exclusively on Securitize
            </Title>

            <Text mt={12}>
              Access stability and quicker returns with a secondary fund that
              acquires mature private equity investments, often at prices below
              market value.
            </Text>
          </div>

          <Button variant="transparent" rightSection={<IconArrowRight />}>
            View the Fund
          </Button>
        </div>
      </Card>
      <SegmentedControl data={['My Assets', 'In Progres']} />;
    </div>
  )
}

export default Portfolio
