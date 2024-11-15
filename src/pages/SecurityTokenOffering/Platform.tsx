import { useEffect, useState } from 'react'
import useMeasure from 'react-use-measure'
import { Title, Text } from '@mantine/core'
import { animate, motion, useMotionValue } from 'framer-motion'

import { fadeIn } from '../../animationVariants'
import Card from './Card'

const texts = [
  'Снижение порога инвестиций для входа в проект',
  'Отсутствие необходимости в долгосрочных инвестициях',
  'Возможность продажи на вторичных рынках',
  'Снижение операционных расходов за счет автоматизации процессов',
  'Регулярный мониторинг, просмотр состояния, отчетности о деятельности токенизированных активов',
  'Автоматизированное, прозрачное распределение дивидендов',
  'Доступ к рынкам 24/7',
  'Безопасность: проверка личности и противодействие отмыванию денег в реальном времени, благодаря внедрению AML/KYS',
  'Быстрое исполнение сделок',
]

const Platform = () => {
  const [ref, { width }] = useMeasure()

  const xTranslation = useMotionValue(0)

  const [duration, setDuration] = useState(25)

  const [mustFinish, setMustFinish] = useState(false)
  const [rerender, setRerender] = useState(false)

  useEffect(() => {
    let controls
    const finalPosition = -width / 2 - 8

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: 'linear',
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false)
          setRerender(!rerender)
        },
      })
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
      })
    }

    return controls?.stop
  }, [xTranslation, width, duration, rerender, mustFinish])

  return (
    <section className="flex flex-col h-screen justify-evenly" id="platform">
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
              Наша платформа предоставляет преимущества
            </Title>

            <Text className="text-[#9DA5B2] caption1">
              Security Token Offering (STO) - цифровые аналоги ценных бумаг,
              современный инвестиционный механизм, который сочетает технологии
              блокчейн с традиционными ценными бумагами.
            </Text>
          </header>
        </motion.div>
      </div>

      <div>
        <div className="relative">
          <motion.div
            className="absolute left-0 -top-40 flex gap-4"
            ref={ref}
            style={{ x: xTranslation }}
            onHoverStart={() => {
              setMustFinish(true)
              setDuration(75)
            }}
            onHoverEnd={() => {
              setMustFinish(true)
              setDuration(25)
            }}
          >
            {[...texts, ...texts].map((text, idx) => (
              <Card key={idx} text={text} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Platform
