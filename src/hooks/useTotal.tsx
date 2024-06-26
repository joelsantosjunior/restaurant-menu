import { getCorrectPrice } from '../utils/getCorrectPrice'
import useOrder from './useOrder'

const useTotal = () => {
  const selectedItems = useOrder()

  const total = selectedItems.reduce(
    (acc, item) => acc + getCorrectPrice(item) * item.qtd,
    0
  )

  return total
}

export default useTotal
