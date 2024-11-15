import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { Button, Modal, TextInput, FocusTrap } from '@mantine/core'
import { showNotification } from '@mantine/notifications'

import { queryClient } from '../../../queryClient'
import { createCase, updateCase } from '../../apiService/casesService'

const CreateModal = ({ opened, close, currCase }: any) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<any>({
    defaultValues: {
      case_name: currCase?.case_name || '',
    },
  })

  const mutation = useMutation({
    mutationFn: (data: any) => {
      return currCase?.id
        ? updateCase({ ...data, id: currCase?.id })
        : createCase({ ...data })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['adm/cases'] as const,
      })
      close()
      showNotification({
        title: 'Case created',
        message: 'Case has been created successfully',
        color: 'green',
      })
    },
    onError: (err: any) => {
      showNotification({
        title: 'Error',
        message: err?.response?.data?.message,
        color: 'red',
      })
    },
  })

  const onSubmit = (data: any) => {
    mutation.mutate(data)
  }

  useEffect(() => {
    reset({
      case_name: currCase?.case_name || '',
    })
  }, [currCase?.id, reset])

  return (
    <Modal
      opened={opened}
      onClose={close}
      title={currCase?.id ? 'Edit Case' : 'Create Case'}
    >
      <FocusTrap.InitialFocus />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-6"
      >
        <TextInput
          placeholder="Case Name"
          label="Case name"
          {...register('case_name', { required: 'Case name is required' })}
          error={errors?.case_name && `${errors?.case_name?.message}`}
          data-autofocus
        />

        <Button type="submit" className="mt-4" disabled={mutation.isPending}>
          {currCase?.id ? 'Update' : 'Create'} Case
        </Button>
      </form>
    </Modal>
  )
}

export default CreateModal
