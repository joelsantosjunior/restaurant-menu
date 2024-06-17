import { useSelector } from 'react-redux'
import { AppState } from '../store/store'
import MenuItemSection from '../components/menu/MenuItemSection'
import MenuCategories from '../components/menu/Categories'

const Menu = () => {
  const menu = useSelector((state: AppState) => state.menu.availableItems)

  return (
    <div>
      <MenuCategories></MenuCategories>
      {menu.map((category) => (
        <MenuItemSection
          key={category.category}
          quickAccessId={category.quick_access.name}
          category={category.category}
          items={category.items}
        />
      ))}
    </div>
  )
}

export default Menu
