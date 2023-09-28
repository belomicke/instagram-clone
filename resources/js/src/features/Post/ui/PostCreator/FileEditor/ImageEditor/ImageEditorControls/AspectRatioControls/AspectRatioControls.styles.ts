import { styled } from 'styled-components'

export const AspectRatioSelector = styled.div<{ visible: boolean }>`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 40px;
    left: 0;
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

export const Option = styled.div<{ active: boolean }>`
    display: flex;
    align-items: center;
    grid-gap: 10px;
    padding: 10px 15px;
    font-size: 14px;
    font-weight: 700;
    color: var(--primary-text);
    cursor: pointer;
    user-select: none;
    transition: .15s;

    &:hover {
        background-color: rgba(0, 0, 0, .4);
    }

    ${props => props.active && `
        background-color: rgba(0, 0, 0, .8);

        &:hover {
            background-color: rgba(0, 0, 0, .8);
        }
    `}

    & + & {
        border-top: 1px solid rgb(50, 50, 50);
    }
`
