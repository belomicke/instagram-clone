import { HTMLAttributes, LegacyRef, forwardRef } from 'react'
import { Button } from './OverlayIconButton.styles'

interface props extends HTMLAttributes<HTMLButtonElement> {
    active?: boolean
    right?: string
    bottom?: string
    top?: string
    left?: string
    children: React.ReactNode
}

const OverlayIconButton = forwardRef(({ children, ...props }: props, ref: LegacyRef<HTMLButtonElement>) => {
    return (
        <Button {...props} ref={ref}>
            {children}
        </Button>
    )
})

OverlayIconButton.displayName = 'OverlayIconButton'

export default OverlayIconButton
