import { useState } from 'react'
import ItemModal from '../../modals/ItemModal'
import Modal from '../../../modal'
import { Item } from '../../../models/Item.model'
import styles from './MenuListItem.module.scss'
import useOrder from '../../../hooks/useOrder'

const MenuListItem = ({ item }: { item: Item }) => {
  const [showModal, setShowModal] = useState(false)

  const itemInOrder = useOrder().find((i) => i.id === item.id)

  const price =
    itemInOrder && itemInOrder.selectedModifier
      ? itemInOrder.selectedModifier?.price
      : item.price

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
            {itemInOrder && (
              <span className={styles.badge}>{itemInOrder.qtd}</span>
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
