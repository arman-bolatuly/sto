import { Button, Drawer, SimpleGrid, Stack, TextInput } from '@mantine/core'
import { FC } from 'react'

interface FormProps {
  opened: boolean
  close: () => void
  data: {
    id: number
    email: string
    person: string
    company: string
    authority: string
  }
}

const AdminForm: FC<FormProps> = ({ data, opened, close }) => {
  console.log('data: ', data)
  return (
    <Drawer
      opened={opened}
      onClose={close}
      position="right"
      title={`Admin/Issuer ${data?.id ? 'Edit' : 'Create'} Form`}
    >
      <Stack align="stretch" justify="center" gap="xl" c={'#FFFFFF'}>
        <SimpleGrid cols={1} spacing="lg" verticalSpacing="lg">
          <TextInput
            value={data?.email}
            label="Email"
            placeholder="person@mail.ru"
          />
          <TextInput
            value={data?.person}
            label="FullName"
            placeholder="John Doe"
          />
          <TextInput
            value={data?.company}
            label="Company"
            placeholder="Company 1"
          />
          <TextInput
            value={data?.authority}
            label="Authority"
            placeholder="admin"
          />
        </SimpleGrid>

        <Button>Save</Button>
      </Stack>
    </Drawer>
  )
}

export default AdminForm
