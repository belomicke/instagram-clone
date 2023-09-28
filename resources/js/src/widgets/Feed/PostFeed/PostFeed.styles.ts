import { styled } from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    margin: 0 auto;
    width: 100%;
    position: relative;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-gap: 20px;
    max-width: 470px;
    margin: 0 auto;
    width: 100%;
`

export const Posts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Item = styled.div`
    border-bottom: 1px solid var(--border-color);
    padding: 20px 0;

    &:first-child {
        padding-top: 0;
        padding-bottom: 20px;
    }

    &:last-child {
        border: 0;
    }
`
