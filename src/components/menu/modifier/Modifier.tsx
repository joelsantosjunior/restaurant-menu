import { useState } from 'react'
import { Modifier as ModiferModel } from '../../../models/Modifier.model'
import { ModifierItem } from '../../../models/ModifierItem.model'
import styles from './modifier.module.scss'

interface ModiferProps {
  modifier: ModiferModel
  onModifierChange?: (modifier: ModifierItem) => void
}

const Modifier = ({ modifier, onModifierChange }: ModiferProps) => {
  const [selectedModifier, setSelectedModifier] = useState<ModifierItem['id']>()

  console.log(styles)

  return (
    <div className={styles.modifier}>
      <div className={styles.modifierHeader}>
        <p>
          <strong>{modifier.name}</strong>
        </p>
        <p>Select {modifier.minChoices} Option</p>
      </div>
      <div className={styles.modifierOptions}>
        {modifier.items &&
          modifier.items.map((option) => (
            <div
              onClick={() => {
                onModifierChange && onModifierChange(option)
                setSelectedModifier(option.id)
              }}
              key={option.name}
              className={styles.modifierOption}
            >
              <label
                className={
                  styles.radioLabel +
                  ' ' +
                  (selectedModifier === option.id ? styles.selected : '')
                }
                htmlFor={option.name}
              >
                <span>
                  <strong>{option.name}</strong>
                </span>
                <span>R${option.price.toFixed(2)}</span>
              </label>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Modifier
