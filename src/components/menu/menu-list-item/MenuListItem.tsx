import { useState } from 'react'
import ItemModal from '../../modals/ItemModal'
import Modal from '../../../modal'
import { Item } from '../../../models/Item.model'
import styles from './menu-list-item.module.scss'

const MenuItem = ({ item }: { item: Item }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div
        className={styles.menuItem}
        onClick={() => {
          setShowModal(true)
        }}
      >
        <div className={styles.menuItemContent}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <h3>R$ {item.price}</h3>
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

export default MenuItem
