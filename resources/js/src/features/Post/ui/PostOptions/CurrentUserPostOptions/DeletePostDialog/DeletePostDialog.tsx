import useDeletePost from '@/features/Post/hook/useDeletePost'
import TheDialog from '@/shared/ui/TheDialog'
import TheModal from '@/shared/ui/TheModal'

interface props {
    id: string
    isActive: boolean
    close: () => void
    onSuccess: () => void
}

const DeletePostDialog = ({ id, isActive, close, onSuccess }: props) => {
    const { mutate: deletePost } = useDeletePost(id)

    const deletePostHandler = async () => {
        onSuccess()
        await deletePost()
    }

    return (
        <TheModal isActive={isActive} close={() => close()}>
            <TheDialog
                closeDialogHandler={() => close()}
                submitButtonText="Удалить"
                submitHandler={() => deletePostHandler()}
                title="Удалить публикацию?"
                subtitle="Вы уверены, что хотите удалить эту публикацию?"
            />
        </TheModal>
    )
}

export default DeletePostDialog
