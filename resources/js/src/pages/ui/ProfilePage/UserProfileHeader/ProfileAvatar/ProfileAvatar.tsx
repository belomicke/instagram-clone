import React, { useRef, useState } from 'react'
import useChangeAvatar from '@/features/Auth/hook/useChangeAvatar'
import useDeleteAvatar from '@/features/Auth/hook/useDeleteAvatar'
import useCurrentUser from '@/entities/Auth/hook/useCurrentUser'
import User from '@/shared/api/models/User/User'
import TheModal from '@/shared/ui/TheModal'
import TheMenu from '@/shared/ui/TheMenu'
import { AvatarContainer } from './ProfileAvatar.styles'

interface props {
    user: User
}

const ProfileAvatar = ({ user }: props) => {
    const { data: currentUser } = useCurrentUser()
    const [avatarMenuIsOpen, setAvatarMenuIsOpen] = useState<boolean>(false)
    const input = useRef<HTMLInputElement>(null)

    const { mutate: deleteAvatar } = useDeleteAvatar()
    const { mutate: changeAvatar } = useChangeAvatar()

    const openAvatarMenu = () => {
        if (currentUser.id !== user.id) return

        if (currentUser.avatar === 'http://localhost/storage/static/default_avatar.png') {
            openFileSelector()
        } else {
            setAvatarMenuIsOpen(true)
        }
    }

    const deleteAvatarHandler = async () => {
        await deleteAvatar()
        setAvatarMenuIsOpen(false)
    }

    const openFileSelector = () => {
        input.current.click()
    }

    const changeAvatarHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        await changeAvatar(e.target.files[0])
        e.target.value = null
        setAvatarMenuIsOpen(false)
    }

    return (
        <>
            <AvatarContainer
                src={user.avatar}
                onClick={() => openAvatarMenu()}
                editable={currentUser.id === user.id}
                size={150}
            />
            {currentUser.id === user.id &&
                <input
                    type="file"
                    accept='image/jpeg,image/png,image/heic,image/heif'
                    style={{ display: 'none' }}
                    onChange={(e) => changeAvatarHandler(e)}
                    ref={input}
                />
            }
            <TheModal isActive={avatarMenuIsOpen} close={() => setAvatarMenuIsOpen(false)}>
                <TheMenu
                    options={[
                        {
                            label: 'Удалить аватар',
                            variant: 'danger',
                            onClick: () => deleteAvatarHandler()
                        },
                        {
                            label: 'Сменить аватар',
                            onClick: () => openFileSelector()
                        },
                        {
                            label: 'Отмена',
                            onClick: () => setAvatarMenuIsOpen(false)
                        }
                    ]}
                />
            </TheModal>
        </>
    )
}

export default ProfileAvatar
