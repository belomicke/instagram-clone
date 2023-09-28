import React, { useEffect } from 'react'
import { useWindowVirtualizer } from '@tanstack/react-virtual'
import PostFeedRow from './PostFeedRow'
import FeedEndTrigger from '@/entities/Feed/ui/FeedEndTrigger'
import Feed from '@/shared/api/models/Feed/Feed'
import { Wrapper, Container } from './PostCardFeed.styles'

interface props {
    feed: Feed
    getNextPage: () => void
    children?: React.ReactNode
}

const PostCardFeed = ({ feed, getNextPage, children }: props) => {
    useEffect(() => {
        if (feed && feed.total === 0 && feed.hasNextPage === true) {
            getNextPage()
        }
    }, [feed])

    const virtualizer = useWindowVirtualizer({
        count: Math.ceil(feed.items.length / 3),
        estimateSize: () => 300,
        overscan: 5
    })

    const items = virtualizer.getVirtualItems()

    return (
        feed.items.length ?
            <Wrapper>
                <Container
                    style={{
                        position: 'relative',
                        height: virtualizer.getTotalSize() + items.length * 20,
                    }}
                >
                    {items.map((virtualRow, index) => (
                        <PostFeedRow
                            style={{
                                top: 0,
                                left: 0,
                                width: '100%',
                                position: 'absolute',
                                transform: `translateY(${virtualRow.start + 20 * index}px)`,
                            }}
                            feed={feed}
                            rowNumber={virtualRow.index}
                            data-index={virtualRow.index}
                            ref={virtualizer.measureElement}
                            key={virtualRow.key}
                        />
                    ))}
                    {feed.items.length < feed.total && feed.hasNextPage &&
                        <FeedEndTrigger callback={getNextPage} />
                    }
                </Container>
            </Wrapper>
            :
            children
    )
}

export default PostCardFeed
