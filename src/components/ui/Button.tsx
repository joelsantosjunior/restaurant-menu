import styled from 'styled-components'

const MyButton = styled.button`
  padding: 0.5em 1em;

  font-size: 1em;
  font-weight: bold;
  border-radius: 1em;
  border: none;
  box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.2);

  cursor: pointer;
  height: min(3em, 100%);
  padding: 0.8em 2em;
  text-align: center;
  display: flex;
  transition: all 0.2s ease-in-out;

  &.primary {
    background-color: var(--color-primary);
    color: var(--color-text-secondary);
  }

  &.secondary {
    background-color: var(--color-secondary);
    color: var(--color-text-secondary);
  }

  &.icon {
    padding: 0.8em;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--color-primary);

    img {
      width: 1.5em;
      height: 1.5em;
    }
  }

  &:active {
    scale: 0.95;
  }
`

interface UIButtonProps {
  children: React.ReactNode
  type?: string
  outline?: boolean
  onClick: () => void
}

const UIButton = ({ children, onClick, type = 'primary' }: UIButtonProps) => {
  return (
    <MyButton className={type} onClick={onClick}>
      {children}
    </MyButton>
  )
}

export default UIButton
