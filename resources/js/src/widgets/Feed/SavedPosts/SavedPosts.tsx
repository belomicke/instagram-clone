import PostCardFeed from '@/features/Feed/ui/PostCardFeed'
import useSavedPosts from '@/features/Feed/hook/useSavedPosts'
import EmptyFeed from '@/entities/Feed/ui/EmptyFeed'
import BookmarkImageIcon from '@/shared/ui/ImageIcon/BookmarkImageIcon'

const SavedPosts = () => {
    const { feed, fetch } = useSavedPosts()

    if (!feed) return <></>

    return (
        <PostCardFeed
            feed={feed}
            getNextPage={fetch}
        >
            <EmptyFeed
                icon={<BookmarkImageIcon />}
                title="Сохраненное"
                subtitle="Сохраняйте публикации, которые хотите посмотреть снова. Никто не получит уведомления об этом, а сохраненные объекты сможете видеть только вы."
            />
        </PostCardFeed>
    )
}

export default SavedPosts
