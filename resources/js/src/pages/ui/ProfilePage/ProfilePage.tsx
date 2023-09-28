import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import UserProfileHeader from './UserProfileHeader'
import UserPosts from '@/widgets/Feed/UserPosts'
import useUserByUsername from '@/entities/User/hook/useUserByUsername'
import PageWrapper from '@/shared/ui/PageWrapper'
import {
    Container,
    Content
} from './ProfilePage.styles'

const ProfilePage = () => {
    const params = useParams()
    const username = params.username

    const { data: user } = useUserByUsername(username)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [username])

    if (!user) return <></>

    return (
        <PageWrapper>
            <Container>
                <UserProfileHeader user={user} />
                <Content>
                    <UserPosts />
                </Content>
            </Container>
        </PageWrapper>
    )
}

export default ProfilePage
