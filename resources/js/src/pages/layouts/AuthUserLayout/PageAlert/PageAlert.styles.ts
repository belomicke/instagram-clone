import { keyframes, styled } from 'styled-components'

const rotate = keyframes`
  0% {
    bottom: -60px;
  }

  5% {
    bottom: 0;
  }

  75% {
    bottom: 0;
  }

  80% {
    bottom: -60px;
  }

  100% {
    bottom: -60px;
  }
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    animation: ${rotate} 5s linear;
    position: fixed;
    left: 0;
    bottom: -60px;
    width: 100%;
    background-color: rgb(60, 60, 60);
    padding: 20px 10px;
    height: 60px;
`
