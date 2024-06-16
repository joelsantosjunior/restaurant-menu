import styled from 'styled-components'

export const GenericModal = styled.div`
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

export const ModalActions = styled.div`
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
