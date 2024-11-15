import { SimpleGrid, Button, Title, Text } from '@mantine/core'
import { motion } from 'framer-motion'

import { fadeIn } from '../../animationVariants'
import { Player } from '@lottiefiles/react-lottie-player'

const Steps = () => {
  return (
    <div className="h-screen flex flex-col justify-evenly" id="steps">
      <div>
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
        >
          <header className="text-center">
            <Title order={1} className="text-[#FFFFFF] mb-4">
              Простые шаги для токенизации
            </Title>

            <Text className="text-[#9DA5B2] caption1">
              Будьте в курсе последних новостей и трендов в мире криптовалют
            </Text>
          </header>
        </motion.div>
      </div>

      <SimpleGrid cols={3} spacing="xl">
        <motion.div
          variants={fadeIn('right', 0.6)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
        >
          <div>
            <div className="bg-white p-6 rounded-lg text-center flex flex-col space-y-6">
              <Title order={3} className="text-center">
                Зарегистрироваться
              </Title>

              <Player
                autoplay
                loop
                src="https://lottie.host/74fdb452-ef2f-43a2-bbc8-6bff15141060/bYpN2vEVUw.json"
                style={{ height: '100px', width: '100px' }}
              />

              <Text className="text-[#9DA5B2] bodyLongTextDemibold">
                Зарегистрируйтесь и начните свой путь к успеху.
              </Text>
              <Button variant="default">Как это работает</Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
        >
          <div>
            <div className="bg-white p-6 rounded-lg text-center flex flex-col space-y-6">
              <Title order={3} className="text-center">
                Создание цифровых активов
              </Title>

              <Player
                autoplay
                loop
                src="https://lottie.host/001845a5-bfc5-414d-b9d9-ea9317ae2c5d/aM2FZuXy6P.json"
                style={{ height: '100px', width: '100px' }}
              />

              <Text className="text-[#9DA5B2] bodyLongTextDemibold">
                Попрощайтесь со сложным кодированием и техническими барьерами.
              </Text>
              <Button variant="default">Как это работает</Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
        >
          <div>
            <div className="bg-white p-6 rounded-lg text-center flex flex-col">
              <Title order={3} className="text-center mb-6">
                Сбор средств
              </Title>

              <Player
                autoplay
                loop
                src="https://lottie.host/4b9b3b6c-6d0d-4955-b3b4-09497e08a438/Gd1rkabtuR.json"
                style={{ height: '100px', width: '100px' }}
              />

              <Text className="text-[#9DA5B2] bodyLongTextDemibold mt-6 mb-12">
                Охватите мировое сообщество инвесторов.
              </Text>

              <Button variant="default" className="mt-auto">
                Как это работает
              </Button>
            </div>
          </div>
        </motion.div>
      </SimpleGrid>
    </div>
  )
}

export default Steps
