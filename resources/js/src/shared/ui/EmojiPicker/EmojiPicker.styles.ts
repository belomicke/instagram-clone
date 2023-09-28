import { styled } from 'styled-components'


export const EmojiButton = styled.div<{ active: boolean }>`
    cursor: pointer;

    ${props => props.active ?
        `& svg {
            color: rgb(200, 200, 200);
        }`
        :
        `
        &:hover svg {
            color: rgb(200, 200, 200);
        }
    `};
`

export const PickerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
    border-radius: 5px;
    overflow: hidden;

    position: absolute;
    z-index: 10000;
`

export const PickerContainer = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 15px;
    overflow-y: scroll;
    padding: 10px 0;
    width: 100%;
    height: 100%;
    background-color: var(--secondary-background);
`

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 5px;
`

export const GroupTitle = styled.div`
    padding: 0 10px;
    font-weight: 700;
    color: var(--secondary-text);
`

export const GroupEmoji = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 5px;
    padding: 0  10px;
`
