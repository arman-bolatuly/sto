import { Drawer, SimpleGrid, Stack, TextInput } from '@mantine/core';
import { FC } from 'react';

interface FormProps {
  opened: boolean;
  close: () => void;
  data: {
    companyname?: string;
    personalname?: string;
    id?: number;
    email?: string;
    code?: string;
    number?: number;
    pasword?: string;
  };
}

const AdminForm: FC<FormProps> = ({ data, opened, close }) => {
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
            value={data?.companyname || ''}
            label="Company Name"
            placeholder="Company Name"
          />
          <TextInput
            value={data?.personalname || ''}
            label="Personal Name"
            placeholder="Personal Name"
          />
          <TextInput
            value={data?.email || ''}
            label="Email"
            placeholder="Email"
          />
          <TextInput
            value={data?.number || ''}
            label="Phone Number"
            placeholder="Phone Number"
          />
          <TextInput
            value={data?.code || ''}
            label="Issuer Code"
            placeholder="Issuer Code"
          />
          <TextInput
            value={data?.pasword || ''}
            label="Password"
            placeholder="Password"
          />
        </SimpleGrid>
      </Stack>
    </Drawer>
  );
};

export default AdminForm;
