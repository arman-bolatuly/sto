import { Drawer, SimpleGrid, Stack, TextInput } from '@mantine/core';
import { FC, useState, useEffect } from 'react';

interface FormProps {
  opened: boolean;
  close: () => void;
  data: {
    id?: number;
    bankName?: string;
    tender?: string;
    holder?: string;
    accountNumber?: string;
    bin?: string;
    bic?: string;
    kba?: string;
  };
}

const AdminForm: FC<FormProps> = ({ data, opened, close }) => {
  const [formData, setFormData] = useState({
    bankName: '',
    tender: '',
    holder: '',
    accountNumber: '',
    bin: '',
    bic: '',
    kba: '',
  });

  useEffect(() => {
    if (data) {
      setFormData({
        bankName: data.bankName || '',
        tender: data.tender || '',
        holder: data.holder || '',
        accountNumber: data.accountNumber || '',
        bin: data.bin || '',
        bic: data.bic || '',
        kba: data.kba || '',
      });
    }
  }, [data]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Drawer
      opened={opened}
      onClose={close}
      position="right"
      title={`Admin/Banks ${data?.id ? 'Edit' : 'Create'} Form`}
    >
      <Stack align="stretch" justify="center" gap="xl" c={'#FFFFFF'}>
        <SimpleGrid cols={1} spacing="lg" verticalSpacing="lg">
          <TextInput
            value={formData.bankName}
            label="Bank Name"
            placeholder="Bank name"
            onChange={(e) => handleInputChange('bankName', e.target.value)} 
          />
          <TextInput
            value={formData.tender}
            label="Legal Tender"
            placeholder="USD"
            onChange={(e) => handleInputChange('tender', e.target.value)} 
          />
          <TextInput
            value={formData.holder}
            label="Account Holder"
            placeholder="Account holder"
            onChange={(e) => handleInputChange('holder', e.target.value)} 
          />
          <TextInput
            value={formData.accountNumber}
            label="Account Number"
            placeholder="Account number"
            onChange={(e) => handleInputChange('accountNumber', e.target.value)} 
          />
          <TextInput
            value={formData.bin}
            label="BIN"
            placeholder="BIN"
            onChange={(e) => handleInputChange('bin', e.target.value)} 
          />
          <TextInput
            value={formData.bic}
            label="BIC"
            placeholder="BIC"
            onChange={(e) => handleInputChange('bic', e.target.value)} 
          />
          <TextInput
            value={formData.kba}
            label="KBA"
            placeholder="KBA"
            onChange={(e) => handleInputChange('kba', e.target.value)} 
          />
        </SimpleGrid>
      </Stack>
    </Drawer>
  );
};

export default AdminForm;
