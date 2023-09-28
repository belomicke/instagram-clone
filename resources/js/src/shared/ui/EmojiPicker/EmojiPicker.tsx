import { Fragment, useEffect, useRef, useState } from 'react'
import EmojiIcon from '../Icon/icons/EmojiIcon'
import { EmojiButton, Group, GroupEmoji, GroupTitle, PickerContainer, PickerWrapper } from './EmojiPicker.styles'

// import emojis from 'emojibase-data/ru/data.json'
import { createPortal } from 'react-dom'
import { emojis } from '@/shared/constants/emoji'
import EmojiItem from './EmojiItem'

interface props {
    value: string
    setValue: (value: string) => void
    focusInput: () => void
    inputRef: { current: HTMLInputElement | HTMLTextAreaElement }
}

const EmojiPicker = ({ value, setValue, focusInput, inputRef }: props) => {
    const pickerOpenButton = useRef<HTMLDivElement>(null)
    const picker = useRef<HTMLDivElement>(null)
    const skinTonePicker = useRef<HTMLDivElement>(null)
    const [pickerIsOpen, setPickerIsOpen] = useState<boolean>(false)

    const [cords, setCords] = useState<DOMRect>({ top: 0, right: 0, height: 0, width: 0, x: 0, y: 0, bottom: 0, left: 0, toJSON: () => {} })

    const emojiInputHandler = (emoji) => {
        const cursorStart = inputRef.current.selectionStart

        inputRef.current.focus()

        const value = inputRef.current.value.slice(0, cursorStart) + emoji + inputRef.current.value.slice(cursorStart, inputRef.current.value.length)

        inputRef.current.value = value
        setValue(value)

        inputRef.current.setSelectionRange(cursorStart + emoji.length, cursorStart + emoji.length)
    }

    useEffect(() => {
        if (!inputRef.current) return

        inputRef.current.value = value
    }, [])

    const dropdownCloseHandler = (e) => {
        const element = e.target

        if (!picker.current) return

        if (skinTonePicker.current) {
            if (!pickerOpenButton.current.contains(element)
            && !picker.current.contains(element)
            && !skinTonePicker.current.contains(element)
            ) {
                setPickerIsOpen(false)
            }
        } else {
            if (!pickerOpenButton.current.contains(element)
            && !picker.current.contains(element)
            ) {
                setPickerIsOpen(false)
            }
        }
    }

    const setPickerPosition = () => {
        if (!pickerOpenButton.current) return

        setCords(pickerOpenButton.current.getBoundingClientRect())
    }

    useEffect(() => {
        window.addEventListener('click', dropdownCloseHandler)
        window.addEventListener('resize', setPickerPosition)

        return () => {
            window.removeEventListener('resize', setPickerPosition)
            window.removeEventListener('click', dropdownCloseHandler)
        }
    }, [pickerIsOpen])

    useEffect(() => {
        setPickerPosition()
    }, [pickerOpenButton, pickerIsOpen])

    const openPickerHandler = () => {
        if (pickerIsOpen) {
            setPickerIsOpen(false)

        } else {
            setPickerIsOpen(true)
            focusInput()
        }
    }

    return (
        <>
            <EmojiButton
                active={pickerIsOpen}
                onClick={() => openPickerHandler()}
                ref={pickerOpenButton}
            >
                <EmojiIcon />
            </EmojiButton>
            {pickerIsOpen &&
                createPortal(
                    <PickerWrapper
                        style={{
                            top: cords.top + cords.height,
                            left: cords.left + cords.width,
                            transform: 'translateX(-100%)'
                        }}
                        ref={picker}
                    >
                        <PickerContainer>
                            {emojis.map((group, index) => (
                                <Group key={index}>
                                    <GroupTitle>{group.title}</GroupTitle>
                                    <GroupEmoji>
                                        {group.data.map(item => (
                                            <EmojiItem
                                                emoji={item}
                                                selectEmoji={emojiInputHandler}
                                                skinTonePickerRef={skinTonePicker}
                                                key={item.preview}
                                            />
                                        ))}
                                    </GroupEmoji>
                                </Group>
                            ))}
                        </PickerContainer>
                    </PickerWrapper>,
                    document.querySelector('body')
                )
            }
        </>
    )
}

export default EmojiPicker
