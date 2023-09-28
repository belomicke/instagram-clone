import { DragEvent, HTMLAttributes, useRef, useState } from 'react'
import CrossIcon from '@/shared/ui/Icon/icons/CrossIcon'
import { Card, DeleteImageButton } from './DragAndDropItem.styles'

interface props extends HTMLAttributes<HTMLDivElement> {
    item: CardItem
    index: number
    listLength: number
    isOver: boolean
    draggedItem: CardItem
    isActive: boolean
    dropHandler: (e: DragEvent<HTMLDivElement>, item: CardItem) => void
    onDragStart: () => void
    dragOverHandler: (e: DragEvent<HTMLDivElement>) => void
    dragEndHandler: (item: CardItem) => void
    deleteImage: (value: number) => void
}

interface CardItem {
    id: number
    order: number
    data: string
}

const DragAndDropItem = ({ item, index, listLength, isOver, isActive, dropHandler, dragEndHandler, onDragStart, dragOverHandler, deleteImage, ...props }: props) => {
    const itemRef = useRef<HTMLDivElement>(null)
    const [isDragged, setIsDragged] = useState<boolean>(false)

    const onDragStartHandler = () => {
        onDragStart()
        setIsDragged(true)
    }

    const onDropHandler = (e: DragEvent<HTMLDivElement>) => {
        dropHandler(e, item)
        setIsDragged(false)
    }

    const onDragEndHandler = () => {
        dragEndHandler(item)
        setIsDragged(false)
    }

    const deleteImageHandler = () => {
        deleteImage(index)
    }

    return (
        <Card
            src={item.data}
            list_length={listLength}
            order={item.order}
            is_active={isActive}
            is_over={isOver}
            is_dragged={isDragged}
            draggable={true}
            onDragEnd={onDragEndHandler}
            onDragStart={onDragStartHandler}
            onDragOver={dragOverHandler}
            onDrop={onDropHandler}
            ref={itemRef}
            {...props}
        >
            {isActive && listLength > 1 &&
                <DeleteImageButton onClick={deleteImageHandler}>
                    <CrossIcon />
                </DeleteImageButton>
            }
        </Card>
    )
}


export default DragAndDropItem
