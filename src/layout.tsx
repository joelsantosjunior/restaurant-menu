import styled from 'styled-components'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f8f9fa;
`

const Container = styled.div`
  padding-bottom: 3em;
  @media screen and (min-width: 960px) {
    display: grid;
    align-items: start;
    grid-template-columns: 1fr 350px;
    margin: 1em auto 0 auto;
  }
`

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header></Header>
      <FlexContainer>
        <Container>{children}</Container>
      </FlexContainer>
      <Footer></Footer>
    </>
  )
}

export default Layout
