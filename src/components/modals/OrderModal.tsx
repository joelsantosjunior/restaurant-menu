import UIButton from '../ui/button/Button'
import useOrder from '../../hooks/useOrder'
import useTotal from '../../hooks/useTotal'
import styles from './OrderModal.module.scss'
import Menu from '../ui/menu/Menu'
import Quantifier from '../ui/quantifier/Quantifier'
import { getCorrectPrice } from '../../utils/getCorrectPrice'

interface OrderModalProps {
  onClose: () => void
}

const OrderModal = ({ onClose }: OrderModalProps) => {
  const items = useOrder()
  const total = useTotal()

  const handleFinishOrder = () => {
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
                {item.selectedModifiers &&
                  item.selectedModifiers.map((modifier) => (
                    <p>
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
