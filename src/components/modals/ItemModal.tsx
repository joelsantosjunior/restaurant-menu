import { useDispatch } from 'react-redux'
import { selectItem } from '../../store/menuSlice'
import UIButton from '../ui/button/Button'
import { useEffect, useMemo, useState } from 'react'
import { Item } from '../../models/Item.model'
import styles from './ItemModal.module.scss'
import Modifier from '../menu/modifier/Modifier'
import { ModifierItem } from '../../models/ModifierItem.model'
import Quantifier from '../ui/quantifier/Quantifier'
import { Modifier as ModifierModel } from '../../models/Modifier.model'
import LocalizeText from '../ui/localize-text/LocalizeText'

interface ItemModalProps {
  item: Item
  onClose: () => void
}

const ItemModal = ({ item, onClose }: ItemModalProps) => {
  const dispatch = useDispatch()

  const [qtd, setQtd] = useState(1)

  const [disabled, setDisabled] = useState(true)

  const [selectedModifiers, setSelectedModifiers] = useState<
    Map<number, ModifierItem>
  >(new Map())

  const handleAddItemToBasket = () => {
    dispatch(
      selectItem({
        ...item,
        qtd,
        selectedModifiers: Array.from(selectedModifiers.values()),
      })
    )

    onClose()
  }

  const handleModifierChange = (
    modifier: ModifierModel,
    modifierItem: ModifierItem
  ) => {
    setSelectedModifiers((prev) => {
      const newModifiers = new Map(prev)
      newModifiers.set(modifier.id, modifierItem)
      return newModifiers
    })
  }

  useEffect(() => {
    let newState = false

    newState =
      selectedModifiers.size !== (item.modifiers ?? []).length || qtd === 0

    setDisabled(newState)
  }, [selectedModifiers, item.modifiers, qtd])

  const price = useMemo(() => {
    return (
      item.price * qtd +
      Array.from(selectedModifiers.values()).reduce(
        (acc, modifier) => acc + modifier.price,
        0
      ) *
        qtd
    )
  }, [selectedModifiers, qtd, item])

  return (
    <div className={styles.container}>
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
          item.modifiers.map((modifier, index) => (
            <Modifier
              onModifierChange={(modifierItem) =>
                handleModifierChange(modifier, modifierItem)
              }
              key={modifier.id + index}
              modifier={modifier}
            ></Modifier>
          ))}
      </div>

      <div className={styles.actions}>
        <Quantifier
          value={qtd}
          onChange={(value) => {
            setQtd(value)
          }}
        ></Quantifier>
        <UIButton disabled={disabled} onClick={handleAddItemToBasket}>
          <LocalizeText>page.menu.modal.button.addToOrder</LocalizeText> • R$
          {price.toFixed(2)}
        </UIButton>
      </div>
    </div>
  )
}

export default ItemModal
