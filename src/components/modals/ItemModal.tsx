import { useDispatch } from 'react-redux'
import { unselectItem, updateOrder } from '../../store/menuSlice'
import UIButton from '../ui/button/Button'
import { useEffect, useState } from 'react'
import useOrder from '../../hooks/useOrder'
import { Item } from '../../models/Item.model'
import styles from './generic-modal.module.scss'
import Modifier from '../menu/modifier/Modifier'

interface ItemModalProps {
  item: Item
  onClose: () => void
}

const ItemModal = ({ item, onClose }: ItemModalProps) => {
  const dispatch = useDispatch()

  const selectedItem = useOrder().find((i) => i.name === item.name)

  const [buttonText, setButtonText] = useState('addToOrder')

  const [qtd, setQtd] = useState(selectedItem?.qtd || 1)

  const handleAddItemToBasket = () => {
    dispatch(
      updateOrder({
        ...item,
        qtd,
      })
    )

    onClose()
  }

  const handleRemoveItemToBasket = () => {
    dispatch(unselectItem(item))
    onClose()
  }

  const handleUpdateBasket = () => {
    if (qtd > 0) {
      handleAddItemToBasket()
    } else {
      handleRemoveItemToBasket()
    }
  }

  useEffect(() => {
    if (qtd === 0) {
      setButtonText('removeFromOrder')
      return
    }

    if (selectedItem) {
      setButtonText('updateOrder')
      return
    }

    setButtonText('addToOrder')
  }, [qtd, selectedItem])

  return (
    <div className={styles.genericModal}>
      <div onClick={onClose} className={styles['close-button']}>
        <img src="/img/close.svg" alt="" />
      </div>

      <div className={styles.banner}>
        {item?.images?.[0]?.image && (
          <img src={item.images?.[0]?.image} alt={item.name} />
        )}
      </div>

      <div className={styles.content}>
        <div>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
        </div>
      </div>

      <div className={styles.modifiers}>
        {item.modifiers &&
          item.modifiers.map((modifier) => (
            <Modifier key={modifier.id} modifier={modifier}></Modifier>
          ))}
      </div>

      <div className={styles.actions}>
        <div>
          <div
            onClick={() => {
              qtd > 0 && setQtd(qtd - 1)
            }}
          >
            <img src="/img/minus.svg" alt="" />
          </div>
          <span>{qtd}</span>
          <div
            onClick={() => {
              setQtd(qtd + 1)
            }}
          >
            <img src="/img/plus.svg" alt="" />
          </div>
        </div>
        <UIButton onClick={handleUpdateBasket}>
          Add to Order • R$ {(qtd ? item.price * qtd : item.price).toFixed(2)}
        </UIButton>
      </div>
    </div>
  )
}

export default ItemModal
