import styled from 'styled-components'
import {
    EDITOR_BODY_HEIGHT,
    EDITOR_HEIGHT,
    EDITOR_WIDTH,
    EXTENDED_EDITOR_WIDTH
} from '@/features/Post/ui/PostCreator/consts'

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
