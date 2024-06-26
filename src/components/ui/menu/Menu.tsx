import styles from './menu.module.scss'

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div></div>
      <p>Menu</p>
      <div>
        <img src="/hamburger.svg" alt="" />
      </div>
    </div>
  )
}

export default Menu
