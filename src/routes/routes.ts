import { createBrowserRouter } from 'react-router-dom'

import App from '../App'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ErrorPage from '../pages/Error'
import { privateRoutes } from './privateRoutes'
import SecurityTokenOffering from '../pages/SecurityTokenOffering'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: privateRoutes,
    ErrorBoundary: ErrorPage,
  },
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/home',
    Component: Home,
  },
  {
    path: '/sto',
    Component: SecurityTokenOffering,
  },
])
