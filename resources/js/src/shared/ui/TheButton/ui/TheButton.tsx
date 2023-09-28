import { useMemo } from 'react'
import LinkButton from './LinkButton'
import BasicButton from './BasicButton'
import { ButtonVariants } from '../types'

interface props {
    text?: string
    icon?: string
    link?: boolean
    block?: boolean
    variant?: ButtonVariants
    onClick?: () => void
    disabled?: boolean
    category?: 'primary' | 'tertiary'
}

const TheButton = ({ link, text, icon, variant = 'success', disabled = false, ...props }: props) => {
    return useMemo(() => {
        if (link) {
            return <LinkButton variant={variant} text={text} {...props} />
        } else {
            return <BasicButton variant={variant} text={text} icon={icon} disabled={disabled} {...props} />
        }
    }, [link, text, icon, variant, props])
}

export default TheButton
