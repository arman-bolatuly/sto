import { Modal, Text, Group, Button, FocusTrap } from '@mantine/core'

const CustomDeleteModal = ({ opened, close, title, deleteFunction }: any) => {
  return (
    <Modal opened={opened} onClose={close} title={title}>
      <FocusTrap.InitialFocus />

      <Text className="bodyDemibold mb-5 text-[#9DA5B2]">
        Are you sure you want to delete this item? This action is irreversible
      </Text>

      <Group justify="end">
        <Button onClick={() => deleteFunction()} variant="danger">
          Delete
        </Button>

        <Button onClick={close} variant="default">
          Cancel
        </Button>
      </Group>
    </Modal>
  )
}

export default CustomDeleteModal
