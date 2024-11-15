import { Button, Title } from '@mantine/core'

import FirstContainer from './First'
import { useDisclosure } from '@mantine/hooks'
import ModalWallet from './ModalWallet'

function Wallets() {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <div className="flex flex-col space-y-4">
      <Title order={3} c="#FFFFFF">
        Wallets
      </Title>

      <div>
        <Button variant="filled" color="blue" onClick={open}>
          Connect Wallet
        </Button>
      </div>

      <FirstContainer />

      <ModalWallet opened={opened} close={close} />
    </div>
  )
}

export default Wallets
