import { forwardRef, HTMLAttributes, LegacyRef, useMemo } from 'react'
import PostCardFeedItem from './PostCardFeedItem'
import Feed from '@/shared/api/models/Feed/Feed'
import { Container } from './PostFeedRow.styles'

interface props extends HTMLAttributes<HTMLDivElement> {
    rowNumber: number
    feed: Feed
}

type refType = LegacyRef<HTMLDivElement>

const PostFeedRow = forwardRef<HTMLDivElement, props>(({ feed, rowNumber, ...props}: props, ref: refType) => {
    const slice = useMemo(() => {
        return feed.items.slice(rowNumber * 3, rowNumber * 3 + 3)
    }, [feed.items])

    return (
        <Container {...props} ref={ref}>
            {slice.map(id => (
                <PostCardFeedItem
                    id={id}
                    key={id}
                />
            ))}
        </Container>
    )
})

PostFeedRow.displayName = 'PostFeedRow'

export default PostFeedRow
