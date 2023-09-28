import { styled } from 'styled-components'

export const Container = styled.div`
    display: flex;
    grid-gap: 20px;
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
`

export const Title = styled.div`
    font-size: 14px;
    font-weight: 700;
`

export const Buttons = styled.div`
    display: flex;
    grid-gap: 10px;
`

export const Subtitle = styled.div`
    font-size: 14px;
    color: var(--secondary-text);
`
