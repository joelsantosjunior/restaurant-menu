import { useEffect, useState } from 'react'
import styles from './TextField.module.scss'

interface TextFieldProps {
  initialValue?: string
  placeholder?: string
  onChange?: (newValue: string) => void
}

const TextField = ({
  initialValue = '',
  onChange,
  placeholder,
}: TextFieldProps) => {
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
        placeholder={placeholder || 'Search'}
      />
    </div>
  )
}

export default TextField
