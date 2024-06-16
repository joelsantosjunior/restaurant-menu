import { configureStore } from '@reduxjs/toolkit'
import menuReducer, { MenuState } from './menuSlice'

export interface AppState {
  menu: MenuState
}

const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
})

export default store
