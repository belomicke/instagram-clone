import { styled } from 'styled-components'

const getContainerWidth = (itemsCount: number) => {
    if (itemsCount === 10) {
        return '600px'
    } else if (itemsCount > 5) {
        return '540px 50px'
    } else {
        return `${itemsCount * 100 + (itemsCount - 1) * 10}px 50px`
    }
}

export const Wrapper = styled.div<{ visible: boolean, items_count: number }>`
    display: grid;
    grid-template-columns: ${props => getContainerWidth(props.items_count)};
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    max-width: 620px;
    ${props => props.items_count >= 6 && 'width: 620px'};
    position: absolute;
    bottom: 40px;
    right: 0;
    background-color: rgba(0, 0, 0, .5);
    border-radius: 5px;
    overflow: hidden;
    transition: .15s;

    ${props => props.visible ? `
        opacity: 1;
        bottom: 40px;
    ` :
        `
        bottom: 15px;
        pointer-events: none;
        opacity: 0;
    `}
`

export const AddImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
`

export const AddImageButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    border: 1px solid rgb(40, 40, 40);
    border-radius: 50%;
    transition: all .15s;

    &:hover {
        background-color: rgb(25, 25, 25);
    }

    &:focus {
        background-color: rgb(30, 30, 30);
    }
`
