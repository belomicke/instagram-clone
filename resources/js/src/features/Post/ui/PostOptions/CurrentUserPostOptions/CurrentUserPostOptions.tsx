import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PostEditor from './PostEditor'
import DeletePostDialog from './DeletePostDialog'
import useVisibleLikeCount from '@/entities/Post/hooks/useVisibleLikeCount'
import TheMenu from '@/shared/ui/TheMenu'
import TheModal from '@/shared/ui/TheModal'
import Post from '@/shared/api/models/Post/Post'

interface props {
    post: Post
    onDelete: () => void
    close: () => void
}

const CurrentUserPostOptions = ({ post, onDelete, close }: props) => {
    const [menuIsHidden, setMenuIsHidden] = useState<boolean>(false)

    const [deletePostDialogIsOpen, setDeletePostDialogIsOpen] = useState<boolean>(false)
    const [postEditorIsOpen, setPostEditorIsOpen] = useState<boolean>(false)

    const { toggleLikeCountVisibility } = useVisibleLikeCount(post.id)

    const toggleLikeCountVisibilityHandler = () => {
        toggleLikeCountVisibility()
        close()
    }

    const openDeletePostDialog = () => {
        setDeletePostDialogIsOpen(true)
        setMenuIsHidden(true)
    }

    const closeDeletePostDialogHandler = () => {
        setDeletePostDialogIsOpen(false)
        setMenuIsHidden(false)
    }

    const successDeletePost = () => {
        setDeletePostDialogIsOpen(false)
        close()
        onDelete()
    }

    const successEditPost = () => {
        setPostEditorIsOpen(false)
        close()
    }

    return (
        <>
            {!menuIsHidden &&
                <TheMenu
                    options={[
                        {
                            label: 'Удалить',
                            variant: 'danger',
                            onClick: () => openDeletePostDialog()
                        },
                        {
                            label: 'Редактировать',
                            onClick: () => setPostEditorIsOpen(true)
                        },
                        {
                            label: post.like_count_is_hidden ? 'Показывать число отметок "Нравится"' : 'Скрывать число отметок "Нравится"',
                            onClick: () => toggleLikeCountVisibilityHandler()
                        },
                        {
                            label: 'Отмена',
                            onClick: () => close()
                        }
                    ]}
                />
            }
            <DeletePostDialog
                id={post.id}
                isActive={deletePostDialogIsOpen}
                close={() => closeDeletePostDialogHandler()}
                onSuccess={() => successDeletePost()}
            />
            <TheModal isActive={postEditorIsOpen} close={() => setPostEditorIsOpen(false)}>
                <PostEditor
                    post={post}
                    success={() => successEditPost()}
                    close={() => setPostEditorIsOpen(false)}
                />
            </TheModal>
        </>
    )
}

export default CurrentUserPostOptions
