import styled from 'styled-components'

const TextFieldStyled = styled.div`
  width: 100%;
  border: 0.91px solid #8a94a4;
  border-radius: 7.29px;
  height: 40px;

  text-align: left;

  display: flex;

  input {
    flex: 1;
    border: none;
    outline: none;
    border-radius: 7.29px;
  }

  span {
    width: 40px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

interface TextFieldProps {
  value?: string
  onChange?: (newValue: string) => void
}

const TextField = ({ value = '', onChange }: TextFieldProps) => {
  return (
    <TextFieldStyled>
      <span>
        <img src="search-icon.svg" alt="" />
      </span>
      <input
        value={value}
        onChange={(e) => {
          onChange && onChange(e.target.value)
        }}
        type="text"
        placeholder="Search menu items"
      />
    </TextFieldStyled>
  )
}

export default TextField
