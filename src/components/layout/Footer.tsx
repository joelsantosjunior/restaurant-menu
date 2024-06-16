import React from 'react'
import styled from 'styled-components'

const MyFooter = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: var(--footer-height);
  background-color: var(--color-bg);
  color: var(--color-text-secondary);

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2em;
`

const Footer: React.FC = () => {
  return (
    <MyFooter>
      <h2>mesa #32</h2>
    </MyFooter>
  )
}

export default Footer
