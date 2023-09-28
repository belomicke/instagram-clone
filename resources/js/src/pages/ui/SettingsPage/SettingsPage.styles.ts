import { styled } from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
    max-width: 940px;
    width: 100%;
`

export const Subtitle = styled.div`
    font-size: 14px;
    color: var(--secondary-text);
`

export const Biography = styled.textarea`
    width: 100%;
    resize: none;
    font-size: 14px;
    padding: 8px 12px;
    outline: 0;
    background-color: transparent;
    color: var(--primary-text);
    border-radius: 4px;
    border: 1px solid var(--border-color);
    transition: .15s;

    &:hover {
        border-color: var(--border-hover-color);
    }

    &:focus-within {
        border-color: var(--primary-blue);
    }
`

export const InputBlock = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 5px;
`

export const Label = styled.div`
    font-size: 14px;
    font-weight: 700;
`

export const Footer = styled.div`
    display: flex;
`
