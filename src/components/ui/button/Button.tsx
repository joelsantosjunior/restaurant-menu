import styles from './button.module.scss'

interface UIButtonProps {
  children: React.ReactNode
  type?: string
  disabled?: boolean
  outline?: boolean
  onClick: () => void
}

const UIButton = ({
  children,
  onClick,
  disabled,
  type = 'primary',
}: UIButtonProps) => {
  const cssClass = styles.uiButton + ' ' + styles[type]

  return (
    <button disabled={disabled} className={cssClass} onClick={onClick}>
      {children}
    </button>
  )
}

export default UIButton
