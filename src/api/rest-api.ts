import { Menu } from '../models/Menu.model'
import { Venue } from '../models/Venue.model'

const BASE_URL = 'https://cdn-dev.preoday.com/challenge'

// const PROXY_SERVER = `http://localhost:3222/proxy?url=${BASE_URL}`

export const getRestaurantData = async (): Promise<Venue> => {
  const response = await fetch(`${BASE_URL}/venue/9`)

  if (!response.ok) {
    throw new Error('Failed to fetch restaurant data')
  }

  const data: Venue = await response.json()

  return data
}

export const getMenuData = async (): Promise<Menu> => {
  const response = await fetch(`${BASE_URL}/menu`)

  if (!response.ok) {
    throw new Error('Failed to fetch menu data')
  }

  const data: Menu = await response.json()

  return data
}
