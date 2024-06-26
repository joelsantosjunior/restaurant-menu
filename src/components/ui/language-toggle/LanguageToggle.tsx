import { Locale, availableLocales, setLocale } from '../../../store/UISlice'
import { useDispatch } from 'react-redux'
import { resetOrder } from '../../../store/menuSlice'
import styles from './LanguageToggle.module.scss'

const LanguageToggle = () => {
  const dispatch = useDispatch()
  const handleChangeLocale = (locale: string) => {
    dispatch(setLocale(locale as Locale))
    dispatch(resetOrder())
  }

  return (
    <div className={styles.toggle}>
      {availableLocales.map((locale) => (
        <div
          onClick={() => {
            handleChangeLocale(locale)
          }}
          key={locale}
        >
          {locale} {locale === 'pt' ? '🇧🇷' : '🇺🇸'}
        </div>
      ))}
    </div>
  )
}

export default LanguageToggle
