import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useGetTag from '@/entities/Tag/hook/useGetTag'
import TagPosts from '@/widgets/Feed/TagPosts'
import EntityPageHeader from '@/shared/ui/EntityPageHeader'
import Avatar from '@/shared/ui/Avatar'
import PageWrapper from '@/shared/ui/PageWrapper'
import { Container } from './TagPage.styles'

const TagPage = () => {
    const params = useParams()

    const { data: tag, fetch } = useGetTag(params.tag)

    useEffect(() => {
        if (!tag) fetch()
    }, [tag])

    if (!tag) return <></>

    return (
        <PageWrapper>
            <Container>
                <EntityPageHeader
                    title={`#${tag.tag}`}
                    coverSlot={
                        <Avatar
                            src={tag.cover}
                            size={150}
                        />
                    }
                    stats={[
                        {
                            label: 'публикаций',
                            value: tag.post_count
                        }
                    ]}
                />
                <TagPosts tag={tag.tag} />
            </Container>
        </PageWrapper>
    )
}

export default TagPage
