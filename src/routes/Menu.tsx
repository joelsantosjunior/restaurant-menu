import CategoriesCarousel from '../components/menu/categories-carousel/CategoriesCarousel'
import { useQuery } from '@tanstack/react-query'
import { getMenuData } from '../api/rest-api'
import MenuCategory from '../components/menu/menu-category/MenuCategory'
import TextField from '../components/ui/text-field/TextField'
import styles from './Menu.module.scss'
import OrderModal from '../components/modals/OrderModal'
import Modal from '../modal'
import { setShowOrderModel } from '../store/UISlice'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../store/store'
import Basket from '../components/layout/Basket'
import LoadingSpinner from '../components/ui/loading-spinner/LoadingSpinner'
import { useState } from 'react'
import { MenuSection as MenuSectionModel } from '../models/MenuSection.model'

const MenuSection = () => {
  const { data, status } = useQuery({
    queryKey: ['menu'],
    queryFn: getMenuData,
  })

  const showOrderModal = useSelector(
    (state: AppState) => state.ui.showOrderModel
  )

  const [filteredItems, setFilteredItems] = useState<MenuSectionModel[]>([])

  const dispatch = useDispatch()

  const categories =
    data?.sections.sort((a, b) => a.position - b.position) || []

  if (status === 'pending') {
    return <LoadingSpinner></LoadingSpinner>
  }

  const handleSearch = (searchText: string) => {
    if (searchText === '') {
      setFilteredItems(categories)
      return
    }

    const filteredItems = categories
      .map((category) => {
        return {
          ...category,
          items: category.items.filter(
            (item) =>
              item.name.toLowerCase().includes(searchText.toLowerCase()) ||
              item.description?.toLowerCase().includes(searchText.toLowerCase())
          ),
        }
      })
      .filter((category) => category.items.length > 0)

    setFilteredItems(filteredItems)
  }

  return (
    <>
      <div className={styles.menuContainer}>
        <TextField onChange={handleSearch}></TextField>
        <CategoriesCarousel data={categories}></CategoriesCarousel>
        {filteredItems.map((category) => (
          <MenuCategory
            key={category.id}
            quickAccessId={category.name}
            category={category.name}
            items={category.items}
          />
        ))}
        {showOrderModal && (
          <Modal>
            <OrderModal
              onClose={() => {
                dispatch(setShowOrderModel(false))
              }}
            ></OrderModal>
          </Modal>
        )}
      </div>
      <Basket></Basket>
    </>
  )
}

export default MenuSection
