import styles from './button.module.scss'

interface UIButtonProps {
  children: React.ReactNode
  type?: string
  outline?: boolean
  onClick: () => void
}

const UIButton = ({ children, onClick, type = 'primary' }: UIButtonProps) => {
  const cssClass = styles.uiButton + ' ' + styles[type]

  return (
    <button className={cssClass} onClick={onClick}>
      {children}
    </button>
  )
}

export default UIButton
