import { Modal, Title, Button } from '@mantine/core'

function ModalWallet({ opened, close }: any) {
  return (
    <Modal opened={opened} onClose={close} title="Connect Wallet">
      <div className="flex flex-col items-center">
        <Title order={5} className="mt-4">
          Select the wallet you wish to connect:
        </Title>
        <Button
          variant="subtle"
          radius="lg"
          size="lg"
          fullWidth
          className="mt-4"
        >
          Metamask
        </Button>
        <Button
          variant="subtle"
          radius="lg"
          size="lg"
          fullWidth
          className="mt-2"
        >
          Coinbase Wallet
        </Button>
        <Button
          variant="subtle"
          radius="lg"
          size="lg"
          fullWidth
          className="mt-2"
        >
          Wallet Connect
        </Button>
      </div>
    </Modal>
  )
}

export default ModalWallet
