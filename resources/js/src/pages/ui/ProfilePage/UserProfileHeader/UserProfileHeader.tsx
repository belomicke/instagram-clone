import { useState } from 'react'
import UserFollowersFeedModal from './UserFollowersFeedModal'
import UserFollowsFeedModal from './UserFollowsFeedModal'
import SettingsButton from './SettingsButton'
import ProfileAvatar from './ProfileAvatar'
import UserFollowButton from '@/features/User/ui/UserFollowButton'
import useCurrentUser from '@/entities/Auth/hook/useCurrentUser'
import EntityPageHeader from '@/shared/ui/EntityPageHeader'
import User from '@/shared/api/models/User/User'
import {
    Biography,
    Name,
} from './UserProfileHeader.styles'

interface props {
    user: User
}

const UserProfileHeader = ({ user }: props) => {
    const { data: currentUser } = useCurrentUser()

    const [followsModalIsOpen, setFollowsModalIsOpen] = useState<boolean>(false)
    const [followersModalIsOpen, setFollowersModalIsOpen] = useState<boolean>(false)

    return (
        <>
            <EntityPageHeader
                coverSlot={<ProfileAvatar user={user} />}
                titleSlot={
                    currentUser.id === user.id ?
                        <SettingsButton />
                        :
                        <UserFollowButton user={user} />

                }
                title={user.username}
                stats={[
                    {
                        label: 'публикаций',
                        value: user.post_count
                    },
                    {
                        label: 'подписчиков',
                        value: user.followers_count,
                        onClick: () => setFollowersModalIsOpen(true)
                    },
                    {
                        label: 'подписок',
                        value: user.follows_count,
                        onClick: () => setFollowsModalIsOpen(true)
                    }
                ]}
            >
                <Name>{user.name}</Name>
                <Biography>{user.biography}</Biography>
            </EntityPageHeader>
            <UserFollowersFeedModal
                user={user}
                isActive={followersModalIsOpen}
                close={() => setFollowersModalIsOpen(false)}
            />
            <UserFollowsFeedModal
                user={user}
                isActive={followsModalIsOpen}
                close={() => setFollowsModalIsOpen(false)}
            />
        </>
    )
}

export default UserProfileHeader
