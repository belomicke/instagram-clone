import { useState } from 'react'
import Media from '@/shared/api/models/Media'
import ArrowLeftIcon from '@/shared/ui/Icon/icons/ArrowLeftIcon'
import ArrowRightIcon from '@/shared/ui/Icon/icons/ArrowRightIcon'
import OverlayIconButton from '@/shared/ui/OverlayIconButton'
import {
    Container,
    MediaContainer,
    MediaImage,
    Overlay,
    SlideProgressContainer,
    SlideProgressItem,
    Wrapper
} from './MediaCarousel.styles'

interface props {
    mediaList: Media[]
    backgroundColor?: string
}

const MediaCarousel = ({ mediaList, backgroundColor = 'rgb(40, 40, 40)' }: props) => {
    const [currentImage, setCurrentImage] = useState<number>(0)

    const prevImage = () => {
        if (currentImage === 0) return
        setCurrentImage(prev => prev - 1)
    }

    const nextImage = () => {
        if (currentImage === mediaList.length - 1) return
        setCurrentImage(prev => prev + 1)
    }

    return (
        <Wrapper bg={backgroundColor}>
            <Container
                current_image={currentImage}
                item_count={mediaList.length}
            >
                {mediaList.map(media => (
                    <MediaContainer key={media.id}>
                        <MediaImage src={media.url} image={media} />
                    </MediaContainer>
                ))}
            </Container>
            <Overlay>
                {currentImage !== 0 &&
                    <OverlayIconButton
                        top="50%"
                        left="10px"
                        onClick={() => prevImage()}
                    >
                        <ArrowLeftIcon />
                    </OverlayIconButton>
                }
                {currentImage !== mediaList.length - 1 &&
                    <OverlayIconButton
                        top="50%"
                        right="10px"
                        onClick={() => nextImage()}
                    >
                        <ArrowRightIcon />
                    </OverlayIconButton>
                }
                {mediaList.length > 1 &&
                    <SlideProgressContainer current_image={currentImage}>
                        {Array.from(new Array(mediaList.length)).map((item, index) => (
                            <SlideProgressItem
                                active={index === currentImage}
                                current_image={currentImage}
                                index={index}
                                key={index}
                            />
                        ))}
                    </SlideProgressContainer>
                }
            </Overlay>
        </Wrapper>
    )
}

export default MediaCarousel
