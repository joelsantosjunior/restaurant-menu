import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UIState {
  showOrderModel: boolean
  showItemModel: boolean
}

const initialState: UIState = {
  showOrderModel: false,
  showItemModel: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
    setShowOrderModel(state, action: PayloadAction<boolean>) {
      state.showOrderModel = action.payload
    },
    setShowItemModal(state, action: PayloadAction<boolean>) {
      state.showItemModel = action.payload
    },
  },
})

export const { setShowItemModal, setShowOrderModel } = uiSlice.actions

export default uiSlice.reducer
