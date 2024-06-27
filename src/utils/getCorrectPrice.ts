import { OrderItem } from '../models/OrderItem.model'

export const getCorrectPrice = (item: OrderItem): number => {
  let price = item.price

  if (item.selectedModifiers.length > 0) {
    price = 0
    item.selectedModifiers.forEach((modifier) => {
      price += modifier.price
    })
  }

  return price
}
