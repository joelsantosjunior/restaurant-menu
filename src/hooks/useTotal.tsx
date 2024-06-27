import { getCorrectPrice } from '../utils/getCorrectPrice'
import useOrder from './useOrder'

const useTotal = () => {
  const order = useOrder()

  const total = order.reduce(
    (acc, item) => acc + getCorrectPrice(item) * item.qtd,
    0
  )

  return total
}

export default useTotal
