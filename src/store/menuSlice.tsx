import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Item } from '../models/Item.model'
import { ModifierItem } from '../models/ModifierItem.model'

type SelectedItem = Item & { qtd: number } & {
  selectedModifiers?: Array<ModifierItem>
}

export interface MenuState {
  selectedItems: SelectedItem[]
}

const initialState: MenuState = {
  selectedItems: [],
}

const menuSlice = createSlice({
  name: 'menu',
  initialState: initialState,
  reducers: {
    selectItem: (state, action: PayloadAction<SelectedItem>) => {
      state.selectedItems.push({
        ...action.payload,
        selectedModifiers: action.payload?.selectedModifiers ?? [],
      })
    },
    updateOrder: (state, action: PayloadAction<SelectedItem>) => {
      if (state.selectedItems.some((i) => i.id === action.payload.id)) {
        state.selectedItems = state.selectedItems.map((item) =>
          item.id === action.payload.id ? action.payload : item
        )
      } else {
        state.selectedItems.push(action.payload)
      }
    },
    unselectItem: (state, action: PayloadAction<Item>) => {
      state.selectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      )
    },
    resetOrder: (state) => {
      state.selectedItems = []
    },
  },
})

export const { selectItem, updateOrder, unselectItem, resetOrder } =
  menuSlice.actions

export default menuSlice.reducer
