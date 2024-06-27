import OrderSummary from '../menu/order-summary/OrderSummary'
import styles from './basket.module.scss'

const Basket = () => {
  return (
    <div className={styles.basket}>
      <div className={styles.header}>
        <h2>Basket</h2>
      </div>
      <OrderSummary></OrderSummary>
    </div>
  )
}

export default Basket
