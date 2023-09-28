import { styled } from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 4fr 2fr;
    background-color: var(--pg-background);
    width: 100%;
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 0 1px var(--border-color);
`

export const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-left: 1px solid var(--border-color);
    overflow: hidden;
`

export const Header = styled.div`
    border-bottom: 1px solid var(--border-color);
    height: 60px;
    padding: 10px;
`

export const Body = styled.div`
    padding: 10px;
    height: 100%;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 0;
    }
`
export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 10px;
    padding: 10px;
    border-top: 1px solid var(--border-color);
`
