import {
  Title,
  Text,
  Blockquote,
  List,
  Spoiler,
  SimpleGrid,
} from '@mantine/core'
import { motion } from 'framer-motion'

import { fadeIn } from '../../animationVariants'
import { IconInfoCircle } from '@tabler/icons-react'

const Advantage = () => {
  return (
    <section
      className="flex flex-col h-screen justify-evenly mx-60"
      id="advantage"
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
              Преимущества security-токенов для участников рынка
            </Title>

            <Text className="text-[#9DA5B2] caption1">
              Как security-токены улучшают доступ к финансовым рынкам
            </Text>
          </header>
        </motion.div>
      </div>

      <SimpleGrid cols={2} spacing="xl" className="w-full">
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className="flex-1 mb-8 xl:mb-0"
        >
          <div className="flex flex-col space-y-6 w-[500px] bg-[#FFFFFF] py-6 px-4 rounded-xl">
            <Title order={3} className="text-center">
              Преимущества для инвесторов
            </Title>

            <section className="flex flex-col space-y-4">
              <Blockquote
                color="blue"
                // cite="–"
                icon={<IconInfoCircle />}
                mt="xl"
                m={24}
                className="max-h-[400px] overflow-y-auto min-h-[400px]"
              >
                <List size="lg">
                  <List.Item>
                    <Spoiler
                      maxHeight={30}
                      showLabel="Show more"
                      hideLabel="Hide"
                    >
                      Доступ к новым рынкам и активам: security-токены позволяют
                      инвесторам получить доступ к активам, которые ранее были
                      недоступны для покупки. Активы, которые раньше были
                      доступны только на локальных рынках посредством
                      security-токенов позволяют привлекать инвесторов из разных
                      стран.
                    </Spoiler>
                  </List.Item>

                  <List.Item>
                    <Spoiler
                      maxHeight={30}
                      showLabel="Show more"
                      hideLabel="Hide"
                    >
                      Увеличение ликвидности: токенизация упрощает покупку и
                      продажу активов, что делает их более ликвидными. Инвесторы
                      могут торговать токенами на вторичных рынках, не дожидаясь
                      истечения срока действия или выкупа, как это часто
                      происходит с традиционными финансовыми продуктами.
                    </Spoiler>
                  </List.Item>
                  <List.Item>
                    <Spoiler
                      maxHeight={30}
                      showLabel="Show more"
                      hideLabel="Hide"
                    >
                      Снижение барьеров для входа: токенизация позволяет
                      инвесторам участвовать в проектах с небольшими суммами,
                      что делает инвестиции более демократичными и доступными
                      для широкого круга людей.
                    </Spoiler>
                  </List.Item>
                  <List.Item>
                    <Spoiler
                      maxHeight={30}
                      showLabel="Show more"
                      hideLabel="Hide"
                    >
                      Фракционное владение: Токенизация позволяет разделить
                      активы на мелкие части, что дает инвесторам возможность
                      приобрести небольшую долю дорогостоящих активов, таких как
                      объекты недвижимости или доли компаний.
                    </Spoiler>
                  </List.Item>
                </List>
              </Blockquote>
            </section>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className="flex-1 mb-8 xl:mb-0"
        >
          <div className="flex flex-col space-y-6 w-[500px] bg-[#FFFFFF] py-6 px-4 rounded-xl">
            <Title order={3} className="text-center">
              Преимущества для компаний-эмитентов
            </Title>

            <section className="flex flex-col space-y-4">
              <Blockquote
                color="blue"
                // cite="–"
                icon={<IconInfoCircle />}
                mt="xl"
                m={24}
                className="max-h-[400px] overflow-y-auto min-h-[400px]"
              >
                <List size="lg">
                  <List.Item>
                    <Spoiler
                      maxHeight={30}
                      showLabel="Show more"
                      hideLabel="Hide"
                    >
                      Привлечение международного капитала: токенизация позволяет
                      компаниям привлекать средства из любой точки мира,
                      расширяя базу потенциальных инвесторов.
                    </Spoiler>
                  </List.Item>

                  <List.Item>
                    <Spoiler
                      maxHeight={30}
                      showLabel="Show more"
                      hideLabel="Hide"
                    >
                      Снижение издержек с помощью автоматизации процессов,
                      связанные с выпуском, распределением и торговлей токенами,
                      что значительно снижает затраты на выпуск ценных бумаг в
                      среде блокчейн.
                    </Spoiler>
                  </List.Item>
                  <List.Item>
                    <Spoiler
                      maxHeight={30}
                      showLabel="Show more"
                      hideLabel="Hide"
                    >
                      Быстрый процесс выпуска посредством токенизации по
                      сравнению с традиционными IPO или другими методами
                      привлечения средств.
                    </Spoiler>
                  </List.Item>
                  <List.Item>
                    <Spoiler
                      maxHeight={30}
                      showLabel="Show more"
                      hideLabel="Hide"
                    >
                      Повышенная ликвидность для собственных активов:
                      токенизация позволяет сделать менее ликвидные активы
                      (например, недвижимость или частный бизнес) более
                      привлекательными для инвесторов, превращая их в токены,
                      которыми можно торговать. Так как токены могут быть
                      проданы на вторичном рынке, это сопровождается повышением
                      ликвидности активов.
                    </Spoiler>
                  </List.Item>
                </List>
              </Blockquote>
            </section>
          </div>
        </motion.div>
      </SimpleGrid>
    </section>
  )
}

export default Advantage
