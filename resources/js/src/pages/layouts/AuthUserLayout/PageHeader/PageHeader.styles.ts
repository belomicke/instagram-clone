import { styled } from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid var(--border-color);
    position: sticky;
    top: 0;
    left: 0;
    height: 80px;
    width: 100%;
    z-index: 1000;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 940px;
    width: 100%;
    height: 100%;
    background-color: var(--pg-background);
`

export const NavBar = styled.div`
    display: flex;
    grid-gap: 10px;
`

export const AvatarWrapper = styled.div<{ active: boolean }>`
    display: flex;
    border-radius: 50%;
    border: ${props => props.active ? '2px solid rgb(245, 245, 245)' : ''};
    position: relative;
    height: 24px;
    width: 24px;
    overflow: hidden;
`

export const Avatar = styled.div<{ src: string }>`
    display: flex;
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center center;
    position: absolute;
    width: 100%;
    height: 100%;
`
