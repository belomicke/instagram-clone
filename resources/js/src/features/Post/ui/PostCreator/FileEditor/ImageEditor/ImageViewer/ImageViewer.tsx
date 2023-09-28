import ImagesPreview from './ImagesPreview'
import CarouselNavigation from './CarouselNavigation'
import ArrowLeftIcon from '@/shared/ui/Icon/icons/ArrowLeftIcon'
import ArrowRightIcon from '@/shared/ui/Icon/icons/ArrowRightIcon'
import OverlayIconButton from '@/shared/ui/OverlayIconButton'
import { Container } from './ImageViewer.styles'

interface props {
    images: string[]
    aspectRatio: string
    selectedImage: number
    setSelectedImage: (value: number) => void
}

const ImageViewer = ({ images, selectedImage, setSelectedImage, aspectRatio }: props) => {
    const prevImage = () => {
        setSelectedImage(selectedImage - 1)
    }

    const nextImage = () => {
        setSelectedImage(selectedImage + 1)
    }

    return (
        <Container>
            <ImagesPreview
                image={images[selectedImage]}
                aspectRatio={aspectRatio}
            />
            {images.length > 1 &&
                <CarouselNavigation
                    imageCount={images.length}
                    activeImageIndex={selectedImage}
                />
            }
            {selectedImage !== 0 &&
                <OverlayIconButton
                    left="10px"
                    top="50%"
                    onClick={() => prevImage()}
                >
                    <ArrowLeftIcon />
                </OverlayIconButton>
            }
            {selectedImage !== images.length - 1 &&
                <OverlayIconButton
                    right="10px"
                    top="50%"
                    onClick={() => nextImage()}
                >
                    <ArrowRightIcon />
                </OverlayIconButton>
            }
        </Container>
    )
}

export default ImageViewer

