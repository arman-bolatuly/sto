import type { FC } from 'react'

import { Loader, Text, Title } from '@mantine/core'

const ModalLoadingComponent: FC = () => {
  return (
    <div className="flex flex-col text-center space-y-2.5">
      <div className="flex justify-center">
        <Loader color="gray" />
      </div>

      <Title order={6} className="text-[#121F33] font-semibold text-[17px]">
        Идет загрузка данных
      </Title>

      <Text className="bodyDemibold text-[#9DA5B2]">
        Загрузка займет 1-2 минуты. Пожалуйста, подождите.
      </Text>
    </div>
  )
}

export default ModalLoadingComponent
