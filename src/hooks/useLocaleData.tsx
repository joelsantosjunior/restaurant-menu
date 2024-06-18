import { useSelector } from 'react-redux'
import { AppState } from '../store/store'
import { LocaleObject, localeDictionary } from '../utils/locale.utils'

const useLocaleData = (): ((key: keyof LocaleObject) => string) => {
  const locale = useSelector((state: AppState) => state.ui.locale).toString()

  return (key: keyof LocaleObject) => {
    return localeDictionary[`${key}.${locale}`]
  }
}

export default useLocaleData
