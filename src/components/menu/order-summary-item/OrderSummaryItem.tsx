import { SelectedItem } from '../../../store/menuSlice'
import { getCorrectPrice } from '../../../utils/getCorrectPrice'
import Quantifier from '../../ui/quantifier/Quantifier'
import { useState } from 'react'

interface OrderSummaryItemProps {
  item: SelectedItem
}

const OrderSummaryItem = ({ item }: OrderSummaryItemProps) => {
  const [qtd, setQtd] = useState(item.qtd)

  const handleQtdChange = (value: number) => {
    if (value !== qtd) {
      setQtd(value)
    }
  }

  return (
    <li>
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
        <Quantifier onChange={handleQtdChange}></Quantifier>
      </div>
      <h3>R${getCorrectPrice(item)}</h3>
    </li>
  )
}

export default OrderSummaryItem
