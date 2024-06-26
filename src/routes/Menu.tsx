import MenuCategories from '../components/menu/categories-carousel/CategoriesCarousel'
import { useQuery } from '@tanstack/react-query'
import { getMenuData } from '../api/rest-api'
import MenuItemSection from '../components/menu/menu-category/MenuCategory'
import TextField from '../components/ui/text-field/TextField'
import styled from 'styled-components'

const MenuSectionStyled = styled.div`
  padding: 16px;
`

const MenuSection = () => {
  const { data } = useQuery({
    queryKey: ['menu'],
    queryFn: getMenuData,
  })

  const categories =
    data?.sections.sort((a, b) => a.position - b.position) || []

  return (
    <MenuSectionStyled>
      <TextField></TextField>
      <MenuCategories data={categories}></MenuCategories>
      {categories.map((category) => (
        <MenuItemSection
          key={category.id}
          quickAccessId={category.name}
          category={category.name}
          items={category.items}
        />
      ))}
    </MenuSectionStyled>
  )
}

export default MenuSection
