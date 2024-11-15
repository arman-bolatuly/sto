import {
  Text,
  Button,
  CopyButton,
  Tooltip,
  Modal,
  Badge,
  Stepper,
} from '@mantine/core'
import { IconCopy, IconPlus } from '@tabler/icons-react'
import { useDisclosure } from '@mantine/hooks'
import { useState } from 'react'

const WalletAddress = ({ address }: { address: string }) => (
  <CopyButton value={address}>
    {({ copied, copy }) => (
      <Tooltip
        label={copied ? 'Copied' : 'Click to copy'}
        withArrow
        position="right"
      >
        <div className="flex items-center cursor-pointer" onClick={copy}>
          <Text>{address}</Text>
          <IconCopy stroke={2} color={copied ? 'green' : 'gray'} />
        </div>
      </Tooltip>
    )}
  </CopyButton>
)

const WalletOverview = () => {
  const [opened, { open, close }] = useDisclosure(false)
  const walletAddress = '0x5eceb3cce2755156379f764ee713d4f33c03a11c'
  const [active, setActive] = useState(1)

  return (
    <div className="w-full bg-white p-4 flex justify-between items-center rounded-md">
      <div>
        <Text size="lg">Metamask</Text>
        <WalletAddress address={walletAddress} />
        <Badge variant="light" radius="sm" className="text-[#535353]">
          No assets are associated with this wallet.
        </Badge>
      </div>

      <Button variant="filled" color="blue" onClick={open}>
        Add Asset
        <IconPlus stroke={2} className="ml-2" />
      </Button>

      <Modal opened={opened} onClose={close} title="Add Asset">
        <Stepper active={active} onStepClick={setActive} className="mt-2">
          <Stepper.Step label="1. Asset">
            <Text className="text-[#535353] bodyLongTextDemibold">
              You have no investments yet.
            </Text>
          </Stepper.Step>
          <Stepper.Step label="2. Authorize">
            <Text className="text-[#535353] bodyLongTextDemibold">
              If you want to authorize a wallet for a peer-to-peer transfer,
              please contact the issuer of that asset.
            </Text>
          </Stepper.Step>
        </Stepper>
      </Modal>
    </div>
  )
}

export default WalletOverview
