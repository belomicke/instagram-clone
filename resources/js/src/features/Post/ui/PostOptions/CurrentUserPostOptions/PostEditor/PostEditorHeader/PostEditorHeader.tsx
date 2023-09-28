import TheButton from '@/shared/ui/TheButton'
import { Header, Title } from './PostEditorHeader.styles'

interface props {
    close: () => void
    submit: () => void
}

const PostEditorHeader = ({ close, submit }: props) => {
    return (
        <Header with_buttons>
            <TheButton
                onClick={() => close()}
                text="Отмена"
                link
            />
            <Title>Редактирование информации</Title>
            <TheButton
                onClick={() => submit()}
                text="Готово"
                link
            />
        </Header>
    )
}

export default PostEditorHeader
