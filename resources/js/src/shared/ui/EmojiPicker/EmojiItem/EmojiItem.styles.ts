import { styled } from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    width: 44px;
    height: 44px;
    font-size: 32px;
`

export const SkinTonePicker = styled.div`
    display: flex;
    background-color: var(--secondary-background);
    padding: 10px;
    border-radius: 5px;
    top: 0;
    left: 0;
    transform: translateY(calc(-100% - 10px));
    box-shadow: 0 4px 12px rgba(0, 0, 0, .15);
    position: absolute;
    z-index: 10001;
`


export const Emoji = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 44px;
    height: 44px;
    font-size: 32px;

    &:hover {
        background-color: var(--primary-background-hover);
    }
`
