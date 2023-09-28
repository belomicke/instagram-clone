import React from 'react'
import EntityPageHeaderStat from './EntityPageHeaderStat'
import {
    AvatarWrapper,
    Container,
    Header,
    Info,
    Stats,
    Username
} from './EntityPageHeader.styles'

interface Stat {
    value: number
    label: string
    onClick?: () => void
}

interface props {
    coverSlot: React.ReactNode
    titleSlot?: React.ReactNode
    title: string
    stats?: Stat[]
    children?: React.ReactNode
}

const EntityPageHeader = ({ coverSlot, titleSlot, title, stats = [], children }: props) => {
    return (
        <Container>
            <AvatarWrapper>
                {coverSlot}
            </AvatarWrapper>
            <Info>
                <Header>
                    <Username>{title}</Username>
                    {titleSlot}
                </Header>
                {stats.length !== 0 &&
                    <Stats>
                        {stats.map(stat => (
                            <EntityPageHeaderStat
                                value={stat.value}
                                label={stat.label}
                                onClick={stat.onClick}
                                key={stat.value}
                            />
                        ))}
                    </Stats>
                }
                {children}
            </Info>
        </Container>
    )
}

export default EntityPageHeader
