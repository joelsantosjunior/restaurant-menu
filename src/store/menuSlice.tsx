import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { OrderItem } from '../models/OrderItem.model'
import { generateRandomId } from '../utils/generateCustomId'

export interface MenuState {
  order: OrderItem[]
}

const initialState: MenuState = {
  order: [],
}

const menuSlice = createSlice({
  name: 'menu',
  initialState: initialState,
  reducers: {
    selectItem: (
      state,
      action: PayloadAction<Omit<OrderItem, 'orderItemId'>>
    ) => {
      state.order.push({
        ...action.payload,
        orderItemId: generateRandomId(),
        selectedModifiers: action.payload?.selectedModifiers ?? [],
      })
    },
    updateItemQtd: (
      state,
      action: PayloadAction<{ id: string; qtd: number }>
    ) => {
      state.order = state.order.map((item) => {
        return action.payload.id === item.orderItemId
          ? {
              ...item,
              qtd: action.payload.qtd,
            }
          : item
      })
    },
    unselectItem: (state, action: PayloadAction<string>) => {
      state.order = state.order.filter(
        (item) => item.orderItemId !== action.payload
      )
    },
    resetOrder: (state) => {
      state.order = []
    },
  },
})

export const { selectItem, unselectItem, resetOrder, updateItemQtd } =
  menuSlice.actions

export default menuSlice.reducer
