import styles from './text-field.module.scss'

interface TextFieldProps {
  value?: string
  onChange?: (newValue: string) => void
}

const TextField = ({ value = '', onChange }: TextFieldProps) => {
  return (
    <div className={styles.textField}>
      <span>
        <img src="search-icon.svg" alt="" />
      </span>
      <input
        value={value}
        onChange={(e) => {
          onChange && onChange(e.target.value)
        }}
        type="text"
        placeholder="Search menu items"
      />
    </div>
  )
}

export default TextField
