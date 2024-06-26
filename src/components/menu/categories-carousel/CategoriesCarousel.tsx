import { useEffect, useRef, useState } from 'react'
import { MenuSection } from '../../../models/MenuSection.model'
import styles from './CategoriesCarousel.module.scss'

interface CategoriesCarouselProps {
  data: MenuSection[]
}

const CategoriesCarousel = ({ data }: CategoriesCarouselProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const [activeMenuCategory, setActiveMenuCategory] = useState('')

  const menuCategories = data

  const fixedCarouselAfterScrolling = 380

  const scrollToCategory = (category: string) => {
    setActiveMenuCategory(category)
    const categoryElement = document.getElementById(category)
    if (categoryElement) {
      window.scrollTo({
        top: categoryElement.offsetTop - 200,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (ref.current) {
        if (window.scrollY > fixedCarouselAfterScrolling) {
          ref.current.classList.add(styles['fixedOnTop'])
          ref.current.parentElement?.style?.setProperty('height', `190px`)
        } else {
          ref.current.classList.remove(styles['fixedOnTop'])
        }
      }
    })
  }, [])

  return (
    <>
      <div>
        <div className={styles.carousel} ref={ref}>
          {menuCategories.map(({ name, images }) => (
            <div
              className={
                styles.item +
                ' ' +
                (activeMenuCategory === name ? styles.active : '')
              }
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
      </div>
    </>
  )
}

export default CategoriesCarousel
