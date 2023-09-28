import Post from '@/shared/api/models/Post/Post'
import { Response } from '@/shared/api/types/Response'
import User from '@/shared/api/models/User/User'

export interface FeedResponsePosts {
    result: Post[]
    total: number
    hasNextPage: boolean
}

export interface FeedResponseUsers {
    result: User[]
    total: number
    hasNextPage: boolean
}

export type UsersFeedResponse = Response<FeedResponseUsers>
export type PostsFeedResponse = Response<FeedResponsePosts>
