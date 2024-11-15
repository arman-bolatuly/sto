import type { RouteObject } from 'react-router-dom'

import Cases from '../pages/Cases'
import Trade from '../pages/Trade'
import Tokens from '../pages/Tokens'
import Wallets from '../pages/Wallets'
import Profile from '../pages/Profile'
import Portfolio from '../pages/Portfolio'
import AdminBanks from '../pages/AdminBank'
import TokenList from '../pages/TokensList'
import Registration from '../pages/Registration'

export const privateRoutes: Array<RouteObject> = [
  {
    path: '/profile',
    Component: Profile,
  },
  {
    path: '/cases/:caseId',
    Component: Tokens,
  },
  {
    path: '/cases',
    Component: Cases,
  },
  {
    path: '/tokens',
    Component: TokenList,
  },
  {
    path: '/admin-banks',
    Component: AdminBanks,
  },
  {
    path: '/trade',
    Component: Trade,
  },
  {
    path: '/wallets',
    Component: Wallets,
  },
  {
    path: '/portfolio',
    Component: Portfolio,
  },
  {
    path: '/registration',
    Component: Registration,
  },
]
