import { styled } from 'styled-components'

export const Container = styled.div`
    display: flex;
`

export const Counter = styled.div<{ clickable: boolean }>`
    font-weight: 700;
    font-size: 16px;
    user-select: none;
    transition: .15s;

    ${props => props.clickable && `
        cursor: pointer;

        &:active {
            color: var(--secondary-text);
        }
    `};
`
