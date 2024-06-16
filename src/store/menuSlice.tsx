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

type SelectedItem = StateMenuItem & { qtd: number }

export interface MenuState {
  availableItems: { category: string; items: StateMenuItem[] }[]
  selectedItems: SelectedItem[]
}

const initialState: MenuState = {
  availableItems: db['menu'],
  selectedItems: [],
}

const menuSlice = createSlice({
  name: 'menu',
  initialState: initialState,
  reducers: {
    selectItem: (state, action: PayloadAction<SelectedItem>) => {
      state.selectedItems.push(action.payload)
    },
    updateOrder: (state, action: PayloadAction<SelectedItem>) => {
      if (state.selectedItems.some((i) => i.name === action.payload.name)) {
        state.selectedItems = state.selectedItems.map((item) =>
          item.name === action.payload.name ? action.payload : item
        )
      } else {
        state.selectedItems.push(action.payload)
      }
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

export const { selectItem, updateOrder, unselectItem, cleanSelection } =
  menuSlice.actions

export default menuSlice.reducer
