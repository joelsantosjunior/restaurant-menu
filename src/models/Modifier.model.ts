import { ModifierItem } from './ModifierItem.model'

export interface Modifier {
  id: number
  name: string
  minChoices: number
  maxChoices: number
  items: ModifierItem[]
}
