import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { showNotification } from '@mantine/notifications'
import { Button, Modal, TextInput, FocusTrap, Textarea } from '@mantine/core'

import { queryClient } from '../../../queryClient'
import { createToken, updateToken } from '../../apiService/tokensService'

const CreateModal = ({ opened, close, currToken, caseId }: any) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<any>({
    defaultValues: {
      id: currToken?.id || '',
      name: currToken?.name || '',
      type: currToken?.type || '',
      symbol: currToken?.symbol || '',
      price: currToken?.price || '',
      issuer_number: currToken?.issuer_number || '',
      company_area: currToken?.company_area || '',
      company_capital: currToken?.company_capital || '',
      description: currToken?.description || '',
    },
  })

  const mutation = useMutation({
    mutationFn: (data: any) => {
      return currToken?.id
        ? updateToken({
            ...data,
            id: currToken?.id,
            case_id: Number(caseId),
            price: Number(data?.price),
            issuer_number: Number(data?.issuer_number),
            company_capital: Number(data?.company_capital),
          })
        : createToken({
            ...data,
            case_id: Number(caseId),
            price: Number(data?.price),
            id: undefined,
            issuer_number: Number(data?.issuer_number),
            company_capital: Number(data?.company_capital),
          })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['adm/tokens'] as const,
      })
      close()
      showNotification({
        title: currToken?.id ? 'Token updated' : 'Token created',
        message: currToken?.id
          ? 'Token has been updated successfully'
          : 'Token has been created successfully',
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
      name: currToken?.name || '',
      type: currToken?.type || '',
      symbol: currToken?.symbol || '',
      price: currToken?.price || '',
      issuer_number: currToken?.issuer_number || '',
      company_area: currToken?.company_area || '',
      company_capital: currToken?.company_capital || '',
      description: currToken?.description || '',
    })
  }, [
    currToken?.id,
    currToken?.name,
    currToken?.type,
    currToken?.symbol,
    currToken?.price,
    currToken?.issuer_number,
    currToken?.company_area,
    currToken?.company_capital,
    currToken?.description,
    reset,
  ])

  return (
    <Modal
      opened={opened}
      onClose={close}
      title={currToken?.id ? 'Edit token' : 'Create token'}
      size={'lg'}
    >
      <FocusTrap.InitialFocus />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-6"
      >
        <div className="flex justify-between items-center space-x-6">
          <TextInput
            placeholder="Token Name"
            label="Token name"
            {...register('name', { required: 'Token name is required' })}
            error={errors?.name && `${errors?.name?.message}`}
            data-autofocus
            w={'100%'}
          />

          <TextInput
            placeholder="Token Type"
            label="Token type"
            {...register('type', { required: 'Token type is required' })}
            error={errors?.type && `${errors?.type?.message}`}
            w={'100%'}
          />
        </div>

        <div className="flex justify-between space-x-6 items-center">
          <TextInput
            placeholder="Token Symbol"
            label="Token symbol"
            {...register('symbol', { required: 'Token symbol is required' })}
            error={errors?.symbol && `${errors?.symbol?.message}`}
            w={'100%'}
          />

          <TextInput
            placeholder="Token Price"
            label="Token price"
            {...register('price', { required: 'Token price is required' })}
            error={errors?.price && `${errors?.price?.message}`}
            w={'100%'}
          />
        </div>

        <div className="flex justify-between space-x-6 items-center">
          <TextInput
            placeholder="Issuer Number"
            label="Issuer number"
            {...register('issuer_number', {
              required: 'Issuer number is required',
            })}
            error={errors?.issuer_number && `${errors?.issuer_number?.message}`}
            w={'100%'}
          />

          <TextInput
            placeholder="Company Area"
            label="Company area"
            {...register('company_area', {
              required: 'Company area is required',
            })}
            error={errors?.company_area && `${errors?.company_area?.message}`}
            w={'100%'}
          />
        </div>

        <div className="flex justify-between space-x-6 items-start">
          <TextInput
            placeholder="Company Capital"
            label="Company capital"
            {...register('company_capital', {
              required: 'Company capital is required',
            })}
            error={
              errors?.company_capital && `${errors?.company_capital?.message}`
            }
            w={'100%'}
          />

          <Textarea
            placeholder="Description"
            label="Description"
            {...register('description', {
              required: 'Description is required',
            })}
            error={errors?.description && `${errors?.description?.message}`}
            w={'100%'}
            size="md"
            autosize
            minRows={1}
            maxRows={5}
          />
        </div>

        <Button type="submit" className="mt-4" disabled={mutation.isPending}>
          {currToken?.id ? 'Update' : 'Create'} Token
        </Button>
      </form>
    </Modal>
  )
}

export default CreateModal
