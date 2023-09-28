import { styled } from 'styled-components'

export const Container = styled.div<{ active: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-gap: 10px;
    cursor: pointer;
    font-weight: ${props => props.active ? '700' : '400'};
    user-select: none;
    border-radius: 5px;
    padding: 10px;
    position: relative;
    transition: .15s;

    &:hover {
        background-color: rgba(255, 255, 255, .1);
    }

    @media (max-width: 1480px) {
        display: flex;
        justify-content: center;
        padding: 10px;
    }
`

export const NavBarItemText = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 1480px) {
        display: none;
    }
`
