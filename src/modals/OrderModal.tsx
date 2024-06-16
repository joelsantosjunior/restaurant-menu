import { useSelector } from 'react-redux'
import styled from 'styled-components'
import UIButton from '../components/ui/Button'
import { AppState } from '../store/store'
import { GenericModal, ModalActions } from './GenericModal'

const ModalContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  padding: 1em;

  h1:first-child {
    line-height: 1.2em;
    margin-right: 1em;
  }
`

interface OrderModalProps {
  onClose: () => void
}

const OrderModal = ({ onClose }: OrderModalProps) => {
  const items = useSelector((state: AppState) => state.menu.selectedItems)

  const handleFinishOrder = () => {
    onClose()
  }

  return (
    <GenericModal>
      <div onClick={onClose} className="close-button">
        <img src="/img/close.svg" alt="" />
      </div>
      <ModalContent>
        <h1>Order</h1>

        <ul>
          {items.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>

        <h3>
          <span>Total</span>
          <span></span>
        </h3>

        <br />
        <ModalActions>
          <UIButton onClick={handleFinishOrder}>Finish Order</UIButton>
        </ModalActions>
      </ModalContent>
    </GenericModal>
  )
}

export default OrderModal
