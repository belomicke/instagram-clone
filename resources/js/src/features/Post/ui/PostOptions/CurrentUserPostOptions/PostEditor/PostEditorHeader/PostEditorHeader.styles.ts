import { styled } from 'styled-components'

export const Header = styled.div<{ with_buttons: boolean }>`
    display: flex;
    justify-content: ${props => props.with_buttons ? 'space-between' : 'center'};
    align-items: center;
    width: 100%;
    position: relative;
    border-bottom: 1px solid rgb(50, 50, 50);
    height: 40px;
    padding: 10px;
`

export const Title = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 700;
    font-size: 16px;
`
