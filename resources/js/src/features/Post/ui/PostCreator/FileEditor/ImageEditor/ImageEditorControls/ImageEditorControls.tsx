import AspectRatioControls from './AspectRatioControls'
import GalleryControls from './GalleryControls'

interface props {
    images: string[]
    aspectRatio: string
    setAspectRatio: (value: string) => void
    selectedImage: number
    setSelectedImage: (value: number) => void
    addImage: () => void
    deleteImage: (value: number) => void
    reorderImages: (first: number, second: number) => void
}

const ImageEditorControls = ({
    images,
    aspectRatio,
    setAspectRatio,
    selectedImage,
    setSelectedImage,
    addImage,
    deleteImage,
    reorderImages
}: props) => {
    return (
        <>
            <AspectRatioControls
                image={images[0]}
                aspectRatio={aspectRatio}
                setAspectRatio={setAspectRatio}
            />
            <GalleryControls
                images={images}
                addImage={addImage}
                activeImage={selectedImage}
                reorderImages={reorderImages}
                selectImage={setSelectedImage}
                deleteImage={deleteImage}
            />
        </>
    )
}

export default ImageEditorControls
