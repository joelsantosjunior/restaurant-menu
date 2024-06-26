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

const MenuSection = () => {
  const { data } = useQuery({
    queryKey: ['menu'],
    queryFn: getMenuData,
  })

  const showOrderModal = useSelector(
    (state: AppState) => state.ui.showOrderModel
  )

  const dispatch = useDispatch()

  const categories =
    data?.sections.sort((a, b) => a.position - b.position) || []

  const sections = categories.map((category) => (
    <MenuCategory
      key={category.id}
      quickAccessId={category.name}
      category={category.name}
      items={category.items}
    />
  ))

  return (
    <div className={styles.menuContainer}>
      <TextField></TextField>
      <CategoriesCarousel data={categories}></CategoriesCarousel>
      {sections}
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
  )
}

export default MenuSection
