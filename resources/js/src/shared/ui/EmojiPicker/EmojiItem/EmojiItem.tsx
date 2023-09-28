import { useEffect, useRef, useState } from 'react'
import { IEmoji } from '@/shared/constants/emoji'
import { Container, Emoji, SkinTonePicker } from './EmojiItem.styles'
import { createPortal } from 'react-dom'

interface props {
    emoji: IEmoji
    selectEmoji: (emoji: string) => void
    skinTonePickerRef: { current: HTMLDivElement }
}

const EmojiItem = ({ emoji, selectEmoji, skinTonePickerRef }: props) => {
    const [skinTonePickerIsOpen, setSkinTonePickerIsOpen] = useState<boolean>(false)

    const button = useRef<HTMLDivElement>(null)

    const [cords, setCords] = useState<DOMRect>({ top: 0, right: 0, height: 0, width: 0, x: 0, y: 0, bottom: 0, left: 0, toJSON: () => {} })

    const clickHandler = () => {
        if (emoji.variants.length > 1) {
            setSkinTonePickerIsOpen(true)
        } else {
            selectEmoji(emoji.variants[0])
        }
    }

    const dropdownCloseHandler = (e) => {
        const element = e.target

        if (!button.current.contains(element)) {
            setSkinTonePickerIsOpen(false)
        }
    }

    const setPickerPosition = () => {
        if (!button.current) return

        setCords(button.current.getBoundingClientRect())
    }

    useEffect(() => {
        setPickerPosition()
    }, [skinTonePickerIsOpen, button])

    useEffect(() => {
        window.addEventListener('resize', setPickerPosition)
        window.addEventListener('click', dropdownCloseHandler)

        return () => {
            window.removeEventListener('resize', setPickerPosition)
            window.removeEventListener('click', dropdownCloseHandler)
        }
    }, [skinTonePickerIsOpen])

    return (
        <Container>
            <Emoji
                onClick={() => clickHandler()}
                ref={button}
            >
                {emoji.preview}
            </Emoji>
            {skinTonePickerIsOpen &&
                createPortal(
                    <SkinTonePicker
                        style={{
                            top: cords.top + 10,
                            left: cords.left - 10
                        }}
                        ref={skinTonePickerRef}
                    >
                        {emoji.variants.map(item => (
                            <Emoji
                                onClick={() => selectEmoji(item)}
                                key={item}
                            >
                                {item}
                            </Emoji>
                        ))}
                    </SkinTonePicker>,
                    document.querySelector('body')
                )
            }
        </Container>
    )
}

export default EmojiItem
