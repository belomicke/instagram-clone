import Media from '@/shared/api/models/Media'
import { styled } from 'styled-components'

export const Wrapper = styled.div<{ bg: string }>`
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
    background-color: ${props => props.bg};
    position: relative;
    overflow: hidden;
`

export const Container = styled.div<{ item_count: number, current_image: number }>`
    display: flex;
    grid-template-columns: repeat(${props => props.item_count}, 100%);
    width: ${props => props.item_count * 100}%;
    height: 100%;
    margin-left: -${props => props.current_image * 100}%;
    transition: .15s;
`

export const MediaContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const MediaImage = styled.img<{ image: Media }>`
    // background-image: url(${props => props.image.url});
    background-size: cover;
    background-position: center center;
    // aspect-ratio: ${props => `${props.image.width} / ${props.image.height}`};
    // ${props => props.image.width > props.image.height ? 'width: 100%' : 'height: 100%'};

    max-width: 100%;
    max-height: 100%;
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

export const SlideProgressContainer = styled.div<{ current_image: number }>`
    display: flex;
    grid-gap: 5px;
    position: absolute;
    bottom: 10px;
    left: calc(50% - ${props => props.current_image * 15}px);
    transition: .15s;
`

export const SlideProgressItem = styled.div<{ active: boolean, current_image: number, index: number }>`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, ${props => props.active ? '.8' : '.4'});
    transform: ${props => props.active ? 'scale(1)' : 'scale(.8)'};
    ${props => Math.abs(props.current_image - props.index) > 2 ?
        'opacity: 0'
        :
        Math.abs(props.current_image - props.index) > 1 ?
            'transform: scale(.6)'
            :
            ''
};
    transition: .15s;
`
