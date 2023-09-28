import { styled } from 'styled-components'

export const Wrapper = styled.div`
    position: absolute;
    bottom: 10px;
    width: 100%;
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    grid-gap: 5px;
`

export const Step = styled.div<{ active: boolean }>`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${props => props.active ? 'rgb(0, 130, 255)' : 'rgb(160, 160, 160)'};
    transition: .15s;
`
