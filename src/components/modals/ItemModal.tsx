import { useDispatch } from 'react-redux'
import { unselectItem, updateOrder } from '../../store/menuSlice'
import UIButton from '../ui/button/Button'
import { useEffect, useState } from 'react'
import useOrder from '../../hooks/useOrder'
import { Item } from '../../models/Item.model'
import styles from './ItemModal.module.scss'
import Modifier from '../menu/modifier/Modifier'
import { ModifierItem } from '../../models/ModifierItem.model'

interface ItemModalProps {
  item: Item
  onClose: () => void
}

const ItemModal = ({ item, onClose }: ItemModalProps) => {
  const dispatch = useDispatch()

  const selectedItem = useOrder().find((i) => i.name === item.name)

  const [buttonText, setButtonText] = useState('Add to Order')

  const [qtd, setQtd] = useState(selectedItem?.qtd || 1)

  const [selectedModifier, setSelectedModifier] = useState<ModifierItem>()

  const handleAddItemToBasket = () => {
    dispatch(
      updateOrder({
        ...item,
        qtd,
        selectedModifier,
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
      setButtonText('Remove from Order')
      return
    }

    if (selectedItem) {
      setButtonText('Update Order')
      return
    }

    setButtonText('Add to Order')
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
            <Modifier
              onModifierChange={(modifier) => {
                setSelectedModifier(modifier)
              }}
              key={modifier.id}
              modifier={modifier}
            ></Modifier>
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
          {buttonText} • R$ {(qtd ? item.price * qtd : item.price).toFixed(2)}
        </UIButton>
      </div>
    </div>
  )
}

export default ItemModal
