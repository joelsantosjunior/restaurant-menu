import { Item } from './Item.model'
import { ModifierItem } from './ModifierItem.model'

export interface OrderItem extends Item {
  orderItemId: string
  qtd: number
  selectedModifiers: Array<ModifierItem>
}
