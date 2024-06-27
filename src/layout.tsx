import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import styles from './layout.module.scss'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header></Header>
      <div className={styles.flexContainerWrapper}>
        <div className={styles.container}>{children}</div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Layout
