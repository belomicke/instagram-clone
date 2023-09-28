import TheButton from '@/shared/ui/TheButton'
import { Header, Title } from './PostCreatorHeader.styles'

interface props {
    step: string
    setStep: (value: string) => void
    clear: () => void
    publish: () => void
}

const PostCreatorHeader = ({ step, setStep, clear, publish }: props) => {
    const prev = () => {
        if (step === 'crop') clear()
        if (step === 'finish') setStep('crop')
    }

    const next = () => {
        if (step === 'select') setStep('crop')
        if (step === 'crop') setStep('finish')
    }

    return (
        <Header with_buttons={step !== 'select'}>
            {step !== 'select' &&
                <TheButton
                    onClick={() => prev()}
                    text="Назад"
                    link
                />
            }
            <Title>Создание публикации</Title>
            {step !== 'select' &&
                <TheButton
                    onClick={() => step === 'finish' ? publish() : next()}
                    text={step === 'finish' ? 'Поделиться' : 'Далее'}
                    link
                />
            }
        </Header>
    )
}

export default PostCreatorHeader
