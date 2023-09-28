import styled from 'styled-components'

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
`

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: var(--modal-background-color);
`

export const ModalCenteredContainer = styled.div`
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
