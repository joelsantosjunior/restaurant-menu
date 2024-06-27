import { useSelector } from 'react-redux'
import { AppState } from '../store/store'

const useOrder = () => {
  return useSelector((state: AppState) => state.menu.order)
}

export default useOrder
