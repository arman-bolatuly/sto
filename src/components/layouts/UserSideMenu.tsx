import React from 'react'
import {
  IconUserCog,
  IconFileDollar,
  IconArrowsExchange2,
} from '@tabler/icons-react'

const UserMenuSection = [
  {
    label: 'Portfolio',
    icon: IconUserCog,
    link: '/portfolio',
  },
  {
    label: 'Trade',
    icon: IconArrowsExchange2,
    link: '/trade',
  },
  {
    label: 'Wallets',
    icon: IconFileDollar,
    link: '/wallets',
  },
]

import type { FC } from 'react'

import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const MenuItem = (item: any) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <NavLink
      to={`${item.link}`}
      style={({ isActive }) => ({
        backgroundColor: isActive || isHovered ? '#FFFFFF' : 'transparent',
        padding: 8,
        fontWeight: 500,
        fontSize: 15,
        lineHeight: '20px',
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        borderRadius: 10,
        marginBottom: 2,
        transition: 'all 0.4s ease-in-out',
        color: isActive || isHovered ? '#087f5b' : '#9DA5B2',
      })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <item.icon />{' '}
      <span className="ml-3" style={{ transition: 'all 0.4s ease-in-out' }}>
        {item.label}
      </span>
    </NavLink>
  )
}

interface MenuSectionProps {
  title: string
  children: React.ReactNode
}

const MenuSection = ({ title, children }: MenuSectionProps) => {
  return (
    <div className="flex flex-col">
      <p className="caption1 text-[#9DA5B2] mb-4">{title}</p>

      {children}
    </div>
  )
}

const UserSideMenu: FC = () => {
  return (
    <div>
      <MenuSection title="">
        {UserMenuSection.map((item: any) => (
          <MenuItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            link={item.link}
            messageCount={item.messageCount}
          />
        ))}
      </MenuSection>
    </div>
  )
}

export default UserSideMenu
