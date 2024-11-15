import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { useMutation } from '@tanstack/react-query'
import { TextInput, Button } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { Player } from '@lottiefiles/react-lottie-player'

import { adminRegistration } from '../../apiService/authService'

const Admin = () => {
  const {
    register,
    setFocus,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<any>({
    defaultValues: {
      username: '',
      password: '',
      password2: '',
    },
  })

  const mutation = useMutation({
    mutationFn: (data: any) => {
      return adminRegistration({ ...data, role: 'admin' })
    },
    onSuccess: () => {
      reset()
      showNotification({
        title: 'Успешно зарегистрированы',
        message: 'Новый пользователь успешно зарегистрирован',
        color: 'green',
      })
    },
    onError: (err: any) => {
      showNotification({
        title: 'Ошибка',
        message: err?.response?.data?.message,
        color: 'red',
      })
    },
  })

  const onSubmit = (data: any) => {
    mutation.mutate(data)
  }

  useEffect(() => {
    setFocus('username')
  }, [setFocus])

  return (
    <div className="flex justify-around items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-6 w-[400px] bg-[#FFFFFF] py-6 px-4 rounded-xl"
      >
        <TextInput
          label="Username"
          {...register('username', {
            required: 'Логин не должен быть пустым',
          })}
          placeholder="Username"
          error={errors?.email && `${errors?.email?.message}`}
        />

        <TextInput
          label="Пароль"
          {...register('password', {
            required: 'Пароль не должен быть пустым',
          })}
          placeholder="Создать пароль"
          type="Password"
          error={errors?.password && `${errors?.password?.message}`}
        />

        <TextInput
          label="Подтвердите пароль"
          {...register('password2', {
            required: 'Пароль не должен быть пустым',
          })}
          placeholder="Подтвердите пароль"
          type="Password"
          error={errors?.password && `${errors?.password?.message}`}
        />

        <Button type="submit">Регистрация</Button>
      </form>

      <Player
        autoplay
        loop
        src="https:lottie.host/56aa837c-62ce-47c8-adbc-fa1d1b1fec77/r9CS33sthi.json"
        style={{ height: '500px', width: '500px' }}
      />
    </div>
  )
}

export default Admin
