import { useDispatch, useSelector } from 'react-redux'
import { StateMenuItem, selectItem, unselectItem } from '../store/menuSlice'
import styled from 'styled-components'
import UIButton from '../components/ui/Button'
import { useState } from 'react'
import { AppState } from '../store/store'

const MyItemModal = styled.div`
  position: relative;
  height: 18em;
  border-radius: 1em;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 38em;
  }

  .close-button {
    cursor: pointer;
    position: absolute;
    right: 0;
    padding: 1em;
    display: flex;

    img {
      width: 1em;
      height: 1em;
    }

    @media screen and (max-width: 768px) {
      margin: 0.5em 0.5em 0 0;
      background-color: white;
      border-radius: 50%;
      background-color: white;
    }
  }
`

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

const ModalActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: auto;

  div {
    display: flex;
    gap: 0.5em;
    align-items: center;
  }

  button {
    display: inline;
    margin: auto 0;
  }
`

interface ItemModalProps {
  item: StateMenuItem
  onClose: () => void
}

const ItemModal = ({ item, onClose }: ItemModalProps) => {
  const dispatch = useDispatch()

  const [selectedItem] = useSelector((state: AppState) =>
    state.menu.selectedItems.filter((i) => i.name === item.name)
  )

  const [qtd, setQtd] = useState(selectedItem?.qtd || 1)

  const handleAddItemToBasket = () => {
    dispatch(
      selectItem({
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

  return (
    <MyItemModal>
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
          <UIButton
            onClick={() => {
              if (qtd > 0) {
                handleAddItemToBasket()
              } else {
                handleRemoveItemToBasket()
              }
            }}
          >
            {qtd > 0 ? `Add ${qtd} to Order` : 'Remove'}
          </UIButton>
        </ModalActions>
      </ModalContent>
    </MyItemModal>
  )
}

export default ItemModal
