import styled from 'styled-components'

export const Container = styled.div<{ src: string }>`
    width: 100%;
    max-height: 300px;
    max-width: 300px;
    position: relative;
    aspect-ratio: 1 / 1;
    cursor: pointer;

    background-color: var(--primary-background);

    background-image: url(${props => props.src});
    background-size: cover;
    background-position: 50% 50%;
`

export const Overlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-gap: 20px;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;

    ${Container}:hover > & {
        opacity: 1;
        background-color: rgba(0, 0, 0, .4)
    }
`

export const OverlayStat = styled.div`
    display: flex;
    align-items: center;
    grid-gap: 5px;
    height: 100%;
`

export const OverlayStatValue = styled.div`
    height: 19px;
    font-size: 19px;
`

export const Gallery = styled.div`
    position: absolute;
    right: 5px;
    top: 5px;
`
