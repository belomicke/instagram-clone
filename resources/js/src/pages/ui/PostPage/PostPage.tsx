import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FullPost from '@/widgets/Post/FullPost'
import usePostById from '@/entities/Post/hooks/usePostById'
import { Wrapper } from './PostPage.styles'

const PostPage = () => {
    const params = useParams()
    const id = params.id

    const { data: post } = usePostById(id)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (!post) return <></>

    return (
        <Wrapper>
            <FullPost />
        </Wrapper>
    )
}

export default PostPage
