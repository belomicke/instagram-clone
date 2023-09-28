import { useEffect, useMemo, useState } from 'react'
import DragAndDropItem from './DragAndDropItem'
import { Container, Items } from './DragAndDrop.styles'

interface props {
    images: string[]
    activeImageId: number
    reorderImages: (start: number, end: number) => void
    selectImage: (value: number) => void
    deleteImage: (value: number) => void
}

interface CardItem {
    id: number
    order: number
    data: string
}

const DragAndDrop = ({ images, activeImageId, reorderImages, selectImage, deleteImage }: props) => {
    const [cardList, setCardList] = useState<CardItem[]>([])

    useEffect(() => {
        if (images.length === 1) {
            setCardList([{ id: 1, order: 0, data: images[0] }])
            return
        }

        const result = []

        for (let index = 0; index < images.length; index++) {
            result.push({ id: index + 1, order: index, data: images[index] })
        }

        setCardList(result)
    }, [images])

    const [draggedItem, setDraggedItem] = useState(null)
    const [target, setTarget] = useState(null)

    const dragStartHandler = (card: CardItem) => {
        setDraggedItem(card)
    }

    const dragEndHandler = () => {
        setDraggedItem(null)
        setTarget(null)
    }

    const dragOverHandler = (e, card: CardItem) => {
        e.preventDefault()
        setTarget(card)
    }

    const dropHandler = (e, card: CardItem) => {
        e.preventDefault()
        if (draggedItem && draggedItem.id !== card.id) {
            reorder(card.order, draggedItem.order)
            setDraggedItem(card)
            setDraggedItem(null)
            setTarget(null)
        }
    }

    const reorder = (startIndex: number, endIndex: number) => {
        reorderImages(startIndex, endIndex)
    }

    const sortedList = useMemo(() => {
        return cardList.sort((a, b) => {
            return a.order > b.order ? 1 : -1
        })
    }, [cardList])

    return (
        <Container items_count={cardList.length}>
            <Items>
                {sortedList.map((cardItem, index) => (
                    <DragAndDropItem
                        listLength={cardList.length}
                        item={cardItem}
                        onClick={() => selectImage(cardItem.order)}
                        isActive={activeImageId === cardItem.order}
                        isOver={target ? target.id === cardItem.id : false}
                        draggedItem={draggedItem}
                        index={index}
                        onDragStart={() => dragStartHandler(cardItem)}
                        dragEndHandler={() => dragEndHandler()}
                        dragOverHandler={(e) => dragOverHandler(e, cardItem)}
                        dropHandler={(e) => dropHandler(e, cardItem)}
                        deleteImage={deleteImage}
                        key={cardItem.id}
                    />
                ))}
            </Items>
        </Container>
    )
}

export default DragAndDrop
