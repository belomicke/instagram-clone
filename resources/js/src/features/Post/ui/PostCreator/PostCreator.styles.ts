import { styled } from 'styled-components'
import { EDITOR_BODY_HEIGHT, EDITOR_HEIGHT, EDITOR_WIDTH, EXTENDED_EDITOR_WIDTH } from './consts'

export const Container = styled.div<{ extended: boolean }>`
    display: flex;
    flex-direction: column;
    background-color: var(--primary-background);
    height: ${EDITOR_HEIGHT}px;
    position: relative;
    width: ${props => props.extended ? EXTENDED_EDITOR_WIDTH : EDITOR_WIDTH}px;
    border-radius: 5px;
    overflow: hidden;
    transition: .25s;
`

export const Body = styled.div<{ extended: boolean }>`
    display: grid;
    grid-template-columns: ${EDITOR_WIDTH}px ${EXTENDED_EDITOR_WIDTH - EDITOR_WIDTH}px;
    height: ${EDITOR_BODY_HEIGHT}px;
    width: ${props => props.extended ? `${EXTENDED_EDITOR_WIDTH - EDITOR_WIDTH}px` : `${EDITOR_WIDTH}px`};
    top: 40px;
    background-color: var(--primary-background);
    position: absolute;
    z-index: 2;
`

export const Preview = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    background-color: var(--primary-background);
`

export const Info = styled.div<{ visible: boolean }>`
    position: absolute;
    z-index: 1;
    width: ${EXTENDED_EDITOR_WIDTH - EDITOR_WIDTH}px;
    height: 100%;
    background-color: var(--primary-background);
    right: ${props => props.visible ? '-680px' : '0'};
`
