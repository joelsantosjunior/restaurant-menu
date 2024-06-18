import styled from 'styled-components'
import { Locale, availableLocales, setLocale } from '../../store/UISlice'
import { useDispatch } from 'react-redux'
import { resetOrder, setMenu } from '../../store/menuSlice'

const MyLanguageToggle = styled.div`
  position: absolute;
  top: 1em;
  left: 1em;
  display: flex;
  gap: 1em;

  div {
    cursor: pointer;
    transition: transform 0.2s;

    &:active {
      transform: scale(0.9);
    }
  }
`

const LanguageToggle = () => {
  const dispatch = useDispatch()
  const handleChangeLocale = (locale: string) => {
    dispatch(setMenu(locale as Locale))
    dispatch(setLocale(locale as Locale))
    dispatch(resetOrder())
  }

  return (
    <MyLanguageToggle>
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
    </MyLanguageToggle>
  )
}

export default LanguageToggle
