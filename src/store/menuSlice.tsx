import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import db from '../assets/db.json'

export interface StateMenuItem {
  name: string
  ingredients: string
  price: number
  img: string
  contains_gluten: boolean
  contains_lactose: boolean
}

export interface MenuState {
  availableItems: { category: string; items: StateMenuItem[] }[]
  selectedItems: StateMenuItem[]
}

const initialState: MenuState = {
  availableItems: db['menu'],
  selectedItems: [],
}

const menuSlice = createSlice({
  name: 'menu',
  initialState: initialState,
  reducers: {
    selectItem: (state, action: PayloadAction<StateMenuItem>) => {
      state.selectedItems.push(action.payload)
    },
    unselectItem: (state, action: PayloadAction<StateMenuItem>) => {
      state.selectedItems = state.selectedItems.filter(
        (item) => item.name !== action.payload.name
      )
    },
    cleanSelection: (state) => {
      state.selectedItems = []
    },
  },
})

export const { selectItem, unselectItem, cleanSelection } = menuSlice.actions

export default menuSlice.reducer
