import { Player } from '@lottiefiles/react-lottie-player'
import { Title, Text, Blockquote, Spoiler } from '@mantine/core'
import { motion } from 'framer-motion'

import { fadeIn } from '../../animationVariants'
import { IconInfoCircle } from '@tabler/icons-react'
// import { TypeAnimation } from 'react-type-animation'

const Tokenization2 = () => {
  return (
    <div className="flex flex-col h-screen justify-evenly" id="tokenize2">
      <div>
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className="flex-1 mb-8 xl:mb-0"
        >
          <header className="text-center">
            <Title order={1} className="text-[#FFFFFF] mb-4">
              Токенизация
            </Title>

            <Text className="text-[#9DA5B2] caption1">
              Узнайте, как токенизация меняет рынок активов.
            </Text>
          </header>
        </motion.div>
      </div>

      <div className="w-full flex justify-between items-center">
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className="flex-1 mb-8 xl:mb-0"
        >
          <Player
            autoplay
            loop
            src="https://lottie.host/09bbeb85-c060-4882-93c2-8f8a381b522f/t3H3CdzSDF.json"
            style={{ height: '400px', width: '400px' }}
          />
        </motion.div>

        <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className="flex-1 mb-8 xl:mb-0"
        >
          <div className="flex flex-col space-y-6 w-[600px] bg-[#FFFFFF] py-6 px-4 rounded-xl">
            <Title order={3} className="text-center">
              Что такое токенизация?
            </Title>

            <section className="flex flex-col space-y-4">
              <div>
                <Title order={6} className="text-center mb-2">
                  Основные аспекты токенизации
                </Title>

                <Blockquote
                  color="blue"
                  // cite="–"
                  icon={<IconInfoCircle />}
                  mt="xl"
                  m={24}
                >

                    <Spoiler className="text-[#9DA5B2] bodyLongTextDemibold"
                      maxHeight={30}
                      showLabel="Show more"
                      hideLabel="Hide"
                    >
                      Проще говоря, токенизация — это процесс выпуска цифрового
                      представления актива на блокчейне. Он включает в себя
                      преобразование права собственности на актив, например, на
                      произведение искусства, товар или акции компании, в цифровой
                      токен, хранящийся на блокчейне. Токен представляет актив и
                      используется для отслеживания и передачи права собственности
                      на этот актив.
                      Токенизация также обеспечивает доступ к совершенно новым
                      финансовым рынкам, позволяя активам, которые исторически
                      были разрознены в разрозненных средах, существовать в общем
                      пространстве.
                      В конечном итоге токенизация направлена на обеспечение
                      эффективности, ликвидности и доступности традиционных, ранее
                      неликвидных рынков.
                    </Spoiler>

                </Blockquote>
              </div>

              {/* <TypeAnimation
                sequence={[
                  'Преимущества блокчейна: Безопасность',
                  2000,
                  'Преимущества блокчейна: Прозрачность',
                  2000,
                  'Преимущества блокчейна: Снижение расходов',
                  2000,
                  'Преимущества блокчейна: Скорость',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: '1.5em',
                  display: 'inline-block',
                  height: '50px',
                }}
                repeat={Infinity}
              /> */}
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Tokenization2
