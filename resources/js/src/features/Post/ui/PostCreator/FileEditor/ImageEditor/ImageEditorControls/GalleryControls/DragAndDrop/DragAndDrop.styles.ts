import { styled } from 'styled-components'

export const Container = styled.div<{ items_count: number }>`
    display: flex;
    position: relative;
    height: ${props => props.items_count > 5 ? '210px' : '100px'};
`

export const Items = styled.div`
    width: 100%;
    transition: .15s;
`
