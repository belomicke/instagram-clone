import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TheModal from '@/shared/ui/TheModal'
import FullPost from '@/widgets/Post/FullPost'

const FullPostModalPage = () => {
    const navigate = useNavigate()
    const [isActive, setIsActive] = useState<boolean>(true)

    useEffect(() => {
        return () => {
            setIsActive(false)
        }
    }, [])

    const close = () => {
        setIsActive(false)
        navigate(-1)
    }

    return (
        <TheModal
            isActive={isActive}
            close={() => close()}
        >
            <FullPost
                style={{
                    width: '80vw',
                    height: '80vh'
                }}
                hideComments
            />
        </TheModal>
    )
}

export default FullPostModalPage
