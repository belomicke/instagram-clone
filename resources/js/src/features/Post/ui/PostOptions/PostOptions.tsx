import { useState } from 'react'
import OtherUserPostOptions from './OtherUserPostOptions'
import CurrentUserPostOptions from './CurrentUserPostOptions'
import useCurrentUser from '@/entities/Auth/hook/useCurrentUser'
import ThreeDotsIcon from '@/shared/ui/Icon/icons/ThreeDotsIcon'
import Post from '@/shared/api/models/Post/Post'
import TheModal from '@/shared/ui/TheModal'
import { Container } from './PostOptions.styles'

interface props {
    post: Post
    onDelete?: () => void
}

const PostOptions = ({ post, onDelete }: props) => {
    const { data: currentUser } = useCurrentUser()
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

    return (
        <>
            <Container onClick={() => setMenuIsOpen(true)}>
                <ThreeDotsIcon />
            </Container>
            <TheModal isActive={menuIsOpen} close={() => setMenuIsOpen(false)}>
                {currentUser.id === post.user_id ?
                    <CurrentUserPostOptions
                        post={post}
                        onDelete={onDelete}
                        close={() => setMenuIsOpen(false)}
                    />
                    :
                    <OtherUserPostOptions
                        post={post}
                        close={() => setMenuIsOpen(false)}
                    />
                }
            </TheModal>
        </>
    )
}

export default PostOptions
