import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WebSettings } from '../models/WebSettings.model'

export type Locale = 'en' | 'pt'

export const availableLocales = ['en', 'pt']

export interface UIState {
  locale: Locale
  showOrderModel: boolean
  showItemModel: boolean
  appSettings: WebSettings | null
}

const initialState: UIState = {
  locale: 'en',
  showOrderModel: false,
  showItemModel: false,
  appSettings: null,
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
    setWebSettings(state, action: PayloadAction<WebSettings>) {
      state.appSettings = action.payload
    },
  },
})

export const {
  setShowItemModal,
  setShowOrderModel,
  setLocale,
  setWebSettings,
} = uiSlice.actions

export default uiSlice.reducer
