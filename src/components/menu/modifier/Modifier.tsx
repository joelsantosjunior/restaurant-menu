import { Modifier as ModiferModel } from '../../../models/Modifier.model'
import { ModifierItem } from '../../../models/ModifierItem.model'
import styles from './modifier.module.scss'

interface ModiferProps {
  modifier: ModiferModel
  onModifierChange?: (modifier: ModifierItem) => void
}

const Modifier = ({ modifier, onModifierChange }: ModiferProps) => {
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
              }}
              key={option.name}
              className={styles.modifierOption}
            >
              <label htmlFor={option.name}>
                <span>
                  <strong>{option.name}</strong>
                </span>
                <span>R${option.price.toFixed(2)}</span>
              </label>
              <input
                id={option.name}
                type="radio"
                name={modifier.name}
                value={option.price}
              />
            </div>
          ))}
      </div>
    </div>
  )
}

export default Modifier
