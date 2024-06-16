import { useDispatch, useSelector } from 'react-redux'
import { StateMenuItem, unselectItem, updateOrder } from '../store/menuSlice'
import styled from 'styled-components'
import UIButton from '../components/ui/Button'
import { useEffect, useState } from 'react'
import { AppState } from '../store/store'
import { GenericModal, ModalActions } from './GenericModal'

const ModalImage = styled.div`
  height: 100%;
  width: 18em;
  border-radius: 1em 0 0 1em;
  overflow: hidden;
  float: left;

  @media (max-width: 768px) {
    border-radius: 1em 1em 0 0;
    width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

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

interface ItemModalProps {
  item: StateMenuItem
  onClose: () => void
}

const ItemModal = ({ item, onClose }: ItemModalProps) => {
  const dispatch = useDispatch()

  const selectedItem = useSelector((state: AppState) =>
    state.menu.selectedItems.find((i) => i.name === item.name)
  )

  const [buttonText, setButtonText] = useState('Add to Order')

  const [qtd, setQtd] = useState(selectedItem?.qtd || 1)

  const handleAddItemToBasket = () => {
    dispatch(
      updateOrder({
        ...item,
        qtd,
      })
    )

    onClose()
  }

  const handleRemoveItemToBasket = () => {
    dispatch(unselectItem(item))
    onClose()
  }

  const handleUpdateBasket = () => {
    if (qtd > 0) {
      handleAddItemToBasket()
    } else {
      handleRemoveItemToBasket()
    }
  }

  useEffect(() => {
    if (qtd === 0) {
      setButtonText('Remove')
      return
    }

    if (selectedItem) {
      setButtonText('Update Order')
      return
    }

    setButtonText('Add to Order')
  }, [qtd, selectedItem])

  return (
    <GenericModal>
      <div onClick={onClose} className="close-button">
        <img src="/img/close.svg" alt="" />
      </div>
      <ModalImage>
        <img src={'/img/' + item.img} alt={item.name} />
      </ModalImage>
      <ModalContent>
        <h1>{item.name}</h1>
        <p>{item.ingredients}</p>
        <h1 className="price">R$ {qtd ? item.price * qtd : item.price}</h1>
        <br />
        <ModalActions>
          <div>
            <UIButton
              type="icon"
              onClick={() => {
                qtd > 0 && setQtd(qtd - 1)
              }}
            >
              <img src="/img/minus.svg" alt="" />
            </UIButton>
            <input type="text" disabled={true} value={qtd} />
            <UIButton
              type="primary icon"
              onClick={() => {
                setQtd(qtd + 1)
              }}
            >
              <img src="/img/plus.svg" alt="" />
            </UIButton>
          </div>
          <UIButton onClick={handleUpdateBasket}>{buttonText}</UIButton>
        </ModalActions>
      </ModalContent>
    </GenericModal>
  )
}

export default ItemModal
