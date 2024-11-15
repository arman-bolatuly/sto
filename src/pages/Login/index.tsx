import { useEffect } from 'react'
import { useSnapshot } from 'valtio'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Player } from '@lottiefiles/react-lottie-player'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Text, Title, TextInput, Button, Loader } from '@mantine/core'

import {
  adminLogin,
  getAccount,
  // login
} from '../../apiService/authService'
import { store } from '../../store'
import { showNotification } from '@mantine/notifications'

const Login = () => {
  const navigate = useNavigate()

  const { isAuth } = useSnapshot(store.auth)

  const {
    register,
    setFocus,
    formState: { errors },
    handleSubmit,
  } = useForm<any>()

  const { data: accData, isLoading: isAccLoading } = useQuery({
    queryKey: ['adm/me'],
    queryFn: getAccount,
    enabled: !isAuth,
    retry: false,
  })

  useEffect(() => {
    if (!isAccLoading && accData) {
      store.auth.isAuth = true
      navigate('/')
    }
  }, [accData, isAccLoading, navigate])

  const mutation = useMutation({
    mutationFn: (data: any) => {
      // return login(data)
      return adminLogin(data)
    },
    onSuccess: (data: any) => {
      localStorage.setItem('token', data.data.token)
      store.auth.isAuth = true
      navigate('/')
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
    setFocus('email')
  }, [setFocus])

  if (isAccLoading) {
    return (
      <div className="flex justify-center my-40">
        <Loader type="dots" size={35} />
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-between items-center h-screen p-10 bg-[#0d1726]">
      <div className="absolute right-20 top-[25%]">
        <Player
          autoplay
          loop
          src="https://lottie.host/c7c55151-5939-4dba-b5f5-ad8e14d34129/kPFycC4fTK.json"
          style={{ height: '500px', width: '500px' }}
        />
      </div>

      <Title order={2} mb={24} c="#FFFFFF">
        TokenX
      </Title>

      <div className="flex flex-col space-y-6 w-[400px] bg-[#FFFFFF] py-6 px-4 rounded-xl">
        <Title order={4} className="text-center">
          Вход в аккаунт
        </Title>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-6"
        >
          {/* <TextInput
            label="Email"
            {...register('email', {
              required: 'Логин не должен быть пустым',
            })}
            placeholder="Email"
            error={errors?.email && `${errors?.email?.message}`}
          /> */}

          <TextInput
            label="Username"
            {...register('username', {
              required: 'Логин не должен быть пустым',
            })}
            placeholder="Username"
            error={errors?.username && `${errors?.username?.message}`}
          />

          <TextInput
            label="Пароль"
            {...register('password', {
              required: 'Пароль не должен быть пустым',
            })}
            placeholder="Пароль"
            type="password"
            error={errors?.password && `${errors?.password?.message}`}
          />

          <Button type="submit">Войти</Button>

          <Button variant="light" onClick={() => navigate('/registration')}>
            Зарегистрироваться
          </Button>
        </form>
      </div>

      <Text mt={24} c="green">
        © 2024 TokenX. All rights reserved.
      </Text>
    </div>
  )
}

export default Login
