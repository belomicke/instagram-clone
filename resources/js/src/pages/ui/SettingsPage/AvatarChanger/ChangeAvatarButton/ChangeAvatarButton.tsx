import { useRef } from 'react'
import useChangeAvatar from '@/features/Auth/hook/useChangeAvatar'
import TheButton from '@/shared/ui/TheButton'

const ChangeAvatarButton = () => {
    const input = useRef<HTMLInputElement>(null)
    const { mutate: changeAvatar } = useChangeAvatar()

    const changeHandler = async (e) => {
        changeAvatar(e.target.files[0])
        e.target.value = null
    }

    return (
        <>
            <TheButton
                text="Выбрать файл"
                onClick={() => input.current.click()}
            />
            <input
                type="file"
                accept='image/jpeg,image/png,image/heic,image/heif'
                style={{ display: 'none' }}
                onChange={changeHandler}
                ref={input}
            />
        </>
    )
}

export default ChangeAvatarButton
