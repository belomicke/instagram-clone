import { useEffect, useState } from 'react'
import PostEditorHeader from './PostEditorHeader'
import ImageViewer from '@/features/Post/ui/PostCreator/FileEditor/ImageEditor/ImageViewer'
import InfoEditor from '@/features/Post/ui/PostCreator/InfoEditor'
import useEditPost from '@/entities/Post/hooks/useEditPost'
import getAspectRatioOfImage from '@/shared/lib/helpers/getAspectRatioOfImage'
import Post from '@/shared/api/models/Post/Post'
import { Container, Body } from './PostEditor.styles'

interface props {
    post: Post
    success: () => void
    close: () => void
}

const PostEditor = ({ post, success, close }: props) => {
    const [selectedImage, setSelectedImage] = useState<number>(0)
    const [aspectRatio, setAspectRatio] = useState<string>('')

    const getAspectRatio = () => {
        const image = new Image()
        image.src = post.media[0].url

        image.onload = function () {
            const result = getAspectRatioOfImage(image)

            setAspectRatio(result)
        }
    }

    useEffect(() => {
        if (!post.media) return

        getAspectRatio()
    }, [post.media])

    const [description, setDescription] = useState<string>(post.description)
    const [hideLikesCount, setHideLikesCount] = useState<boolean>(post.like_count_is_hidden)

    const { mutate: editPost } = useEditPost(post.id)

    const submit = async () => {
        if (description !== post.description) {
            await editPost(description)
            success()
        } else {
            success()
        }
    }

    return (
        <Container extended={true}>
            <PostEditorHeader
                close={close}
                submit={submit}
            />
            <Body extended={true}>
                <ImageViewer
                    images={post.media ? post.media.map(item => item.url) : []}
                    aspectRatio={aspectRatio}
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                />
                <InfoEditor
                    editable={['description']}
                    description={description}
                    setDescription={setDescription}
                    hideLikesCount={hideLikesCount}
                    setHideLikesCount={setHideLikesCount}
                />
            </Body>
        </Container>
    )
}

export default PostEditor
