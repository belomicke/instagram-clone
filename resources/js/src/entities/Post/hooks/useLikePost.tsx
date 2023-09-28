import { useEffect, useRef, useState } from 'react'
import Post from '@/shared/api/models/Post/Post'
import { usePostStore } from '@/entities/Post/model'
import { postApi } from '@/entities/Post/api'

const useLikePost = (post: Post) => {
    const [isLiked, setIsLiked] = useState<boolean>(post.is_liked)
    const [timeout, setVoteTimeout] = useState<number>()

    const like = usePostStore((state) => state.like)
    const unlike = usePostStore((state) => state.unlike)

    const prevLikeStatus = useRef<boolean>(post.is_liked)

    const likeHandler = () => {
        if (!isLiked) {
            like(post.id)
        } else {
            unlike(post.id)
        }

        setIsLiked(!isLiked)
    }

    const debounce = (status: boolean) => {
        clearTimeout(timeout)
        setVoteTimeout(setTimeout(() => {
            if (prevLikeStatus.current === post.is_liked) {
                return
            }

            if (status) {
                postApi.like(post.id)
                prevLikeStatus.current = true
            } else {
                postApi.unlike(post.id)
                prevLikeStatus.current = false
            }
        }, 300))
    }

    useEffect(() => {
        debounce(isLiked)
    }, [isLiked])

    return {
        isLiked: post.is_liked,
        likeCount: post.like_count,
        likeHandler
    }
}

export default useLikePost
