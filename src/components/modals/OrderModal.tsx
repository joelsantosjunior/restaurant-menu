import styles from './OrderModal.module.scss'
import Menu from '../ui/menu/Menu'
import OrderSummary from '../menu/order-summary/OrderSummary'

interface OrderModalProps {
  onClose: () => void
}

const OrderModal = ({ onClose }: OrderModalProps) => {
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
      <OrderSummary onCheckout={handleFinishOrder}></OrderSummary>
    </div>
  )
}

export default OrderModal
