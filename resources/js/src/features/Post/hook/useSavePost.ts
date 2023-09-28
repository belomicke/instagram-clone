import { useEffect, useRef, useState } from 'react'
import { useFeedStore } from '@/entities/Feed/model'
import { usePostStore } from '@/entities/Post/model'
import { postApi } from '@/entities/Post/api'
import Post from '@/shared/api/models/Post/Post'

const useSavePost = (post: Post) => {
    const [isSaved, setIsSaved] = useState<boolean>(post.is_saved)
    const [timeout, setVoteTimeout] = useState<number>()

    const addPostToStartOfFeed = useFeedStore((state) => state.addItemToStartOfFeed)
    const removePostFromFeed = useFeedStore((state) => state.removeItemFromFeed)

    const addToSaved = usePostStore((state) => state.addToSaved)
    const removeFromSaved = usePostStore((state) => state.removeFromSaved)

    const prevSaveStatus = useRef<boolean>(post.is_saved)

    const saveHandler = () => {
        if (!isSaved) {
            addToSaved(post.id)
        } else {
            removeFromSaved(post.id)
        }

        setIsSaved(!isSaved)
    }

    const debounce = (status: boolean) => {
        clearTimeout(timeout)
        setVoteTimeout(setTimeout(() => {
            if (prevSaveStatus.current === post.is_saved) {
                return
            }

            if (status) {
                postApi.addToSaved(post.id)
                addPostToStartOfFeed('saved posts', post.id)
            } else {
                postApi.removeFromSaved(post.id)
                removePostFromFeed('saved posts', post.id)
            }
        }, 300))
    }

    useEffect(() => {
        debounce(isSaved)
    }, [isSaved])

    return {
        isSaved: post.is_saved,
        saveHandler
    }
}

export default useSavePost
