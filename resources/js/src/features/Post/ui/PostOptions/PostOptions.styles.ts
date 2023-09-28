import { styled } from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover > svg {
        color: rgb(160, 160, 160);
    }
`
