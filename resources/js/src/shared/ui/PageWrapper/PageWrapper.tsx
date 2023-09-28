import React from 'react'
import { PageWrapperSizes } from '@/shared/ui/PageWrapper/types'
import { Wrapper } from './PageWrapper.styles'

interface props {
    children?: React.ReactNode
    maxWidth?: PageWrapperSizes
}

const PageWrapper = ({ children, maxWidth = '940' }: props) => {
    return (
        <Wrapper max_width={maxWidth}>
            {children}
        </Wrapper>
    )
}

export default PageWrapper
