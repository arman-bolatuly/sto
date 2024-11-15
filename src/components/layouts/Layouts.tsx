import {
  AppShell,
  Burger,
  Group,
  Avatar,
  Text,
  Title,
  ActionIcon,
  Menu,
  rem,
  UnstyledButton,
  SegmentedControl,
} from '@mantine/core'
import { forwardRef, useState } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { useNavigate, Outlet } from 'react-router-dom'
import {
  IconSettings,
  IconBell,
  IconChevronRight,
  IconArrowsLeftRight,
  IconSearch,
  IconMessageCircle,
  IconUserCircle,
  IconLogout,
} from '@tabler/icons-react'

import SideMenu from './SideMenu'
import UserSideMenu from './UserSideMenu'

interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  image: string
  name: string
  email: string
  icon?: React.ReactNode
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ image, name, email, icon, ...others }: UserButtonProps, ref) => (
    <UnstyledButton
      ref={ref}
      style={{
        padding: 'var(--mantine-spacing-md)',
        color: 'var(--mantine-color-text)',
        borderRadius: 'var(--mantine-radius-sm)',
      }}
      {...others}
    >
      <Group>
        <Avatar src={image} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500} c="#FFFFFF">
            {name}
          </Text>

          <Text c="dimmed" size="xs">
            {email}
          </Text>
        </div>

        {icon || <IconChevronRight size="1rem" />}
      </Group>
    </UnstyledButton>
  ),
)

const Layouts = () => {
  const navigate = useNavigate()

  const [value, setValue] = useState('user')

  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure()
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true)

  const isAuth = true
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
      bg={'#0D1D29'}
    >
      <AppShell.Header bg={'#0D1D29'}>
        <Group h="100%" px="md">
          {isAuth && (
            <>
              <Burger
                opened={mobileOpened}
                onClick={toggleMobile}
                hiddenFrom="sm"
                size="sm"
                color="#FFFFFF"
              />
              <Burger
                opened={desktopOpened}
                onClick={toggleDesktop}
                visibleFrom="sm"
                size="sm"
                color="#FFFFFF"
              />
            </>
          )}

          <Title
            order={3}
            c="#FFFFFF"
            className="cursor-pointer text-[#FFFFFF]"
            onClick={() => navigate('/home')}
          >
            TokenX
          </Title>

          <div className="flex items-center space-x-2 ml-auto">
            <SegmentedControl
              color="teal"
              value={value}
              onChange={setValue}
              data={[
                { label: 'Admin', value: 'admin' },
                { label: 'User', value: 'user' },
              ]}
            />

            <ActionIcon variant="transparent">
              <IconBell color="#FFFFFF" />
            </ActionIcon>

            <ActionIcon variant="transparent">
              <IconSettings color="#FFFFFF" />
            </ActionIcon>

            <Menu withArrow>
              <Menu.Target>
                <UserButton
                  image="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
                  name="Harriette Spoonlicker"
                  email="hspoonlicker@outlook.com"
                />
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Application</Menu.Label>
                <Menu.Item
                  leftSection={
                    <IconUserCircle
                      style={{ width: rem(14), height: rem(14) }}
                    />
                  }
                  onClick={() => navigate('/profile')}
                >
                  Profile
                </Menu.Item>
                <Menu.Item
                  leftSection={
                    <IconSettings style={{ width: rem(14), height: rem(14) }} />
                  }
                >
                  Settings
                </Menu.Item>
                <Menu.Item
                  leftSection={
                    <IconMessageCircle
                      style={{ width: rem(14), height: rem(14) }}
                    />
                  }
                >
                  Messages
                </Menu.Item>
                <Menu.Item
                  leftSection={
                    <IconSearch style={{ width: rem(14), height: rem(14) }} />
                  }
                  rightSection={
                    <Text size="xs" c="dimmed">
                      ⌘K
                    </Text>
                  }
                >
                  Search
                </Menu.Item>

                <Menu.Divider />

                <Menu.Label>Danger zone</Menu.Label>
                <Menu.Item
                  leftSection={
                    <IconArrowsLeftRight
                      style={{ width: rem(14), height: rem(14) }}
                    />
                  }
                >
                  Transfer my data
                </Menu.Item>
                <Menu.Item
                  color="red"
                  leftSection={
                    <IconLogout style={{ width: rem(14), height: rem(14) }} />
                  }
                >
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
        </Group>
      </AppShell.Header>

      {isAuth && (
        <AppShell.Navbar p="md" bg={'#122839'}>
          <div
            className="flex flex-col space-x-4 my-4 cursor-pointer"
            onClick={() => navigate('/profile')}
          >
            <Avatar
              size={100}
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
              mx={'auto'}
              pb={4}
            />

            <Title order={3} c="#FFFFFF" mx={'auto'}>
              John Doe
            </Title>

            <Text c="#087f5b" mx={'auto'} className="smallDemibold">
              VP Fancy Admin
            </Text>
          </div>

          {value === 'admin' ? <SideMenu /> : <UserSideMenu />}
        </AppShell.Navbar>
      )}

      <AppShell.Main
        bg={'#0D1D29'}
        // className="bg-gradient-to-b from-[#0D1D29] via-[#0D1D29] to-[#0D1D29]"
        // p={8}
        // m={16}
      >
        <div className="p-4 overflow-auto">
          <Outlet />
        </div>
      </AppShell.Main>
    </AppShell>
  )
}

export default Layouts
