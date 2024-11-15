import { useState } from 'react'
import { Tabs } from '@mantine/core'

import User from './User'
import Admin from './Admin'
import classes from './Tabs.module.css'

const Registration = () => {
  const [activeTab, setActiveTab] = useState<string | null>('user')

  return (
    <Tabs
      variant="unstyled"
      classNames={classes}
      value={activeTab}
      onChange={setActiveTab}
    >
      <Tabs.List grow mb={100}>
        <Tabs.Tab value="user" className={`${activeTab === ''}`}>
          User registration
        </Tabs.Tab>
        <Tabs.Tab value="admin">Admin registration</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="user" pt="xs">
        <User />
      </Tabs.Panel>

      <Tabs.Panel value="admin" pt="xs">
        <Admin />
      </Tabs.Panel>
    </Tabs>
  )
}

export default Registration
