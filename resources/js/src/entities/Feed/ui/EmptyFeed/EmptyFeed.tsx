import React from 'react'
import {
    Container,
    Title,
    Subtitle
} from './EmptyFeed.styles'

interface props {
    icon: React.ReactNode
    title: string
    subtitle: string
}

const EmptyFeed = ({ icon, title, subtitle }: props) => {
    return (
        <Container>
            {icon}
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Container>
    )
}

export default EmptyFeed
