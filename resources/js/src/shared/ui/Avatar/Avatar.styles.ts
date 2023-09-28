import styled from 'styled-components'

export const Image = styled.div<{ src: string, size: number }>`
    border-radius: 50%;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center center;
`
