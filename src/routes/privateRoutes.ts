import type { RouteObject } from 'react-router-dom'

import Cases from '../pages/Cases'
import Trade from '../pages/Trade'
import Wallets from '../pages/Wallets'
import Profile from '../pages/Profile'
import Investors from '../pages/Investors'
import Portfolio from '../pages/Portfolio'
import AdminBanks from '../pages/AdminBank'
import Registration from '../pages/Registration'
import AdminsIssuers from '../pages/AdminsIssuers'
import IssuerRegistration from '../pages/IssuerRegistration'
import TokenList from '../pages/Tokens'

export const privateRoutes: Array<RouteObject> = [
  {
    path: '/profile',
    Component: Profile,
  },
  {
    path: '/cases/:caseId',
    Component: TokenList,
  },
  {
    path: '/cases',
    Component: Cases,
  },
  {
    path: '/investors',
    Component: Investors,
  },
  {
    path: '/admins-issuers',
    Component: AdminsIssuers,
  },
  {
    path: '/issuer-registration',
    Component: IssuerRegistration,
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
