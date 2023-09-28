export interface IEmoji {
    preview: string
    variants: string[]
}

interface EmojiGroup {
    title: string
    data: IEmoji[]
}

export const emojis: EmojiGroup[] = [
    {
        title: 'Самые популярные',
        data: [
            {
                preview: '😂',
                variants: ['😂']
            },
            {
                preview: '😮',
                variants: ['😮']
            },
            {
                preview: '😍',
                variants: ['😍']
            },
            {
                preview: '😢',
                variants: ['😢']
            },
            {
                preview: '👏',
                variants: ['👏', '👏🏻', '👏🏼', '👏🏽', '👏🏾', '👏🏿']
            },
            {
                preview: '🔥',
                variants: ['🔥']
            },
            {
                preview: '🎉',
                variants: ['🎉']
            },
            {
                preview: '💯',
                variants: ['💯']
            },
            {
                preview: '❤️',
                variants: ['❤️']
            },
            {
                preview: '🤣',
                variants: ['🤣']
            },
            {
                preview: '🥰',
                variants: ['🥰']
            },
            {
                preview: '😘',
                variants: ['😘']
            },
            {
                preview: '😭',
                variants: ['😭']
            },
            {
                preview: '😊',
                variants: ['😊']
            },
        ]
    },
]
