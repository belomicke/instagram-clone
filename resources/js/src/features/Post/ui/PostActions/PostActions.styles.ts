import { styled } from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Block = styled.div`
    display: flex;
    grid-gap: 10px;
`

export const Button = styled.div<{ active: boolean, active_color: string }>`
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover * {
        color: ${props => props.active ? props.active_color : 'rgb(160, 160, 160)'};
    }
`
