import { styled } from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--primary-background);
    border-radius: 5px;
    width: 400px;
    overflow: hidden;
`

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    height: 40px;
    border-bottom: 1px solid var(--border-color);
`

export const HeaderTitle = styled.div`
    font-weight: 700;
`

export const Content = styled.div`
    min-height: 400px;
    max-height: 400px;
    width: 100%;
    overflow-y: scroll;
`

export const ListWrapper = styled.div`
    position: relative;

`
