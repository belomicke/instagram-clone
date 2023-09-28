import { useLocation, useNavigate } from 'react-router-dom'
import MediaGalleryImage from '@/shared/ui/Icon/icons/MediaGalleryImage'
import HeartImageIcon from '@/shared/ui/ImageIcon/HeartImageIcon'
import {
    Container, Gallery,
    Overlay,
    OverlayStat,
    OverlayStatValue
} from './PostCard.styles'

interface props {
    id: string
    cover_url: string
    media_count: number
    like_count: number
    with_overlay: boolean
}

const PostCard = ({
    id,
    cover_url,
    media_count,
    like_count,
    with_overlay
}: props) => {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <Container
            onClick={() => navigate(`/post/${id}`, { state: { backgroundLocation: location } })}
            src={cover_url}
        >
            <Overlay>
                {with_overlay &&
                    <OverlayStat>
                        <HeartImageIcon />
                        <OverlayStatValue>{like_count}</OverlayStatValue>
                    </OverlayStat>
                }
            </Overlay>
            {media_count > 1 &&
                <Gallery>
                    <MediaGalleryImage
                        size={22}
                        filled
                    />
                </Gallery>
            }
        </Container>
    )
}

export default PostCard
