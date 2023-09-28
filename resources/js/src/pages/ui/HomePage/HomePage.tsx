import { useEffect } from 'react'
import PopularPosts from '@/widgets/Feed/PopularPosts'
import PageWrapper from '@/shared/ui/PageWrapper'

const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <PageWrapper>
            <PopularPosts />
        </PageWrapper>
    )
}

export default HomePage
