import { useSelector } from 'react-redux'
import { AppState } from '../store/store'
import MenuItemSection from '../components/menu/MenuItemSection'

const Menu = () => {
  const menu = useSelector((state: AppState) => state.menu.availableItems)

  return (
    <div>
      {menu.map((category) => (
        <MenuItemSection
          key={category.category}
          category={category.category}
          items={category.items}
        />
      ))}
    </div>
  )
}

export default Menu
