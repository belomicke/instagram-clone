import { useEffect, useRef, useState } from 'react'
import FileEditor from './FileEditor'
import InfoEditor from './InfoEditor'
import PostCreatorHeader from './PostCreatorHeader'
import useCreatePost from '@/features/Post/hook/useCreatePost'
import TheModal from '@/shared/ui/TheModal'
import TheDialog from '@/shared/ui/TheDialog'
import getResizedImage from '@/shared/lib/helpers/getResizedImage'
import { Body, Container, Info, Preview } from './PostCreator.styles'

interface props {
    step: string
    setStep: (value: string) => void
    success: () => void
}

const PostCreator = ({ step, setStep, success }: props) => {
    const resizedImages = useRef<File[]>([])
    const [description, setDescription] = useState<string>('')
    const [hideLikesCount, setHideLikesCount] = useState<boolean>(false)

    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
    const { mutate: createPost } = useCreatePost()

    const getResizedImages = (images: string[], aspectRatio: string) => {
        resizedImages.current = []

        for (let i = 0; i < images.length; i++) {
            getResizedImage(images[i], aspectRatio).then(res => {
                resizedImages.current.push(res)
            })
        }
    }

    const clear = () => {
        setModalIsOpen(true)
    }

    useEffect(() => {
        if (step === 'select') {
            setModalIsOpen(false)
        }
    }, [step])

    const publish = async () => {
        const status = await createPost({
            images: resizedImages.current,
            description,
            like_count_is_hidden: hideLikesCount
        })

        if (status) {
            success()
        }
    }

    return (
        <>
            <Container extended={step === 'finish'}>
                <PostCreatorHeader
                    step={step}
                    setStep={setStep}
                    clear={clear}
                    publish={publish}
                />
                <Body extended={step === 'finish'}>
                    <Preview>
                        <FileEditor
                            step={step}
                            setStep={setStep}
                            getResizedImages={getResizedImages}
                        />
                    </Preview>
                    <Info visible={step === 'finish'}>
                        <InfoEditor
                            editable={['description', 'like_count_visibility']}
                            description={description}
                            setDescription={setDescription}
                            hideLikesCount={hideLikesCount}
                            setHideLikesCount={setHideLikesCount}
                        />
                    </Info>
                </Body>
            </Container>
            <TheModal isActive={modalIsOpen} close={() => setModalIsOpen(false)}>
                <TheDialog
                    title="Отменить публикацию?"
                    subtitle="Если вы выйдете, изменения не будут сохранены"
                    closeDialogHandler={() => setModalIsOpen(false)}
                    submitButtonText="Удалить"
                    submitHandler={() => setStep('select')}
                />
            </TheModal>
        </>
    )
}

export default PostCreator
