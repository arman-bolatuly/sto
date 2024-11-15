import type { FC } from 'react'

import { Button, Text, Title } from '@mantine/core'

const ModalErrorComponent: FC<any> = ({ update }) => {
  return (
    <div className="flex flex-col text-center space-y-2.5">
      <Title order={6} className="text-[#F14646]">
        Ошибка загрузки данных
      </Title>

      <Text className="bodyDemibold text-[#9DA5B2]">
        Попробуйте обновить для повторной загрузки данных.
      </Text>

      <div>
        <Button variant="default" onClick={() => update()}>
          Обновить
        </Button>
      </div>
    </div>
  )
}

export default ModalErrorComponent
