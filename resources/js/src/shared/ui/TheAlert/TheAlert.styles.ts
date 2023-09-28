import styled from 'styled-components'
import { AlertTypes } from '@/shared/ui/TheAlert/types'

export const Alert = styled.div<{ type: AlertTypes }>`
    display: flex;
    align-items: center;
    border-radius: 4px;
    line-height: 18px;
    font-size: 13px;
    padding: 8px 16px;

    ${props => props.type === 'success' && `
        background-color: #1c2518;
        color: #67c23a;
    `}

    ${props => props.type === 'warning' && `
        background-color: #292218;
        color: #e6a23c;
    `}

    ${props => props.type === 'error' && `
        background-color: #2b1d1d;
        color: #f56c6c;
    `}
`
