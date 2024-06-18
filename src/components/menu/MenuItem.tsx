import styled from 'styled-components'
import { StateMenuItem } from '../../store/menuSlice'
import { useState } from 'react'
import ItemModal from '../modals/ItemModal'
import Modal from '../modals/Modal'

const MyMenuItem = styled.div`
  background-color: var(--color-card-bg);
  display: flex;
  flex-direction: row;
  border-radius: 0.75em;
  padding: 0.5em;
  gap: 0.8em;
  box-shadow: var(--shadow-card);
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:active {
    opacity: 0.5;
    transform: scale(0.95);
  }
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  div {
    display: flex;
    margin-top: auto;
  }

  h3 {
    line-height: 1.3em;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.5em;
  }
`

const CardBottomInfoImg = styled.img`
  margin-top: auto;
  width: 2em;
`

const CardImage = styled.img`
  width: 7.68em;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5em;
`

const MenuItem = ({ item }: { item: StateMenuItem }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <MyMenuItem
        onClick={() => {
          setShowModal(true)
        }}
      >
        <div>
          <CardImage src={'/img/' + item.img} alt="" />
        </div>
        <CardContent>
          <h3>{item.name}</h3>
          <p>{item.ingredients}</p>
          <div>
            {!item.contains_gluten && (
              <CardBottomInfoImg
                src="/img/gluten-free.png"
                alt="Contains gluten"
              />
            )}
            {!item.contains_lactose && (
              <CardBottomInfoImg
                src="/img/diary-free.png"
                alt="Contains Lactose"
              />
            )}
          </div>
        </CardContent>
        <div>
          <h3 className="price">R$ {item.price}</h3>
        </div>
      </MyMenuItem>
      {showModal && (
        <Modal>
          <ItemModal
            item={item}
            onClose={() => {
              setShowModal(false)
            }}
          ></ItemModal>
        </Modal>
      )}
    </>
  )
}

export default MenuItem
