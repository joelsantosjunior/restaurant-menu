import { useEffect, useRef, useState } from 'react'
import { MenuSection } from '../../../models/MenuSection.model'
import styles from './categories-carousel.module.scss'

interface MenuCategoriesProps {
  data: MenuSection[]
}

const MenuCategories = ({ data }: MenuCategoriesProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const [activeMenuCategory, setActiveMenuCategory] = useState('')

  const menuCategories = data

  const scrollToCategory = (category: string) => {
    setActiveMenuCategory(category)
    const categoryElement = document.getElementById(category)
    if (categoryElement) {
      window.scrollTo({
        top: categoryElement.offsetTop - 190,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    // window.addEventListener('scroll', () => {
    //   if (ref.current) {
    //     if (window.scrollY > 210) {
    //       ref.current.classList.add('fixed')
    //       ref.current.parentElement?.style?.setProperty(
    //         'height',
    //         `${ref.current.clientHeight}px`
    //       )
    //     } else {
    //       ref.current.classList.remove('fixed')
    //     }
    //   }
    // })
  }, [])

  return (
    <>
      <div className={styles.carousel} ref={ref}>
        {menuCategories.map(({ name, images }) => (
          <div
            className={styles.item}
            key={name}
            onClick={() => {
              scrollToCategory(name)
            }}
          >
            <div className={styles['image-wrapper']}>
              <img src={images[0].image} alt="" />
            </div>
            <div className={styles['category-label']}>
              <p>{name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default MenuCategories
