import React, { useEffect, useRef } from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'
import FeedEndTrigger from '@/entities/Feed/ui/FeedEndTrigger'
import getOrCreateFeed from '@/entities/Feed/hooks/getOrCreateFeed'
import UserListItem from '@/entities/User/ui/UserListItem'
import TheModal from '@/shared/ui/TheModal'
import {
    Container,
    Content,
    Header,
    HeaderTitle, ListWrapper
} from './UserFeedModal.styles'

interface props {
    title: string
    feedKey: string
    getNextPage: () => void
    isActive: boolean
    close: () => void
}

const UserFeedModal = ({ title, feedKey, getNextPage, isActive, close }: props) => {
    const feed = getOrCreateFeed(feedKey)
    const container = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (feed.hasNextPage && feed.total === 0 && feed.items.length === 0) {
            getNextPage()
        }
    }, [feed])

    const virtualizer = useVirtualizer({
        getScrollElement: () => container.current,
        count: feed.items.length,
        estimateSize: () => 70,
        overscan: 5
    })

    const items = virtualizer.getVirtualItems()

    return (
        <TheModal
            isActive={isActive}
            close={() => close()}
        >
            <Container>
                <Header>
                    <HeaderTitle>{title}</HeaderTitle>
                </Header>
                <Content ref={container}>
                    <ListWrapper
                        style={{
                            position: 'relative',
                            height: virtualizer.getTotalSize(),
                        }}
                    >
                        {items.map((virtualRow) => (
                            <UserListItem
                                id={feed.items[virtualRow.index]}
                                onClick={() => close()}
                                style={{
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    position: 'absolute',
                                    transform: `translateY(${virtualRow.start}px)`,
                                }}
                                data-index={virtualRow.index}
                                ref={virtualizer.measureElement}
                                key={virtualRow.key}
                            />
                        ))}
                        {feed.items.length < feed.total && feed.hasNextPage &&
                            <FeedEndTrigger callback={getNextPage} />
                        }
                    </ListWrapper>
                </Content>
            </Container>
        </TheModal>
    )
}

export default UserFeedModal
