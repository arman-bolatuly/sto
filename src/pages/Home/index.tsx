import { Divider, Title, Button, Portal, Box } from '@mantine/core'
// import { useHeadroom } from '@mantine/hooks'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'

import Cryptocurrencies from './Cryptocurrencies'
import Blockchain from './Blockchain'
import Steps from './Steps'
import Fourth from './Tokenize1'
import Fifth from './Tokenize2'
import Sixth from './RWA'
import Seventh from './Future'

const Home = () => {
  const navigate = useNavigate()
  // const pinned = useHeadroom({ fixedAt: 120 })
  return (
    <div className="flex flex-col">
      <Portal>
        <Box
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            padding: 'var(--mantine-spacing-xs)',
            height: '74px',
            zIndex: 1000000,
            // transform: `translate3d(0, ${pinned ? 0 : rem(-110)}, 0)`,
            // transition: 'transform 400ms ease',
            backgroundColor: '#0d1d29',
          }}
        >
          <header className="flex justify-between items-center h-16 px-4">
            <Title
              order={3}
              c="#FFFFFF"
              className="cursor-pointer text-[#FFFFFF]"
              onClick={() => navigate('/')}
            >
              TokenX
            </Title>

            <div className="flex items-center space-x-4 text-[#FFFFFF]">
              <Link
                className="cursor-pointer transition ease-in-out delay-150 hover:translate-y-0.5 hover:scale-0.1 hover:text-indigo-500 duration-300"
                to="cryptocurrencies"
                activeClass="active"
                spy={true}
              >
                Криптовалюты
              </Link>
              <Divider orientation="vertical" />
              <Link
                className="cursor-pointer transition ease-in-out delay-150 hover:translate-y-0.5 hover:scale-0.1 hover:text-indigo-500 duration-300"
                to="blockchain"
                activeClass="active"
                spy={true}
              >
                Блокчейн
              </Link>
              <Divider orientation="vertical" />
              <Link
                className="cursor-pointer transition ease-in-out delay-150 hover:translate-y-0.5 hover:scale-0.1 hover:text-indigo-500 duration-300"
                to="steps"
                activeClass="active"
                spy={true}
              >
                Шаги для токенизации
              </Link>
              <Divider orientation="vertical" />
              <Link
                className="cursor-pointer transition ease-in-out delay-150 hover:translate-y-0.5 hover:scale-0.1 hover:text-indigo-500 duration-300"
                to="tokenize1"
                activeClass="active"
                spy={true}
              >
                Что можно токенизировать?
              </Link>
              <Divider orientation="vertical" />
              <Link
                className="cursor-pointer transition ease-in-out delay-150 hover:translate-y-0.5 hover:scale-0.1 hover:text-indigo-500 duration-300"
                to="tokenize2"
                activeClass="active"
                spy={true}
              >
                Токенизация
              </Link>
              <Divider orientation="vertical" />
              <Link
                className="cursor-pointer transition ease-in-out delay-150 hover:translate-y-0.5 hover:scale-0.1 hover:text-indigo-500 duration-300"
                to="RWA"
                activeClass="active"
                spy={true}
              >
                RWA
              </Link>
              <Divider orientation="vertical" />
              <Link
                className="cursor-pointer transition ease-in-out delay-150 hover:translate-y-0.5 hover:scale-0.1 hover:text-indigo-500 duration-300"
                to="future"
                activeClass="active"
                spy={true}
              >
                Будущее токенизации
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="light"
                onClick={() => navigate('/sto')}
                className="cursor-pointer"
              >
                STO Market
              </Button>

              <Button variant="default" onClick={() => navigate('/login')}>
                Login
              </Button>

              <Button onClick={() => navigate('/registration')}>Sign up</Button>
            </div>
          </header>
          <Divider />
        </Box>
      </Portal>

      <div className="flex flex-col mx-60">
        <Cryptocurrencies />

        <Blockchain />

        <Steps />

        <Fourth />

        <Fifth />

        <Sixth />

        <Seventh />
      </div>
    </div>
  )
}

export default Home
