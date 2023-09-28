import { useEffect, useRef, useState } from 'react'
import ImageEditor from './ImageEditor'
import ImageSelector from './ImageSelector'
import TheButton from '@/shared/ui/TheButton'
import reorderArray from '@/shared/lib/helpers/reorderArray'
import { Container } from './FileEditor.styles'

interface props {
    step: string
    setStep: (value: string) => void
    getResizedImages: (images: string[], aspectRatio: string) => void
}

const FileEditor = ({ step, setStep, getResizedImages }: props) => {
    const input = useRef<HTMLInputElement>(null)
    const [files, setFiles] = useState<File[]>([])

    const addFile = (e) => {
        if (e.target.files.length && e.target.files[0].type.startsWith('image/')) {
            if (files.length === 0) {
                setFiles([e.target.files[0]])
            } else {
                setFiles([...files, e.target.files[0]])
            }
        }

        setStep('crop')
        e.target.value = null
    }

    const deleteFile = (fileIndex: number) => {
        setFiles(files.filter((item, index) => index !== fileIndex))
    }

    const openSelector = () => {
        if (!input.current) return

        input.current.click()
    }

    const reorderFiles = (startIndex: number, endIndex: number) => {
        setFiles(reorderArray(files, startIndex, endIndex))
    }

    useEffect(() => {
        if (step === 'select') {
            setFiles([])
        }
    }, [step])

    return (
        <Container>
            <input
                type="file"
                accept='image/jpeg,image/png,image/heic,image/heif'
                onChange={addFile}
                style={{ display: 'none' }}
                ref={input}
            />
            {files.length ?
                <ImageEditor
                    files={files}
                    editable={step === 'crop'}
                    reorderFiles={reorderFiles}
                    deleteImage={deleteFile}
                    getResizedImages={getResizedImages}
                    addNewImage={openSelector}
                />
                :
                <ImageSelector>
                    <TheButton
                        text='Выбрать файлы'
                        onClick={openSelector}
                    />
                </ImageSelector>
            }
        </Container>
    )
}

export default FileEditor
