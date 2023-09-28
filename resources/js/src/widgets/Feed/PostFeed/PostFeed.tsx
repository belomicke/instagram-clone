import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useWindowVirtualizer } from '@tanstack/react-virtual'
import PostFeedItem from './PostFeedItem'
import FeedEndTrigger from '@/entities/Feed/ui/FeedEndTrigger'
import Feed from '@/shared/api/models/Feed/Feed'
import {
    Wrapper,
    Container,
    Posts,
    Item
} from './PostFeed.styles'

interface props {
    feed: Feed
    getNextPage: () => void
    children?: React.ReactNode
}

const PostFeed = ({ feed, getNextPage, children }: props) => {
    useEffect(() => {
        if (feed && feed.total === 0 && feed.hasNextPage === true) {
            getNextPage()
        }
    }, [feed])

    const parentRef = React.useRef<HTMLDivElement>(null)
    const parentOffsetRef = useRef(0)

    useLayoutEffect(() => {
        parentOffsetRef.current = parentRef.current?.offsetTop ?? 0
    }, [])

    const virtualizer = useWindowVirtualizer({
        count: feed.items.length,
        estimateSize: () => 1200,
        scrollMargin: parentOffsetRef.current
    })

    const items = virtualizer.getVirtualItems()

    return (
        feed.items.length ?
            <Wrapper ref={parentRef}>
                <Container
                    style={{
                        position: 'relative',
                        height: virtualizer.getTotalSize(),
                    }}
                >
                    <Posts
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            transform: `translateY(${
                                items[0].start - virtualizer.options.scrollMargin
                            }px)`,
                        }}
                    >
                        {items.map((virtualRow) => (
                            <Item
                                data-index={virtualRow.index}
                                ref={virtualizer.measureElement}
                                key={virtualRow.key}
                            >
                                <PostFeedItem
                                    id={feed.items[virtualRow.index]}
                                />
                            </Item>
                        ))}
                        {feed.items.length < feed.total && feed.hasNextPage &&
                            <FeedEndTrigger callback={getNextPage} />
                        }
                    </Posts>
                </Container>
            </Wrapper>
            :
            children
    )
}

export default PostFeed
