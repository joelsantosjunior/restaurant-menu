import { MenuImage } from './MenuImage.model'
import { Modifier } from './Modifier.model'

export interface Item {
  id: number
  name: string
  description?: string
  alcoholic: number
  price: number
  position: number
  visible: number
  availabilityType: string
  sku: string
  modifiers?: Modifier[]
  images: MenuImage[]
  available: boolean
}
