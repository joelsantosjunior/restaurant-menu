import styles from './quantifier.module.scss'

interface QuantifierProps {
  value?: number
  onChange?: (value: number) => void
}

const Quantifier = ({ value = 1, onChange }: QuantifierProps) => {
  return (
    <div className={styles.quantifier}>
      <div
        onClick={() => {
          if (value > 0) {
            onChange?.(value - 1)
          }
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 12.998H13H11H5V10.998H11H13H19V12.998Z" fill="#FDFADF" />
        </svg>
      </div>
      <span>{value}</span>
      <div
        onClick={() => {
          onChange?.(value + 1)
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z"
            fill="#FDFADF"
          />
        </svg>
      </div>
    </div>
  )
}

export default Quantifier
