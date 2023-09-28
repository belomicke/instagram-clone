import { styled } from 'styled-components'
import { Interweave } from 'interweave'

export const Container = styled.div`
    display: inline;
`

export const Author = styled.span`
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    color: rgb(255, 255, 255);
    transition: .15s;

    &:hover {
        color: rgb(220, 220, 220);
    }

    &:active {
        color: rgb(160, 160, 160);
    }
`

export const Description = styled(Interweave)`
    font-size: 16px;
    font-weight: 400;
    color: var(--primary-text);
`

export const More = styled.span`
    color: var(--secondary-text);
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    transition: .15s;

    &:hover {
        color: var(--secondary-text-hover);
    }

    &:active {
        color: var(--secondary-text-pressed);
    }
`
