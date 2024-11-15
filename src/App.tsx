import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/notifications/styles.css'

import { useEffect } from 'react'
import { useSnapshot } from 'valtio'
import { Loader } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import { store } from './store'
import { getAccount } from './apiService/authService'
import Layouts from './components/layouts/Layouts'

function App() {
  const navigate = useNavigate()

  const { isAuth } = useSnapshot(store.auth)

  const { isLoading, data } = useQuery({
    queryKey: ['adm/me'],
    queryFn: getAccount,
    enabled: !isAuth,
    retry: false,
  })

  useEffect(() => {
    if (!isLoading && !data && !isAuth) {
      navigate('/login')
    }
  }, [data, isAuth, isLoading, navigate])

  if (isLoading) {
    return (
      <div className="flex justify-center my-40">
        <Loader type="dots" size={35} />
      </div>
    )
  }

  return <Layouts />
}

export default App
