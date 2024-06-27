import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Item } from '../models/Item.model'
import { ModifierItem } from '../models/ModifierItem.model'

export type SelectedItem = Item & { qtd: number } & {
  selectedModifiers: Array<ModifierItem>
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
    updateItem: (
      state,
      action: PayloadAction<{ item: SelectedItem; index: number }>
    ) => {
      state.selectedItems = state.selectedItems.map((item, i) => {
        return action.payload.index === i ? action.payload.item : item
      })
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

export const { selectItem, unselectItem, resetOrder, updateItem } =
  menuSlice.actions

export default menuSlice.reducer
