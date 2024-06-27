import OrderSummary from '../menu/order-summary/OrderSummary'
import LocalizeText from '../ui/localize-text/LocalizeText'
import styles from './basket.module.scss'

const Basket = () => {
  return (
    <div className={styles.basket}>
      <div className={styles.header}>
        <h2>
          <LocalizeText>page.menu.basket.title</LocalizeText>{' '}
        </h2>
      </div>
      <OrderSummary onCheckout={() => {}}></OrderSummary>
    </div>
  )
}

export default Basket
