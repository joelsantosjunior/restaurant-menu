import { useState } from 'react'
import ItemModal from '../../modals/ItemModal'
import Modal from '../../../modal'
import { Item } from '../../../models/Item.model'
import styles from './MenuListItem.module.scss'
import useOrder from '../../../hooks/useOrder'

const MenuListItem = ({ item }: { item: Item }) => {
  const [showModal, setShowModal] = useState(false)

  const itemInOrder = useOrder()
    .filter((i) => i.id === item.id)
    .map((i) => i.qtd)
    .reduce((a, b) => a + b, 0)

  // Always use the first modifier value as the initial value
  // to avoid showing 0 as the price
  const intialModifierValue =
    (item.modifiers && item.modifiers[0].items[0].price) ?? 0

  const price = (item.price || intialModifierValue).toFixed(2).replace('.', ',')

  return (
    <>
      <div
        className={styles.menuItem}
        onClick={() => {
          setShowModal(true)
        }}
      >
        <div className={styles.menuItemContent}>
          <h3>
            {itemInOrder > 0 && (
              <span className={styles.badge}>{itemInOrder}</span>
            )}
            {item.name}
          </h3>
          <p>{item.description}</p>
          <h3>R$ {price}</h3>
        </div>
        <div>
          {item.images && (
            <img
              className={styles.cardImage}
              src={item.images?.[0]?.image}
              alt=""
            />
          )}
        </div>
      </div>
      {showModal && (
        <Modal>
          <ItemModal
            item={item}
            onClose={() => {
              setShowModal(false)
            }}
          ></ItemModal>
        </Modal>
      )}
    </>
  )
}

export default MenuListItem
