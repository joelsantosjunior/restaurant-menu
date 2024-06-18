import { useSelector } from 'react-redux'
import { AppState } from '../store/store'
import { localeDictionary } from '../utils/locale.utils'

const LocalizeText = ({
  textKey,
  children,
}: {
  children?: string
  textKey?: string
}) => {
  const locale = useSelector((state: AppState) => state.ui.locale)

  return <>{localeDictionary[`${textKey ?? children}.${locale}`]}</>
}

export default LocalizeText
