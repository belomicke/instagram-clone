import { styled } from 'styled-components'

export const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`

export const ImageContainer = styled.div<{ aspect_ratio: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    ${props => props.aspect_ratio === '4/5' ? `
        aspect-ratio: 4 / 5;
    ` : `
        width: 100%;
    `}
    overflow: hidden;
    margin: 0 auto;
`

export const ImagePreview = styled.div<{ src: string, aspect_ratio: string }>`
    background-image: url(${props => props.src});
    aspect-ratio: ${props => props.aspect_ratio};
    ${props => Number(props.aspect_ratio.split('/')[0]) > Number(props.aspect_ratio.split('/')[1]) ?
        'width: 100%'
        :
        'height: 100%'};
    background-size: cover;
    background-position: 50% 50%;
`
