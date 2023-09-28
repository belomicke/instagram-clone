import { styled } from 'styled-components'

export const Container = styled.div<{ active: boolean }>`
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 1px;
    height: 20px;
    width: 40px;
    background-color: ${props => props.active ? 'rgb(0, 150, 255)' : 'rgb(80, 80, 80)'};
    position: relative;
    transition: background-color .15s;
`

export const Action = styled.div<{ active: boolean }>`
    background-color: rgb(255, 255, 255);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    position: absolute;
    left: ${props => props.active ? 'calc(100% - 18px)' : '2px'};
    transition: left .15s;
`
