import { Title, Text, Spoiler } from '@mantine/core'
import { Player } from '@lottiefiles/react-lottie-player'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

import { fadeIn } from '../../animationVariants'

const Cryptocurrencies = () => {
  return (
    <div
      className="flex flex-col h-screen justify-evenly"
      id="cryptocurrencies"
    >
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
              Crypto Info
            </Title>

            <Text className="text-[#9DA5B2] caption1">
              Будьте в курсе последних новостей и трендов в мире криптовалют
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
          className="flex-1 mb-8 xl:mb-0 w-1/2"
        >
          <div className="flex flex-col space-y-6 w-[500px] bg-[#FFFFFF] py-6 px-4 rounded-xl">
            <Title order={3} className="text-center">
              Популярные криптовалюты
            </Title>

            <section className="flex flex-col space-y-4 text-center">
              <div>
                <Title order={6} className="text-center mb-2">
                  Что такое криптовалюта?
                </Title>
                <Spoiler className="text-[#9DA5B2] bodyLongTextDemibold text-center"
                   maxHeight={30}
                   showLabel="Show more"
                   hideLabel="Hide"
                 >
                    Криптовалюта — это вид цифровой или виртуальной валюты,
                    который использует криптографию для обеспечения безопасности.
                    Она работает в децентрализованных сетях, использующих
                    технологию блокчейн.
                </Spoiler>
              </div>

              <TypeAnimation
                sequence={[
                  'Топ криптовалют: Биткоин (BTC)',
                  1000,
                  'Топ криптовалют: Эфириум (ETH)',
                  1000,
                  'Топ криптовалют: Рипл (XRP)',
                  1000,
                  'Топ криптовалют: Лайткоин (LTC)',
                  1000,
                  'Топ криптовалют: Кардано (ADA)',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: '1.5em',
                  display: 'inline-block',
                  height: '50px',
                }}
                repeat={Infinity}
              />

              {/* <div>
              <Title order={6} mb={8}>
                Топ криптовалют:
              </Title>

              <div className="smallDemibold">
                <Text>Биткоин (BTC)</Text>
                <Text>Эфириум (ETH)</Text>
                <Text>Рипл (XRP)</Text>
                <Text>Лайткоин (LTC)</Text>
                <Text>Кардано (ADA)</Text>
              </div>
            </div> */}
            </section>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className="flex-1 mb-8 xl:mb-0 w-1/2"
        >
          <Player
            autoplay
            loop
            src="https://lottie.host/13a2bcf1-c1e6-41d0-8b27-de37405dd3b1/awBQyEEOl4.json"
            style={{ height: '400px', width: '400px' }}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Cryptocurrencies
