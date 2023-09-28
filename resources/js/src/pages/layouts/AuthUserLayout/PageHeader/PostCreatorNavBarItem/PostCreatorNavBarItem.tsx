import { useState } from 'react'
import NavBarItem from '../NavBarItem'
import PostCreator from '@/features/Post/ui/PostCreator'
import TheModal from '@/shared/ui/TheModal'
import TheDialog from '@/shared/ui/TheDialog'
import NewPostIcon from '@/shared/ui/Icon/icons/NewPostIcon'

const PostCreatorNavBarItem = () => {
    const [postCreatorIsOpen, setPostCreatorIsOpen] = useState<boolean>(false)
    const [step, setStep] = useState<string>('select')
    const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false)

    const close = () => {
        setPostCreatorIsOpen(false)
        setDialogIsOpen(false)
        setStep('select')
    }

    const tryToClose = () => {
        if (step !== 'select') {
            setDialogIsOpen(true)
        } else {
            setPostCreatorIsOpen(false)
        }
    }

    return (
        <>
            <NavBarItem
                isActive={postCreatorIsOpen}
                onClick={() => setPostCreatorIsOpen(true)}
                icon={
                    <NewPostIcon filled={postCreatorIsOpen} />
                }
            />
            <TheModal isActive={postCreatorIsOpen} close={() => tryToClose()}>
                <PostCreator
                    step={step}
                    setStep={setStep}
                    success={() => close()}
                />
                <TheModal isActive={dialogIsOpen} close={() => setDialogIsOpen(false)}>
                    <TheDialog
                        title="Отменить публикацию?"
                        subtitle="Если вы выйдете, изменения не будут сохранены"
                        closeDialogHandler={() => setDialogIsOpen(false)}
                        submitButtonText="Удалить"
                        submitHandler={() => close()}
                    />
                </TheModal>
            </TheModal>
        </>
    )
}

export default PostCreatorNavBarItem
