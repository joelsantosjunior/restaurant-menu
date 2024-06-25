import { MenuSection } from './MenuSection.model'

export interface Menu {
  id: number
  name: string
  type: string
  collapse: number
  sections: MenuSection[]
}
