import { styled } from 'styled-components'

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 15px;
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 20px;
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 5px;
`

export const Title = styled.div`
    font-size: 21px;
    font-weight: 600;
`

export const Subtitle = styled.div`
    font-size: 14px;
    color: var(--secondary-text);
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
`
