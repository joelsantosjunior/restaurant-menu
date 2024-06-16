import styled from 'styled-components'

const Footer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 4em;
  background-color: var(--color-bg);
  color: var(--color-text-secondary);

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2em;
`

const Header = styled.header`
  display: flex;
  justify-content: center;
`

const LogoImg = styled.img`
  margin-top: 2em;
  height: 110px;
`

const Container = styled.div`
  max-width: 53em;
`

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        padding: '20px',
      }}
    >
      <Header>
        <LogoImg src="/img/veggie-bistro-logo.png" alt="" />
      </Header>
      <Container>{children}</Container>
      <Footer>
        <h2>total: R$ 200</h2>
      </Footer>
    </div>
  )
}

export default Layout
