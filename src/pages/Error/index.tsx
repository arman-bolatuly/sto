import type { FC } from 'react'

import { useRouteError } from 'react-router-dom'

interface IError {
  statusText?: string
  message?: string
}

const ErrorPage: FC = () => {
  const error = useRouteError() as IError

  return (
    <div className="flex flex-col items-center mt-40 space-y-10">
      <h1>Упс!</h1>

      <h2>Извините, произошла непредвиденная ошибка.</h2>

      <h3>{error?.statusText || error?.message || 'Неизвестная ошибка'}</h3>
    </div>
  )
}

export default ErrorPage
