import { Container, ImageContainer, ImagePreview } from './ImagesPreview.styles'

interface props {
    image: string
    aspectRatio: string
}

const ImagesPreview = ({ image, aspectRatio }: props) => {
    return (
        <Container>
            <ImageContainer aspect_ratio={aspectRatio}>
                <ImagePreview
                    src={image}
                    aspect_ratio={aspectRatio}
                />
            </ImageContainer>
        </Container>
    )
}

export default ImagesPreview
