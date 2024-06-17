import styled from 'styled-components'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'

const Container = styled.div`
  max-width: 58em;
  padding-bottom: calc(
    var(--footer-height) + 1em + env(safe-area-inset-bottom)
  );
`

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header></Header>
      <Container>{children}</Container>
      <Footer></Footer>
    </>
  )
}

export default Layout
