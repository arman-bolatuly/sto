import { useRef } from 'react'
import {
  Stack,
  TextInput,
  SimpleGrid,
  Avatar,
  Group,
  Button,
} from '@mantine/core'
import { Dropzone } from '@mantine/dropzone'

const profile = {
  personalName: 'John Doe',
  email: 'john@gmail.com',
  password: '********',
  confirmPassword: '********',
  phone: '8(707)1234567',
  userJurisdiction: 'Kazakhstan',
  occupation: 'Company director',
  birthday: '1997-01-29',
  residence: 'Almaty',
  authStatus: 'Approved',
  nationality: 'Kazakhstan',
  countryOfBirth: 'Kazakhstan',
}

const Profile = () => {
  const openRef = useRef<() => void>(null)

  return (
    <Stack align="stretch" justify="center" gap="xl" c={'#FFFFFF'}>
      {/* <Title order={3}>Profile</Title> */}

      <div className="flex justify-center">
        <Dropzone openRef={openRef} onDrop={() => {}} activateOnClick={false}>
          <Group justify="center">
            <Avatar
              size={150}
              onClick={() => openRef.current?.()}
              style={{ pointerEvents: 'all' }}
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
              mx={'auto'}
              pb={4}
              className="cursor-pointer"
            />
            {/* <Button
              onClick={() => openRef.current?.()}
              style={{ pointerEvents: 'all' }}
            >
              Select files
            </Button> */}
          </Group>
        </Dropzone>
      </div>

      <SimpleGrid cols={2} spacing="lg" verticalSpacing="lg">
        <TextInput
          value={profile.personalName}
          label="Personal name"
          placeholder="Personal Name"
        />
        <TextInput value={profile.email} label="Email" placeholder="Email" />
        <TextInput
          value={profile.password}
          label="Password"
          placeholder="Password"
        />
        <TextInput
          value={profile.confirmPassword}
          label="Confirm password"
          placeholder="qwerty123"
        />
        <TextInput
          value={profile.phone}
          label="Phone"
          placeholder="87077663169"
        />
        <TextInput
          value={profile.userJurisdiction}
          label="User Jurisdiction"
          placeholder="User Jurisdiction"
        />
        <TextInput
          value={profile.occupation}
          label="Occupation"
          placeholder="Company director"
        />
        <TextInput
          value={profile.birthday}
          label="Birthday"
          placeholder="1997-01-29"
        />
        <TextInput
          value={profile.residence}
          label="Residence"
          placeholder="Almaty"
        />
        <TextInput
          value={profile.nationality}
          label="Nationality"
          placeholder="Kazakhstan"
        />
        <TextInput
          value={profile.countryOfBirth}
          label="Country of birth"
          placeholder="Kazakhstan"
        />
        <TextInput
          value={profile.authStatus}
          label="Auth Status"
          placeholder="Approved"
        />
      </SimpleGrid>

      <Button>Save</Button>
    </Stack>
  )
}

export default Profile
