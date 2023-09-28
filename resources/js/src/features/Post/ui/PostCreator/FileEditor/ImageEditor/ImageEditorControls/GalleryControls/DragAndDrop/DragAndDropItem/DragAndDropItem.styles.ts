import { styled } from 'styled-components'

const getTranslate = (order: number, itemsCount: number) => {
    let result = ''

    if (itemsCount === 10) {
        if (order > 4) {
            result = `${(order - 5) * 125}px`
        } else {
            result = `${order * 125}px`
        }
    } else if (order > 4) {
        result = `${(order - 5) * 110}px`
    } else {
        result = `${order * 110}px`
    }

    result += order > 4 ? ', 110px' : ', 0'

    return result
}

interface CardProps {
    src: string
    list_length: number
    order: number
    is_active: boolean
    is_dragged: boolean
    is_over: boolean
}

export const Card = styled.div<CardProps>`
    position: absolute;
    width: 100px;
    height: 100px;
    background-size: cover;
    background-position: center center;
    background-image: url(${props => props.src});
    opacity: ${props => props.is_dragged ? '0' : props.is_active ? '1' : '.5'};
    transform: translate(${props => getTranslate(props.order, props.list_length)}) ${props => props.is_over ? 'scale(1.05)' : ''};
    transition: all .15s, background-image 0s;
`

export const DeleteImageButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 2px;
    right: 2px;
    background-color: rgba(0, 0, 0, .6);
    padding: 5px;
    border-radius: 50%;
    cursor: pointer;
    transition: .15s;

    &:hover {
        background-color: rgba(0, 0, 0, .8);
    }
`
