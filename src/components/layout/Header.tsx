import styled from 'styled-components'
import LanguageToggle from '../ui/LanguageToggle'

const LogoImg = styled.img`
  margin-top: 2em;
  height: 110px;
  position: sticky;
  top: 0;
`

const MyHeader = styled.header`
  display: flex;
  justify-content: center;
  margin: 3em 0;
  position: relative;
`

const Header = () => {
  return (
    <MyHeader>
      <LanguageToggle></LanguageToggle>
      <LogoImg src="/img/veggie-bistro-logo.png" alt="" />
    </MyHeader>
  )
}

export default Header
