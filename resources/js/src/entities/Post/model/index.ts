import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import Post from '@/shared/api/models/Post/Post'

type State = {
    posts: Post[]
}

type Actions = {
    addPost: (post: Post) => void
    like: (id: string) => void
    unlike: (id: string) => void
    addToSaved: (id: string) => void
    removeFromSaved: (id: string) => void
    showLikeCount: (id: string) => void
    hideLikeCount: (id: string) => void
    deletePost: (id: string) => void
    editPost: (id: string, description: string) => void
}

export const usePostStore = create(
    immer<State & Actions>((set) => ({
        posts: [],
        addPost: (post: Post) => {
            set((state) => {
                if (!state.posts.find(item => item.id === post.id)) {
                    state.posts.push(post)
                }
            })
        },
        like: (id: string) => {
            set((state) => {
                const post = state.posts.find(post => post.id === id)

                if (!post.is_liked) {
                    post.like_count += 1
                    post.is_liked = true
                }
            })
        },
        unlike: (id: string) => {
            set((state) => {
                const post = state.posts.find(post => post.id === id)

                if (post.is_liked) {
                    post.like_count -= 1
                    post.is_liked = false
                }
            })
        },
        addToSaved: (id: string) => {
            set((state) => {
                const post = state.posts.find(post => post.id === id)

                post.is_saved = true
            })
        },
        removeFromSaved: (id: string) => {
            set((state) => {
                const post = state.posts.find(post => post.id === id)

                post.is_saved = false
            })
        },
        showLikeCount: (id: string) => {
            set((state) => {
                const post = state.posts.find(post => post.id === id)

                post.like_count_is_hidden = false
            })
        },
        hideLikeCount: (id: string) => {
            set((state) => {
                const post = state.posts.find(post => post.id === id)

                post.like_count_is_hidden = true
            })
        },
        deletePost: (id: string) => {
            set((state) => {
                state.posts = state.posts.filter(post => post.id !== id)
            })
        },
        editPost: (id: string, description: string) => {
            set((state) => {
                const post = state.posts.find(post => post.id === id)

                post.description = description
            })
        }
    }))
)
