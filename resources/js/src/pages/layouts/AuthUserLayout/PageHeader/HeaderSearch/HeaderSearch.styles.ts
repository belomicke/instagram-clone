import { styled } from 'styled-components'

export const Container = styled.div`
    display: flex;
    padding: 0 15px;
    border-radius: 8px;
    color: var(--secondary-text);
    background: var(--primary-background);
    width: 320px;
    height: 40px;
    position: relative;
`

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const Input = styled.input`
    font-size: 16px;
    line-height: 20px;
    color: var(--primary-text);
    background-color: transparent;
    width: 100%;
    height: 100%;
    border: 0;
    outline: 0;
    padding: 0;
    margin: 0;
`

export const SearchResultContainer = styled.div`
    display: flex;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    position: absolute;
    width: 100%;
    top: calc(100% + 10px);
    left: 0;
    border-radius: 8px;
    padding: 5px 0;
    min-height: 320px;
    background-color: var(--pg-background);
    border: 1px solid var(--border-color);
`
