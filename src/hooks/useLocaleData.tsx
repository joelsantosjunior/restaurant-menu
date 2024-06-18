import { useSelector } from 'react-redux'
import { availableLocales } from '../store/UISlice'
import { LocaleObject, localeDictionary } from '../utils/locale.utils'
import { AppState } from '../store/store'

const useLocaleData = (): ((key: keyof LocaleObject) => string) => {
  let locale = useSelector((state: AppState) => state.ui.locale)

  if (!availableLocales.includes(locale)) {
    locale = 'en'
  }

  return (key: keyof LocaleObject) => {
    return localeDictionary[`${key}.${locale}`]
  }
}

export default useLocaleData
