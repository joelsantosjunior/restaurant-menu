import { Item } from './Item.model'
import { MenuImage } from './MenuImage.model'

export interface MenuSection {
  id: number
  name: string
  description?: string
  position: number
  visible: number
  images: MenuImage[]
  items: Item[]
}
