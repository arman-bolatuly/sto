import { Title, Text, SimpleGrid, Spoiler } from '@mantine/core'
import { Player } from '@lottiefiles/react-lottie-player'
import { motion } from 'framer-motion'

import { fadeIn } from '../../animationVariants'

const First = () => {
  return (
    <section
      className="flex flex-col h-screen justify-evenly mx-60"
      id="STOMarket"
    >
      <div>
        <motion.div
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className="flex-1 mb-8 xl:mb-0"
        >
          <header className="text-center">
            <Title order={1} className="text-[#FFFFFF] mb-4">
              ОБЗОР рынка Security Token Offering (STO)
            </Title>

            <Text className="text-[#9DA5B2] caption1">
              Будьте в курсе последних новостей и трендов в мире криптовалют
            </Text>
          </header>
        </motion.div>
      </div>

      <SimpleGrid cols={3} spacing="xl">
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="bg-white p-6 rounded-lg text-center flex flex-col">
            <Title order={3} className="text-center">
              Текущие тенденции и рост рынка
            </Title>

            <Player
              autoplay
              loop
              src="https://lottie.host/0e96aee9-d9c4-4077-957e-b2794048b6f9/9izyAC9i5q.json"
              style={{ height: '110px', width: '110px' }}
            />

            <Spoiler
              className="text-[#9DA5B2] bodyLongTextDemibold"
              maxHeight={30}
              showLabel="Show more"
              hideLabel="Hide"
            >
              STO привлекают внимание регуляторов, поскольку они предлагают
              более безопасную альтернативу ICO. Прозрачность и соблюдение
              нормативных требований являются основными преимуществами STO. STO
              набирают популярность в таких регионах, как США, Европа и
              Азиатско-Тихоокеанский регион, где существуют четкие правила
              регулирования.
            </Spoiler>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
        >
          <div className="bg-white p-6 rounded-lg text-center flex flex-col space-y-6">
            <Title order={3} className="text-center mb-6">
              Объем рынка STO в 2023 году
            </Title>

            <Player
              autoplay
              loop
              src="https://lottie.host/6b77a5da-32d0-4112-a304-028e0e941105/1YMVpnE0UF.json"
              style={{ height: '110px', width: '110px' }}
            />

            <Spoiler
              className="text-[#9DA5B2] bodyLongTextDemibold"
              maxHeight={30}
              showLabel="Show more"
              hideLabel="Hide"
            >
              Оценивался в $3,5 млрд и продолжает расти благодаря новым
              регуляторным стандартам и принятию технологии токенизации активов.
              Ожидается, что рынок токенизации активов вырастет до $1,5 трлн в
              ближайшие 6 лет.
            </Spoiler>

            {/* <div className="flex flex-col space-y-4 mt-6">
              <Title order={3} className="text-center">
                Токенизация недвижимости
              </Title>

              <Spoiler className="text-[#9DA5B2] bodyLongTextDemibold"
               maxHeight={30}
               showLabel="Show more"
               hideLabel="Hide"
            >
                Ожидается, что к 2027 году токенизированная недвижимость
                составит более $2 трлн на глобальном рынке.              
            </Spoiler>
            </div> */}
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
        >
          <div className="bg-white p-6 rounded-lg text-center flex flex-col">
            <Title order={3} className="text-center mb-6">
              Перспективы развития
            </Title>

            <Player
              autoplay
              loop
              src="https://lottie.host/ca4ae6c9-c334-4490-a8b0-8d1cbd8dea84/RkyoTW7F3e.json"
              style={{ height: '110px', width: '110px' }}
            />

            <Spoiler
              className="text-[#9DA5B2] bodyLongTextDemibold"
              maxHeight={30}
              showLabel="Show more"
              hideLabel="Hide"
            >
              Институциональные инвесторы заинтересованы в STO из-за их
              безопасности, обеспеченности реальными активами, доходами,
              связанных в соответствии с требованиямя законодательства, что
              снижает риски мошенничества. По мере развития STO будет расти
              число вторичных рынков для торговли security токенами, что
              увеличит их ликвидность.
            </Spoiler>
          </div>
        </motion.div>
      </SimpleGrid>
    </section>
  )
}

export default First
