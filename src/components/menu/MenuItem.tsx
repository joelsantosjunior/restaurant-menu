import styled from 'styled-components'
import { StateMenuItem } from '../../store/menuSlice'

const MyMenuItem = styled.div`
  background-color: var(--color-card-bg);
  display: flex;
  flex-direction: row;
  height: 8em;
  border-radius: 0.75em;
  padding: 0.5em;
  gap: 0.8em;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;

  &:active {
    opacity: 0.5;
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

const Price = styled.h3`
  font-family: 'Inter', sans-serif;
  color: var(--color-secondary);
  font-size: 1.5em;
  font-weight: normal;
  letter-spacing: -0.1em;
  margin: 0;
`

const MenuItem = ({ item }: { item: StateMenuItem }) => {
  return (
    <MyMenuItem>
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
        <Price>R$ {item.price}</Price>
      </div>
    </MyMenuItem>
  )
}

export default MenuItem
