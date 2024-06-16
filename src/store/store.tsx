import { configureStore } from '@reduxjs/toolkit'
import menuReducer, { MenuState } from './menuSlice'
import UIReducer, { UIState } from './UISlice'

export interface AppState {
  menu: MenuState
  ui: UIState
}

const store = configureStore({
  reducer: {
    menu: menuReducer,
    ui: UIReducer,
  },
})

export default store
