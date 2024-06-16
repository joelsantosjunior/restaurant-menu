import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { AppState } from '../../store/store'
import UIButton from '../ui/Button'

const MyFooter = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: var(--footer-height);
  background-color: var(--color-bg);
  color: var(--color-text-secondary);

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 1em;

  h2 {
    text-align: left;
    color: var(--color-text-primary);
  }

  div {
    button {
      display: inline;
    }
  }
`

const Footer: React.FC = () => {
  const total = useSelector((state: AppState) =>
    state.menu.selectedItems.reduce(
      (acc, item) => acc + item.price * item.qtd,
      0
    )
  )

  return (
    <MyFooter>
      <h2 className="price">Total: R$ {total}</h2>
      <div>
        {/* <UIButton
          outline={true}
          onClick={() => {
            dispatch(cleanSelection())
          }}
        >
          Limpar
        </UIButton> */}
        {total > 0 && <UIButton onClick={() => {}}>Finalizar Pedido</UIButton>}
      </div>
    </MyFooter>
  )
}

export default Footer
