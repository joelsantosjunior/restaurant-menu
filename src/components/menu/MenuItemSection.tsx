import styled from 'styled-components'
import MenuItem from './MenuItem'
import { StateMenuItem } from '../../store/menuSlice'

const MyMenuItemSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1em;

  h2 {
    font-weight: bold;
    font-style: italic;
    margin: 0.5em 0;
  }
`

const MyMenuItemSectionContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 1em;

  grid-template-columns: repeat(auto-fill, 100%);

  // Big Screens should show 2 items per row
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(calc(50% - 1em), 1fr));
  }
`

interface MenuItemSectionProps {
  category: string
  quickAccessId: string
  items: StateMenuItem[]
}

const MenuItemSection = ({
  category,
  items,
  quickAccessId,
}: MenuItemSectionProps) => {
  return (
    <MyMenuItemSection>
      <h2 id={quickAccessId}>{category}</h2>
      <MyMenuItemSectionContainer>
        {items.map((item, i) => (
          <MenuItem key={item.name + i} item={item} />
        ))}
      </MyMenuItemSectionContainer>
    </MyMenuItemSection>
  )
}

export default MenuItemSection
