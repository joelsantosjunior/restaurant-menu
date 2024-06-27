import { useEffect, useState } from 'react'
import styles from './TextField.module.scss'

interface TextFieldProps {
  initialValue?: string
  onChange?: (newValue: string) => void
}

const TextField = ({ initialValue = '', onChange }: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (newValue: string) => {
    setValue(newValue)
  }

  useEffect(() => {
    if (onChange) {
      onChange(value)
    }
  }, [value])

  return (
    <div className={styles.textField}>
      <span>
        <img src="search-icon.svg" alt="" />
      </span>
      <input
        value={value}
        onChange={(e) => {
          handleChange(e.target.value)
        }}
        type="text"
        placeholder="Search menu items"
      />
    </div>
  )
}

export default TextField
