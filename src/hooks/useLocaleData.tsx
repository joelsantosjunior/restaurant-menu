import { availeLocales } from '../store/UISlice'
import { LocaleObject, localeDictionary } from '../utils/locale.utils'
import useLocale from './useLocale'

const useLocaleData = (): ((key: keyof LocaleObject) => string) => {
  let locale = useLocale()

  if (!availeLocales.includes(locale)) {
    locale = 'en'
  }

  return (key: keyof LocaleObject) => {
    return localeDictionary[`${key}.${locale}`]
  }
}

export default useLocaleData
