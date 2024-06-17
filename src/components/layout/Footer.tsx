import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import UIButton from '../ui/Button'
import { setShowOrderModel } from '../../store/UISlice'
import useTotal from '../../hooks/useTotal'

const MyFooter = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: calc(var(--footer-height) + env(safe-area-inset-bottom));
  background-color: var(--color-bg);
  color: var(--color-text-secondary);

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 1em calc(env(safe-area-inset-bottom)) 1em;

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
  const dispatch = useDispatch()

  const total = useTotal()

  const handleFinishOrder = () => {
    dispatch(setShowOrderModel(true))
  }

  return (
    <>
      {total > 0 && (
        <MyFooter className="slide-from-bottom-enter-active">
          <h2 className="price">Total: R$ {total}</h2>
          <div>
            <UIButton onClick={handleFinishOrder}>Meu Pedido</UIButton>
          </div>
        </MyFooter>
      )}
    </>
  )
}

export default Footer
