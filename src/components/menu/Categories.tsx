import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { AppState } from '../../store/store'
import { useEffect, useRef } from 'react'

const QuickAccessMenu = styled.div`
  z-index: 1;
  display: flex;
  jusitfy-content: center;
  algin-items: center;
  flex-wrap: nowrap;
  gap: 0.8em;
  padding: 1em 1em 1em 1em;
  position: relative;

  width: 100dvw;
  // margin-top: 3em;
  overflow-x: scroll;

  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    margin-top: 0;
    background-color: white;
    box-shadow: var(--shadow-card);
  }

  &::-webkit-scrollbar {
    display: none;
  }
`

const QuickAccessMenuItem = styled.div`
  min-width: 80px;
  width: 80px;
  height: 80px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--color-card-bg);
  border-radius: 0.8em;
  border: 1px solid var(--color-primary);
  box-shadow: var(--shadow-card);

  font-size: 0.8em;
  font-weight: bold;
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  img {
    object-fit: contain;
    height: 40px;
    width: 40px;
    margin-bottom: 0.5em;
  }
`

const MenuCategories = () => {
  const ref = useRef<HTMLDivElement>(null)

  const menuCategories = useSelector(
    (state: AppState) => state.menu.availableItems
  ).map((category) => category.quick_access)

  const scrollToCategory = (category: string) => {
    const categoryElement = document.getElementById(category)
    if (categoryElement) {
      window.scrollTo({
        top: categoryElement.offsetTop - 120,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (ref.current) {
        if (window.scrollY > 210) {
          ref.current.classList.add('fixed')
          ref.current.parentElement?.style?.setProperty(
            'height',
            `${ref.current.clientHeight}px`
          )
        } else {
          ref.current.classList.remove('fixed')
        }
      }
    })
  }, [])

  return (
    <>
      <div>
        <QuickAccessMenu ref={ref}>
          {menuCategories.map(({ name, icon }) => (
            <QuickAccessMenuItem
              key={name}
              onClick={() => {
                scrollToCategory(name)
              }}
            >
              <div>
                <img src={`/img/${icon}`} alt="" />
              </div>
              <div style={{}}>
                <p>{name}</p>
              </div>
            </QuickAccessMenuItem>
          ))}
        </QuickAccessMenu>
      </div>
    </>
  )
}

export default MenuCategories
