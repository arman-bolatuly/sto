import { Title, Text, SimpleGrid, Blockquote } from '@mantine/core'
import { IconInfoCircle } from '@tabler/icons-react'
import { motion } from 'framer-motion'

import { fadeIn } from '../../animationVariants'

const RealAssets = () => {
  return (
    <section
      className="flex flex-col h-screen justify-evenly mx-60"
      id="realAssets"
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
              Инвестируйте в реальные активы с STO of Kazakhstan
            </Title>

            <Text className="text-[#9DA5B2] caption1">
              Мы ставим в приоритет безопасность инвестиций Вся деятельность
              осуществляется в рамках полученных лицензий и политик МФЦА
              (Международный финансовый центр Астаны)
            </Text>
          </header>
        </motion.div>
      </div>

      <SimpleGrid cols={2} spacing="xl">
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="bg-white p-6 rounded-lg text-center flex flex-col">
            <Blockquote
              color="blue"
              // cite="– Forrest Gump"
              icon={<IconInfoCircle />}
              h={150}
            >
              Токены STO выпущенные на нашей платформе, подтверждаются реальными
              активами.
            </Blockquote>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="bg-white p-6 rounded-lg text-center flex flex-col">
            <Blockquote
              color="blue"
              // cite="– Forrest Gump"
              icon={<IconInfoCircle />}
              h={150}
            >
              STO обеспечивает доступ к инвестициям и активам для пользователей
              по всему миру.
            </Blockquote>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="bg-white p-6 rounded-lg text-center flex flex-col">
            <Blockquote
              color="blue"
              // cite="– Forrest Gump"
              icon={<IconInfoCircle />}
              h={150}
            >
              Токены STO дают владельцам право на акции, реальные активы, долю
              прибыли, реализацию их инвестиционных интересов.
            </Blockquote>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="bg-white p-6 rounded-lg text-center flex flex-col">
            <Blockquote
              color="blue"
              // cite="– Forrest Gump"
              icon={<IconInfoCircle />}
              h={150}
            >
              Наша платфарма обеспечивает прозрачное раскрытие рисков,
              страхование и мониторинг активов.
            </Blockquote>
          </div>
        </motion.div>
      </SimpleGrid>
    </section>
  )
}

export default RealAssets
