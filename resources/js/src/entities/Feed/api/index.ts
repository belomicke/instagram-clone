import axios from 'axios'
import FeedRequestConfig from '@/shared/api/models/Feed/FeedRequestConfig'
import { PostsFeedResponse, UsersFeedResponse } from '@/shared/api/models/Feed/FeedResponse'

const getUserPosts = async (username: string, config: FeedRequestConfig): Promise<PostsFeedResponse> => {
    return await axios.get(`/feed/user/${username}/posts`, { params: config })
}

const getSavedPosts = async (config: FeedRequestConfig): Promise<PostsFeedResponse> => {
    return await axios.get('/feed/saved', { params: config })
}

const getPopularPosts = async (config: FeedRequestConfig): Promise<PostsFeedResponse> => {
    return await axios.get('/feed/popular', { params: config })
}

const getPostLikers = async (id: string, config: FeedRequestConfig): Promise<UsersFeedResponse> => {
    return await axios.get(`/feed/post/${id}/likers`, { params: config })
}

const getUserFollowers = async (username: string, config: FeedRequestConfig): Promise<UsersFeedResponse> => {
    return await axios.get(`/feed/user/${username}/followers`, { params: config })
}

const getUserFollows = async (username: string, config: FeedRequestConfig): Promise<UsersFeedResponse> => {
    return await axios.get(`/feed/user/${username}/follows`, { params: config })
}

const getTagPosts = async (tag: string, config: FeedRequestConfig): Promise<PostsFeedResponse> => {
    return await axios.get(`/feed/tag/${tag}/posts`, { params: config })
}

export const feedApi = {
    getUserPosts,
    getPostLikers,
    getPopularPosts,
    getSavedPosts,
    getUserFollowers,
    getUserFollows,
    getTagPosts,
}
