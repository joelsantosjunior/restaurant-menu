import useOrder from './useOrder'

const useTotal = () => {
  const selectedItems = useOrder()

  const total = selectedItems.reduce(
    (acc, item) => acc + item.price * item.qtd,
    0
  )

  return total
}

export default useTotal
