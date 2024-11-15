import { SimpleGrid, Title, Text, Spoiler } from '@mantine/core'
import { motion } from 'framer-motion'
import { Player } from '@lottiefiles/react-lottie-player'

import { fadeIn } from '../../animationVariants'

export default function RWA() {
  return (
    <div className="h-screen flex flex-col justify-evenly" id="RWA">
      <div>
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
        >
          <header className="text-center">
            <Title order={1} className="text-[#FFFFFF] mb-4">
              Преимущества токенизированных RWA
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
              Улучшенная ликвидность
            </Title>

            <Player
              autoplay
              loop
              src="https://lottie.host/6b77a5da-32d0-4112-a304-028e0e941105/1YMVpnE0UF.json"
              style={{ height: '100px', width: '100px' }}
            />

            <Spoiler className="text-[#9DA5B2] bodyLongTextDemibold"
               maxHeight={30}
               showLabel="Show more"
               hideLabel="Hide"
            >
                 Традиционные реальные активы, такие как недвижимость или предметы
                 искусства, часто не обладают ликвидностью. Токенизация
                 обеспечивает дробное владение, позволяя инвесторам покупать и
                 продавать цифровые токены, что повышает доступность и ликвидность
                 активов.              
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
              Доступность и инклюзивность
            </Title>

            <Player
              autoplay
              loop
              src="https://lottie.host/0e96aee9-d9c4-4077-957e-b2794048b6f9/9izyAC9i5q.json"
              style={{ height: '100px', width: '100px' }}
            />

            <Spoiler className="text-[#9DA5B2] bodyLongTextDemibold"
              maxHeight={30}
              showLabel="Show more"
              hideLabel="Hide"
            >
                Токенизация RWA демократизирует доступ к инвестиционным
                возможностям, устраняя барьеры для входа. Это позволяет более
                широкому кругу инвесторов участвовать в классах активов, которые
                ранее были доступны только состоятельным частным лицам или
                учреждениям.              
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
              Прозрачность и доверие
            </Title>

            <Player
              autoplay
              loop
              src="https://lottie.host/ca4ae6c9-c334-4490-a8b0-8d1cbd8dea84/RkyoTW7F3e.json"
              style={{ height: '100px', width: '100px' }}
            />

            <Spoiler className="text-[#9DA5B2] bodyLongTextDemibold"
              maxHeight={30}
              showLabel="Show more"
              hideLabel="Hide"
             >
                Блокчейны обеспечивают безопасность и прозрачность. Подделка
                данных блокчейна невероятно сложна, и инвесторы получают полную
                прозрачность прошлых транзакций, а также неоспоримое
                доказательство права собственности.
            </Spoiler>
          </div>
        </motion.div>
      </SimpleGrid>
    </div>
  )
}
