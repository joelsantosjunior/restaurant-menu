import styled from 'styled-components'
import Menu from '../ui/menu/Menu'
import { useSelector } from 'react-redux'
import { AppState } from '../../store/store'
import LanguageToggle from '../ui/language-toggle/LanguageToggle'

const MyHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  .header-banner {
    height: 150px;
  }

  img {
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
  }
`

const Header = () => {
  const webSettings = useSelector((state: AppState) => state.ui.appSettings)

  return (
    <MyHeader>
      <LanguageToggle></LanguageToggle>
      <Menu></Menu>
      <div className="header-banner">
        <img src={webSettings?.bannerImage} alt="restaurant banner image" />
      </div>
    </MyHeader>
  )
}

export default Header
