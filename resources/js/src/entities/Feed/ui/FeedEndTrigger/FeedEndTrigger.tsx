import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Container } from './FeedEndTrigger.styles'

interface props {
    callback: () => void
}

const FeedEndTrigger = ({ callback }: props) => {
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView && callback) {
            callback()
        }
    }, [inView])

    return (
        <Container ref={ref} />
    )
}

export default FeedEndTrigger
