import UIButton from '../ui/button/Button'
import useOrder from '../../hooks/useOrder'
import useTotal from '../../hooks/useTotal'
import { resetOrder } from '../../store/menuSlice'
import { useDispatch } from 'react-redux'
import LocalizeText from '../ui/localize-text/LocalizeText'
import styles from './order-modal.module.scss'
import Menu from '../ui/menu/Menu'

interface OrderModalProps {
  onClose: () => void
}

const OrderModal = ({ onClose }: OrderModalProps) => {
  const items = useOrder()
  const total = useTotal()
  const dispatch = useDispatch()

  const handleFinishOrder = () => {
    onClose()
  }

  const handleCancelOrder = () => {
    dispatch(resetOrder())
    onClose()
  }

  return (
    <div>
      <div className={styles.modalHeader}>
        <Menu
          text="Basket"
          backgroundColor="white"
          color="#121212"
          rightIcon="./close.svg"
          onClickRightIcon={onClose}
        ></Menu>
      </div>
      <div className={styles.modalSummary}>
        <ul>
          {items.map((item) => (
            <li key={item.name}>
              <p>
                {item.qtd}x {item.name}
              </p>
              <h3>R$ {item.price}</h3>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.modalTotal}>
        <ul>
          <li>
            <p>Sub total:</p>
            <p>R${total}</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Total:</p>
            <p>R${total}</p>
          </li>
        </ul>
      </div>
      <div className={styles.modalActions}>
        <div className={styles.modalActions}>
          <UIButton onClick={handleFinishOrder}>Checkout now</UIButton>
        </div>
      </div>
    </div>
  )
}

export default OrderModal
