import { proxy } from 'valtio'

export interface IStore {
  auth: {
    isAuth: boolean
  }
}

export const store: IStore = proxy({
  auth: {
    isAuth: false,
  },
})
