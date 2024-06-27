import useOrder from '../../../hooks/useOrder'
import useTotal from '../../../hooks/useTotal'
import { getCorrectPrice } from '../../../utils/getCorrectPrice'
import UIButton from '../../ui/button/Button'
import Quantifier from '../../ui/quantifier/Quantifier'
import styles from './orderSummary.module.scss'

interface OrderSummaryProps {
  onCheckout: () => void
}

const OrderSummary = ({ onCheckout }: OrderSummaryProps) => {
  const items = useOrder()
  const total = useTotal()

  return (
    <>
      <div className={styles.summary}>
        <ul>
          {items.length === 0 && (
            <li>
              <p>Your basket is empty</p>
            </li>
          )}
          {items.map((item) => (
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
                <Quantifier></Quantifier>
              </div>
              <h3>R${getCorrectPrice(item)}</h3>
            </li>
          ))}
        </ul>
      </div>
      {total > 0 && (
        <>
          <div className={styles.total}>
            <ul>
              <li>
                <p>Sub total</p>
                <p>
                  <strong> R${total}</strong>
                </p>
              </li>
              <li>
                <h1>Total:</h1>
                <h1>R${total}</h1>
              </li>
            </ul>
          </div>
          <div className={styles.actions}>
            <UIButton onClick={onCheckout}>Checkout now</UIButton>
          </div>
        </>
      )}
    </>
  )
}

export default OrderSummary
