import styled from 'styled-components'

export const InputContainer = styled.div`
    position: relative;
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

export const Input = styled.input`
    width: 100%;
    padding: 8px 12px;
    font-size: 14px;
    outline: 0;
    border: 0;
    color: var(--primary-text);
    background-color: transparent;
    border-radius: 4px;
    height: 32px;
    overflow: hidden;
`
