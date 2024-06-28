import { useSelector } from 'react-redux'
import { AppState } from '../store/store'
import { useEffect, useState } from 'react'
import { localeDictionary } from '../utils/locale.utils'

const useLocalizedText = (key: string) => {
  const locale = useSelector((state: AppState) => state.ui.locale)

  const initialText = localeDictionary[`${key}.${locale}`]

  const [text, setText] = useState<string | undefined>(initialText)

  useEffect(() => {
    setText(localeDictionary[`${key}.${locale}`])
  }, [locale])

  return text || key
}

export default useLocalizedText
