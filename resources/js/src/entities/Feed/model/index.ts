import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import Feed from '@/shared/api/models/Feed/Feed'

type State = {
    feeds: Feed[]
}

type Actions = {
    createFeed: (key: string) => void
    setFeedHasNextPage: (key: string, value: boolean) => void
    setFeedTotal: (key: string, value: number) => void
    addItems: (key: string, items: string[]) => void
    addItemToStartOfFeed: (key: string, item: string) => void
    removeItemFromFeed: (key: string, removableItem: string) => void
    removeItemFromAllFeeds: (removableItem: string) => void
}

export const useFeedStore = create(
    immer<State & Actions>((set) => ({
        feeds: [],
        createFeed: (key: string) => {
            const feed: Feed = {
                key: key,
                items: [],
                total: 0,
                hasNextPage: true
            }

            set((state) => ({
                feeds: [...state.feeds, feed]
            }))
        },
        addItems: (key: string, addableItems: string[]) => {
            set((state) => {
                const feed = state.feeds.find(feed => feed.key === key)

                addableItems.forEach(addableItem => {
                    if (!feed.items.find(item => item === addableItem)) {
                        feed.items.push(addableItem)
                    }
                })
            })
        },
        setFeedTotal: (key: string, value: number) => {
            set((state) => {
                const feed = state.feeds.find(feed => feed.key === key)

                feed.total = value
            })
        },
        setFeedHasNextPage: (key: string, value: boolean) => {
            set((state) => {
                const feed = state.feeds.find(feed => feed.key === key)

                feed.hasNextPage = value
            })
        },
        addItemToStartOfFeed: (key: string, item: string) => {
            set((state) => {
                const feed = state.feeds.find(feed => feed.key === key)

                feed.items.unshift(item)
                feed.total += 1
            })
        },
        removeItemFromFeed: (key: string, removableItem: string) => {
            set((state) => {
                const feed = state.feeds.find(feed => feed.key === key)

                feed.items = feed.items.filter(item => item !== removableItem)
                feed.total -= 1
            })
        },
        removeItemFromAllFeeds: (removableItem: string) => {
            set((state) => {
                state.feeds.forEach(feed => {
                    if (feed.items.find(item => item === removableItem)) {
                        feed.items = feed.items.filter(item => item !== removableItem)
                        feed.total -= 1
                    }
                })
            })
        }
    }))
)
