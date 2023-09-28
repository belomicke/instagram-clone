import { Image } from './Avatar.styles'
import { HTMLAttributes } from 'react'

interface props extends HTMLAttributes<HTMLDivElement> {
    className?: string
    src: string
    size: number
}

const Avatar = ({ className, src, size, ...props }: props) => {
    return (
        <Image
            className={className}
            src={src}
            size={size}
            {...props}
        />
    )
}

export default Avatar
