import { SelectedItem } from '../store/menuSlice'

export const getCorrectPrice = (item: SelectedItem): number => {
  let price = item.price

  if (item.selectedModifiers.length > 0) {
    price = 0
    item.selectedModifiers.forEach((modifier) => {
      price += modifier.price
    })
  }

  return price
}
