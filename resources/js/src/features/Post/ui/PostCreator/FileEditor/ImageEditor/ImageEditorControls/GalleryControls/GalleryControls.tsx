import { useEffect, useRef, useState } from 'react'
import DragAndDrop from './DragAndDrop'
import MediaGalleryImage from '@/shared/ui/Icon/icons/MediaGalleryImage'
import PlusIcon from '@/shared/ui/Icon/icons/PlusIcon'
import OverlayIconButton from '@/shared/ui/OverlayIconButton'
import {
    Wrapper,
    AddImageButton,
    AddImageContainer,
} from './GalleryControls.styles'

interface props {
    images: string[]
    addImage: () => void
    activeImage: number
    reorderImages: (startIndex: number, endIndex: number) => void
    selectImage: (value: number) => void
    deleteImage: (value: number) => void
}

const GalleryControls = ({ images, addImage, activeImage, reorderImages, selectImage, deleteImage }: props) => {
    const [imagesMenuIsOpen, setImagesMenuIsOpen] = useState<boolean>(false)
    const container = useRef<HTMLButtonElement>(null)

    const closeOnClickOutside = (e) => {
        const element = e.target as Element

        if (!container.current.contains(element)) {
            setImagesMenuIsOpen(false)
        }
    }

    useEffect(() => {
        window.addEventListener('click', closeOnClickOutside)

        return () => {
            window.removeEventListener('click', closeOnClickOutside)
        }
    }, [])

    const newImageHandler = (e) => {
        e.stopPropagation()
        addImage()
    }

    return (
        <OverlayIconButton
            right="10px"
            bottom="10px"
            active={imagesMenuIsOpen}
            onClick={() => setImagesMenuIsOpen(!imagesMenuIsOpen)}
            ref={container}
        >
            <MediaGalleryImage />
            <Wrapper
                visible={imagesMenuIsOpen}
                items_count={images.length}
                onClick={(e) => e.stopPropagation()}
            >
                <DragAndDrop
                    images={images}
                    activeImageId={activeImage}
                    reorderImages={reorderImages}
                    selectImage={selectImage}
                    deleteImage={deleteImage}
                />
                {images.length < 10 &&
                    <AddImageContainer>
                        <AddImageButton onClick={newImageHandler}>
                            <PlusIcon />
                        </AddImageButton>
                    </AddImageContainer>
                }
            </Wrapper>
        </OverlayIconButton>
    )
}

export default GalleryControls
