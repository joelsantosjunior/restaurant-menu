import styled from 'styled-components'
import UIButton from '../components/ui/Button'
import { GenericModal, ModalActions } from './GenericModal'
import useOrder from '../hooks/useOrder'
import useTotal from '../hooks/useTotal'
import { cleanSelection } from '../store/menuSlice'
import { useDispatch } from 'react-redux'

const ModalContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  padding: 1em;

  h1:first-child {
    line-height: 1.2em;
    margin-right: 1em;
    margin-bottom: 1em;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  ul:nth-child(3) {
    margin-top: auto;
  }

  li {
    list-style: none;
    margin: 0.5em 0;
    display: flex;
    justify-content: space-between;
  }
`

interface OrderModalProps {
  onClose: () => void
}

const OrderModal = ({ onClose }: OrderModalProps) => {
  const items = useOrder()
  const total = useTotal()
  const dispatch = useDispatch()

  const handleFinishOrder = () => {
    onClose()
  }

  const handleCancelOrder = () => {
    dispatch(cleanSelection())
    onClose()
  }

  return (
    <GenericModal
      style={{
        height: '32em',
      }}
    >
      <div onClick={onClose} className="close-button">
        <img src="/img/close.svg" alt="" />
      </div>
      <ModalContent>
        <h1>Order</h1>

        <ul>
          {items.map((item) => (
            <li key={item.name}>
              <span>
                {item.qtd}x {item.name}
              </span>
              <span>R$ {item.price}</span>
            </li>
          ))}
        </ul>

        <ul>
          <li>
            <h3>Total</h3>
            <h3>R$ {total}</h3>
          </li>
        </ul>

        <br />
        <ModalActions
          style={{
            marginTop: '0',
          }}
        >
          <UIButton type="secondary" onClick={handleCancelOrder}>
            Cancel
          </UIButton>
          <UIButton onClick={handleFinishOrder}>Finish Order</UIButton>
        </ModalActions>
      </ModalContent>
    </GenericModal>
  )
}

export default OrderModal
