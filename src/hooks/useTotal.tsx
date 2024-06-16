import { useSelector } from 'react-redux'
import { AppState } from '../store/store'

const useTotal = () => {
  const selectedItems = useSelector(
    (state: AppState) => state.menu.selectedItems
  )

  const total = selectedItems.reduce(
    (acc, item) => acc + item.price * item.qtd,
    0
  )

  return total
}

export default useTotal
