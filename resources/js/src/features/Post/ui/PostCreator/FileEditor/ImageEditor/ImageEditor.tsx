import { useEffect, useState } from 'react'
import ImageViewer from './ImageViewer'
import ImageEditorControls from './ImageEditorControls'
import reorderArray from '@/shared/lib/helpers/reorderArray'

interface props {
    files: File[]
    addNewImage: () => void
    getResizedImages: (images: string[], aspectRatio: string) => void
    editable: boolean
    deleteImage: (index: number) => void
    reorderFiles: (firstIndex: number, secondIndex: number) => void
}

const ImageEditor = ({ files, editable, getResizedImages, reorderFiles, addNewImage, deleteImage }: props) => {
    const [images, setImages] = useState<string[]>([])
    const [selectedImage, setSelectedImage] = useState<number>(0)
    const [aspectRatio, setAspectRatio] = useState<string>('')

    useEffect(() => {
        if (files.length === images.length) return

        if (files.length === 1) {
            setImages([URL.createObjectURL(files[0])])
        } else {
            setImages([...images, URL.createObjectURL(files.at(-1))])
        }
    }, [files])

    useEffect(() => {
        getResizedImages(images, aspectRatio)
    }, [files, aspectRatio])

    const reorderImages = (startIndex: number, endIndex: number) => {
        reorderFiles(startIndex, endIndex)
        setSelectedImage(startIndex)
        setImages(reorderArray(images, startIndex, endIndex))
    }

    const deleteImageHandler = (index: number) => {
        deleteImage(index)
        setImages(images.filter((image, i) => index !== i))
    }

    useEffect(() => {
        if (images.length === selectedImage) {
            setSelectedImage(images.length - 1 < 0 ? 0 : images.length - 1)
        }
    }, [images])

    return (
        <>
            <ImageViewer
                images={images}
                aspectRatio={aspectRatio}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
            />
            {editable &&
                <ImageEditorControls
                    images={images}
                    aspectRatio={aspectRatio}
                    setAspectRatio={setAspectRatio}
                    addImage={addNewImage}
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                    reorderImages={reorderImages}
                    deleteImage={deleteImageHandler}
                />
            }
        </>
    )
}

export default ImageEditor
