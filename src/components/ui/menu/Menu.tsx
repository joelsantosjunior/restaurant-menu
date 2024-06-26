import styles from './menu.module.scss'

interface MenuProps {
  text: string
  backgroundColor?: string
  color?: string
  onClickLeftIcon?: () => void
  leftIcon?: string
  onClickRightIcon?: () => void
  rightIcon?: string
}

const Menu = ({
  text,
  leftIcon,
  onClickLeftIcon,
  rightIcon,
  onClickRightIcon,
  backgroundColor,
  color,
}: MenuProps) => {
  return (
    <div
      className={styles.menu}
      style={{
        backgroundColor,
        color,
      }}
    >
      <div
        onClick={() => {
          if (onClickLeftIcon) {
            onClickLeftIcon()
          }
        }}
      >
        {leftIcon && <img src={leftIcon} alt="" />}
      </div>
      <p>{text}</p>
      <div
        onClick={() => {
          if (onClickRightIcon) {
            onClickRightIcon()
          }
        }}
      >
        <div>{rightIcon && <img src={rightIcon} alt="" />}</div>
      </div>
    </div>
  )
}

export default Menu
