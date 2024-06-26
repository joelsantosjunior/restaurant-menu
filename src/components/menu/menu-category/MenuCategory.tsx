import MenuListItem from '../menu-list-item/MenuListItem'
import { Item } from '../../../models/Item.model'
import { useState } from 'react'
import styles from './MenuCategory.module.scss'

interface MenuCategoryProps {
  category: string
  quickAccessId: string
  items: Item[]
}

const MenuCategory = ({
  category,
  items,
  quickAccessId,
}: MenuCategoryProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const sortedItems = items.sort((a, b) => a.position - b.position)

  return (
    <div className={styles.category}>
      <div
        className={styles.header}
        onClick={() => {
          setCollapsed(!collapsed)
        }}
      >
        <h2 id={quickAccessId}>{category}</h2>
        <img
          className={collapsed ? styles['down'] : ''}
          src="arrow.svg"
          alt=""
        />
      </div>
      <div
        className={styles.content + ' ' + styles[collapsed ? 'collapsed' : '']}
      >
        {sortedItems
          .filter((item) => item.availabilityType === 'AVAILABLE_NOW')
          .map((item, i) => (
            <MenuListItem key={item.name + i} item={item} />
          ))}
      </div>
    </div>
  )
}

export default MenuCategory
