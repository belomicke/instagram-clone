import { useRef } from 'react'
import useCurrentUser from '@/entities/Auth/hook/useCurrentUser'
import Avatar from '@/shared/ui/Avatar'
import TheSwitch from '@/shared/ui/TheSwitch'
import EmojiPicker from '@/shared/ui/EmojiPicker'
import {
    Author,
    Container,
    Description,
    DescriptionFooter,
    DescriptionLengthCounter,
    SwitchOption,
    SwitchOptionTitle,
    Username
} from './InfoEditor.styles'

type EditableValues = 'description' | 'like_count_visibility'

interface props {
    editable: EditableValues[]
    description: string
    setDescription: (value: string) => void
    hideLikesCount: boolean
    setHideLikesCount: (value: boolean) => void
}

const InfoEditor = ({
    editable,
    description,
    setDescription,
    hideLikesCount,
    setHideLikesCount,
}: props) => {
    const { data: currentUser } = useCurrentUser()
    const textarea = useRef<HTMLTextAreaElement>(null)

    return (
        <Container>
            <Author>
                <Avatar src={currentUser.avatar} size={32} />
                <Username>{currentUser.username}</Username>
            </Author>
            {editable.indexOf('description') !== -1 &&
                <>
                    <Description
                        placeholder="Добавьте описание..."
                        onChange={(e) => setDescription(e.target.value)}
                        autoFocus
                        maxLength={2200}
                        ref={textarea}
                    />
                    {textarea.current &&
                        <DescriptionFooter>
                            <DescriptionLengthCounter>{description.length} / 2200</DescriptionLengthCounter>
                            <EmojiPicker
                                value={description}
                                setValue={setDescription}
                                focusInput={() => textarea.current.focus()}
                                inputRef={textarea}
                            />
                        </DescriptionFooter>
                    }
                </>
            }
            {editable.indexOf('like_count_visibility') !== -1 &&
                <>
                    <SwitchOption>
                        <SwitchOptionTitle>Скрыть число лайков</SwitchOptionTitle>
                        <TheSwitch
                            value={hideLikesCount}
                            setValue={setHideLikesCount}
                        />
                    </SwitchOption>
                </>
            }
        </Container>
    )
}

export default InfoEditor
