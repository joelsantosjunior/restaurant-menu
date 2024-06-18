import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Locale = 'en' | 'pt'

export const availeLocales = ['en', 'pt']

export interface UIState {
  locale: Locale
  showOrderModel: boolean
  showItemModel: boolean
}

const initialState: UIState = {
  locale: 'en',
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
    setLocale(state, action: PayloadAction<Locale>) {
      state.locale = action.payload
    },
  },
})

export const { setShowItemModal, setShowOrderModel, setLocale } =
  uiSlice.actions

export default uiSlice.reducer
