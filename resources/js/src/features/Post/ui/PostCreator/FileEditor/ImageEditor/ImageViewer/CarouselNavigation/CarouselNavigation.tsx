import { Container, Step, Wrapper } from './CarouselNavigation.styles'

interface props {
    imageCount: number
    activeImageIndex: number
}

const CarouselNavigation = ({ imageCount, activeImageIndex }: props) => {
    return (
        <Wrapper>
            <Container>
                {Array.from(new Array(imageCount)).map((item, index) => (
                    <Step
                        active={index === activeImageIndex}
                        key={index}
                    />
                ))}
            </Container>
        </Wrapper>
    )
}

export default CarouselNavigation
