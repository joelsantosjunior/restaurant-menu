import UIButton from '../ui/button/Button'
import useOrder from '../../hooks/useOrder'
import useTotal from '../../hooks/useTotal'
import { resetOrder } from '../../store/menuSlice'
import { useDispatch } from 'react-redux'
import styles from './OrderModal.module.scss'
import Menu from '../ui/menu/Menu'
import Quantifier from '../ui/quantifier/Quantifier'

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
    <div className={styles.modalContainer}>
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
              <div>
                <p>
                  {item.qtd}x {item.name}
                </p>
                {item.selectedModifier && (
                  <p>
                    {item.selectedModifier.name} (+R$
                    {item.selectedModifier.price})
                  </p>
                )}
                <Quantifier></Quantifier>
              </div>
              <h3>R$ {item.price}</h3>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.modalTotal}>
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
      <div className={styles.modalActions}>
        <UIButton onClick={handleFinishOrder}>Checkout now</UIButton>
      </div>
    </div>
  )
}

export default OrderModal
