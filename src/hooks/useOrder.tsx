import { useSelector } from 'react-redux'
import { AppState } from '../store/store'
import { useState } from 'react'

const useOrder = () => {
  const selectedItems = useSelector(
    (state: AppState) => state.menu.selectedItems
  )

  const [items] = useState(selectedItems)

  return items
}

export default useOrder
