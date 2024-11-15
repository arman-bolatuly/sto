import { Text, SimpleGrid, Title, Card, Badge } from '@mantine/core'
import { IconChevronRight } from '@tabler/icons-react'

function First() {
  return (
    <div className="bg-[#f1f3f5] p-4 rounded-[10px] flex flex-col space-y-4">
      <Title order={6}>Complete your account</Title>

      <SimpleGrid cols={3} spacing="lg">
        <Card shadow="sm" component="a" href="#" h={84}>
          <div className="flex justify-between items-center">
            <div>
              <Text>Verify Your Identity</Text>

              <Badge color="#ced4da" radius={8} c="#868e96" mt={8}>
                Not completed
              </Badge>
            </div>

            <IconChevronRight size={24} />
          </div>
        </Card>

        <Card shadow="sm" component="a" href="#" h={84}>
          <div className="flex justify-between items-center">
            <div className="flex flex-col h-full justify-between">
              <Text>Complete Investment Profile</Text>

              <Badge color="#ced4da" radius={8} c="#868e96" mt={8}>
                Not completed
              </Badge>
            </div>

            <IconChevronRight size={24} />
          </div>
        </Card>

        <Card shadow="sm" component="a" href="#" h={84}>
          <div className="flex justify-between items-center">
            <div className="flex flex-col h-full justify-between">
              <Text>Qualification</Text>

              <Badge color="#ced4da" radius={8} c="#868e96" mt={8}>
                Not completed
              </Badge>
            </div>

            <IconChevronRight size={24} />
          </div>
        </Card>
      </SimpleGrid>
    </div>
  )
}

export default First
