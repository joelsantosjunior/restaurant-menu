import { useSelector } from 'react-redux'
import { AppState } from '../store/store'

export default function useLocale() {
  return useSelector((state: AppState) => state.ui.locale)
}
