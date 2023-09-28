import { styled } from 'styled-components'

export const Stat = styled.div<{ clickable: boolean }>`
    font-size: 16px;
    ${props => props.clickable ? 'cursor: pointer;' : ''};
`
export const StatValue = styled.span`
    font-weight: 700;
`
