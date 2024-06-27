import Menu from '../ui/menu/Menu'
import { useSelector } from 'react-redux'
import { AppState } from '../../store/store'
import LanguageToggle from '../ui/language-toggle/LanguageToggle'
import styles from './header.module.scss'

const Header = () => {
  const webSettings = useSelector((state: AppState) => state.ui.appSettings)

  return (
    <div className={styles.header}>
      <LanguageToggle></LanguageToggle>
      <Menu text="Menu" rightIcon="/hamburger.svg"></Menu>
      <div className={styles.headerBanner}>
        <img
          className={styles.bannerImage}
          src={webSettings?.bannerImage}
          alt="restaurant banner image"
        />
      </div>
    </div>
  )
}

export default Header
