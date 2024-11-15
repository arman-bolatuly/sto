import { SimpleGrid, Title, Text, Spoiler } from '@mantine/core'
import { motion } from 'framer-motion'
import { Player } from '@lottiefiles/react-lottie-player'
import CountUp from 'react-countup'

import { fadeIn } from '../../animationVariants'

export default function Future() {
  return (
    <div className="h-screen flex flex-col justify-evenly" id="future">
      <div>
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
        >
          <header className="text-center">
            <Title order={1} className="text-[#FFFFFF] mb-4">
              Будущее токенизации
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
          <div className="bg-white p-6 rounded-lg text-center flex flex-col">
            <Title order={3} className="text-center mb-6">
              <CountUp end={120} duration={3} delay={1} /> триллионов $
            </Title>

            <Player
              autoplay
              loop
              src="https://lottie.host/10dcd756-eea3-4a4b-b440-9c3f406517dd/olTs8o9nFu.json"
              style={{ height: '100px', width: '100px' }}
            />

            <Spoiler className="text-[#9DA5B2] bodyLongTextDemibold text-center"
              maxHeight={30}
              showLabel="Show more"
              hideLabel="Hide"
             >
                В настоящее время в обращении находится около 120 миллиардов
                долларов токенизированных денег, и многие компании,
                предоставляющие финансовые услуги, значительно расширили свои
                команды и возможности в области цифровых активов.
            </Spoiler>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
        >
          <div className="bg-white p-6 rounded-lg text-center flex flex-col space-y-6">
            <Title order={3} className="text-center">
              Рост x<CountUp end={80} duration={3} delay={1} />
            </Title>

            <Player
              autoplay
              loop
              src="https://lottie.host/b4016b15-3b60-455e-b6c8-8aef0b7d5b91/jakTIItltn.json"
              style={{ height: '100px', width: '100px' }}
            />

            <Spoiler className="text-[#9DA5B2] bodyLongTextDemibold text-center"
              maxHeight={30}
              showLabel="Show more"
              hideLabel="Hide"
             >
                Ожидается, что токенизация вырастет в 80 раз на частных рынках и
                достигнет почти 4 триллионов долларов США к 2030 году.
            </Spoiler>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
        >
          <div className="bg-white p-6 rounded-lg text-center flex flex-col">
            <Title order={3} className="text-center mb-6">
              {/* 4-5 триллионов долларов */}
              <CountUp end={5} duration={3} delay={1} /> триллионов $
            </Title>

            <Player
              autoplay
              loop
              src="https://lottie.host/a4914292-f666-4af6-a2c6-119d8aba1b8a/R3UdrrgYdv.json"
              style={{ height: '100px', width: '100px' }}
            />

            <Spoiler className="text-[#9DA5B2] bodyLongTextDemibold text-center"
              maxHeight={30}
              showLabel="Show more"
              hideLabel="Hide"
             >
                Аналитики прогнозируют, что к 2030 году может быть выпущено
                токенизированных цифровых ценных бумаг на сумму от 4 до 5
                триллионов долларов США.
            </Spoiler>
          </div>
        </motion.div>
      </SimpleGrid>
    </div>
  )
}
