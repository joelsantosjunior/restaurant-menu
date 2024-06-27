import { useSelector } from 'react-redux'
import useTotal from '../../../hooks/useTotal'
import UIButton from '../../ui/button/Button'
import LocalizeText from '../../ui/localize-text/LocalizeText'
import styles from './orderSummary.module.scss'
import { AppState } from '../../../store/store'
import OrderSummaryItem from '../order-summary-item/OrderSummaryItem'

interface OrderSummaryProps {
  onCheckout: () => void
}

const OrderSummary = ({ onCheckout }: OrderSummaryProps) => {
  const items = useSelector((state: AppState) => state.menu.order)

  const total = useTotal()

  return (
    <>
      <div className={styles.summary}>
        <ul>
          {items.length === 0 && (
            <li>
              <p>
                <LocalizeText>page.menu.basket.empty</LocalizeText>
              </p>
            </li>
          )}
          {items.map((item) => (
            <OrderSummaryItem item={item}></OrderSummaryItem>
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
            <UIButton onClick={onCheckout}>
              <LocalizeText>page.menu.modal.button.finish</LocalizeText>
            </UIButton>
          </div>
        </>
      )}
    </>
  )
}

export default OrderSummary
