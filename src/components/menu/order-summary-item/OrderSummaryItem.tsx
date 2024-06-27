import { unselectItem, updateItemQtd } from '../../../store/menuSlice'
import { getCorrectPrice } from '../../../utils/getCorrectPrice'
import Quantifier from '../../ui/quantifier/Quantifier'
import { useDispatch } from 'react-redux'
import { OrderItem } from '../../../models/OrderItem.model'

interface OrderSummaryItemProps {
  item: OrderItem
}

const OrderSummaryItem = ({ item }: OrderSummaryItemProps) => {
  const dispatch = useDispatch()

  const handleUpdateItemQtd = (id: string, qtd: number) => {
    if (qtd === 0) {
      dispatch(unselectItem(id))
      return
    }

    dispatch(updateItemQtd({ id, qtd }))
  }

  return (
    <li key={Math.random() * 1000}>
      <div>
        <p>
          {item.qtd}x {item.name}
        </p>
        {item.selectedModifiers &&
          item.selectedModifiers.map((modifier, index) => (
            <p key={modifier.id + index}>
              {modifier.name} (+R$
              {modifier.price})
            </p>
          ))}
        <Quantifier
          value={item.qtd}
          onChange={(val) => {
            handleUpdateItemQtd(item.orderItemId, val)
          }}
        ></Quantifier>
      </div>
      <h3>R${getCorrectPrice(item)}</h3>
    </li>
  )
}

export default OrderSummaryItem
