import { useDispatch, useSelector } from 'react-redux'
import useTotal from '../../../hooks/useTotal'
import { getCorrectPrice } from '../../../utils/getCorrectPrice'
import UIButton from '../../ui/button/Button'
import LocalizeText from '../../ui/localize-text/LocalizeText'
import Quantifier from '../../ui/quantifier/Quantifier'
import styles from './orderSummary.module.scss'
import { AppState } from '../../../store/store'
import { unselectItem, updateItemQtd } from '../../../store/menuSlice'

interface OrderSummaryProps {
  onCheckout: () => void
}

const OrderSummary = ({ onCheckout }: OrderSummaryProps) => {
  const items = useSelector((state: AppState) => state.menu.order)

  const total = useTotal()

  const dispatch = useDispatch()

  const handleUpdateItemQtd = (id: string, qtd: number) => {
    if (qtd === 0) {
      dispatch(unselectItem(id))
      return
    }

    dispatch(updateItemQtd({ id, qtd }))
  }

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
