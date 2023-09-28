import { styled } from 'styled-components'
import { PageWrapperSizes } from '@/shared/ui/PageWrapper/types'

export const Wrapper = styled.div<{ max_width: PageWrapperSizes }>`
    width: 100%;
    padding-top: 20px;
    max-width: ${props => props.max_width}px;
    margin: 0 auto;
`
