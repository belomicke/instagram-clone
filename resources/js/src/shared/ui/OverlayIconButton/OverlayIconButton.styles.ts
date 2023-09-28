import { styled } from 'styled-components'

interface props {
    active?: boolean
    right?: string
    bottom?: string
    top?: string
    left?: string
}

export const Button = styled.button<props>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    outline: 0;
    border: 0;
    ${props => props.left && `left: ${props.left}`};
    ${props => props.right && `right: ${props.right}`};
    ${props => props.bottom && `bottom: ${props.bottom}`};
    ${props => props.top && `top: ${props.top}`};
    background-color: ${props => props.active ? 'rgba(0, 0, 0, .6)' : 'rgba(0, 0, 0, .4)'};
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    transition: .15s;

    &:hover {
        background-color: rgba(0, 0, 0, .6);
    }
`
