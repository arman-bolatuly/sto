import { Box, Button, Divider, Portal, Title } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'

import STOMarket from './STOMarket'
import Advantage from './Advantage'
import RealAssets from './RealAssets'
import Platform from './Platform'
import CryptoCoins from './CryptoCoins'

const SecurityTokenOffering = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col m-0 p-0 overflow-hidden">
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
                to="table"
                activeClass="active"
                spy={true}
              >
                List of cryptocurrencies
              </Link>
              <Divider orientation="vertical" />
              <Link
                className="cursor-pointer transition ease-in-out delay-150 hover:translate-y-0.5 hover:scale-0.1 hover:text-indigo-500 duration-300"
                to="realAssets"
                activeClass="active"
                // smooth={desktopMode}
                spy={true}
              >
                Реальные активы
              </Link>

              <Divider orientation="vertical" />

              <Link
                className="cursor-pointer transition ease-in-out delay-150 hover:translate-y-0.5 hover:scale-0.1 hover:text-indigo-500 duration-300"
                to="advantage"
                activeClass="active"
                // smooth={desktopMode}
                spy={true}
              >
                Приемущества
              </Link>

              <Divider orientation="vertical" />

              <Link
                className="cursor-pointer transition ease-in-out delay-150 hover:translate-y-0.5 hover:scale-0.1 hover:text-indigo-500 duration-300"
                to="platform"
                activeClass="active"
                // smooth={desktopMode}
                spy={true}
              >
                Платформа
              </Link>

              <Divider orientation="vertical" />

              <Link
                className="cursor-pointer transition ease-in-out delay-150 hover:translate-y-0.5 hover:scale-0.1 hover:text-indigo-500 duration-300"
                to="STOMarket"
                activeClass="active"
                // smooth={desktopMode}
                spy={true}
              >
                STO Market
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="light"
                onClick={() => navigate('/home')}
                className="cursor-pointer"
              >
                Home
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

      <div className="flex flex-col">
        <CryptoCoins />

        <RealAssets />

        <Advantage />

        <Platform />

        <STOMarket />
      </div>
    </div>
  )
}

export default SecurityTokenOffering
