import { styled } from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    grid-gap: 20px;
    padding: 10px 20px;
    height: 70px;
    cursor: pointer;
    transition: .15s;

    &:hover {
        background-color: var(--primary-background-hover);
    }
`

export const Username = styled.div`
    font-weight: 700;
`
