import styles from './loadingSpinner.module.scss'

const LoadingSpinner = () => {
  return (
    <div className={styles.loading}>
      <p>loading...</p>
      <div>🍔</div>
    </div>
  )
}

export default LoadingSpinner
