import { useEffect, useRef, useState } from 'react'
import SelectSizeIcon from '@/shared/ui/Icon/icons/SelectSizeIcon'
import getAspectRatioOfImage from '@/shared/lib/helpers/getAspectRatioOfImage'
import PictureIcon from '@/shared/ui/Icon/icons/PictureIcon'
import RectIcon from '@/shared/ui/Icon/icons/RectIcon'
import PortraitRectIcon from '@/shared/ui/Icon/icons/PortraitRectIcon'
import AlbumRectIcon from '@/shared/ui/Icon/icons/AlbumRectIcon'
import OverlayIconButton from '@/shared/ui/OverlayIconButton'
import { AspectRatioSelector, Option } from './AspectRatioControls.styles'

interface props {
    image: string
    aspectRatio: string
    setAspectRatio: (value: string) => void
}

interface AspectRatioValue {
    label: string
    icon: React.ReactNode
    value: 'original' | '1/1' | '4/5' | '16/9'
}

const AspectRatioControls = ({ image, aspectRatio, setAspectRatio }: props) => {
    const [selectorIsOpen, setSelectorIsOpen] = useState<boolean>(false)
    const [originalAspectRatio, setOriginalAspectRatio] = useState<string>('')
    const container = useRef<HTMLButtonElement>(null)

    const [selectedAspectRatio, setSelectedAspectRatio] = useState<'original' | '1/1' | '4/5' | '16/9'>('original')

    const [aspectRatioList] = useState<AspectRatioValue[]>([
        {
            label: 'Оригинал',
            icon: <PictureIcon />,
            value: 'original'
        },
        {
            label: '1:1',
            icon: <RectIcon />,
            value: '1/1'
        },
        {
            label: '4:5',
            icon: <PortraitRectIcon />,
            value: '4/5'
        },
        {
            label: '16:9',
            icon: <AlbumRectIcon />,
            value: '16/9'
        }
    ])

    const closeOnClickOutside = (e) => {
        const element = e.target as Element

        if (!container.current.contains(element)) {
            setSelectorIsOpen(false)
        }
    }

    useEffect(() => {
        window.addEventListener('click', closeOnClickOutside)

        return () => {
            window.removeEventListener('click', closeOnClickOutside)
        }
    }, [])

    const changeAspectRatio = (e, value: 'original' | '1/1' | '4/5' | '16/9') => {
        e.stopPropagation()

        setSelectedAspectRatio(value)

        if (value === 'original') {
            setAspectRatio(originalAspectRatio)
        } else {
            setAspectRatio(value)
        }
    }

    useEffect(() => {
        const imageElement = new Image()
        imageElement.src = image

        imageElement.addEventListener('load', function () {
            const originalAspectRatio = getAspectRatioOfImage(this)

            setOriginalAspectRatio(originalAspectRatio)

            if (!aspectRatio || selectedAspectRatio === 'original') {
                setAspectRatio(originalAspectRatio)
            }
        })
    }, [image])

    return (
        <OverlayIconButton
            left="10px"
            bottom="10px"
            active={selectorIsOpen}
            onClick={() => setSelectorIsOpen(!selectorIsOpen)}
            ref={container}
        >
            <SelectSizeIcon />
            <AspectRatioSelector visible={selectorIsOpen}>
                {aspectRatioList.map(item => (
                    <Option
                        active={selectedAspectRatio === item.value}
                        onClick={(e) => changeAspectRatio(e, item.value)}
                        key={item.value}
                    >
                        {item.icon}{item.label}
                    </Option>
                ))}
            </AspectRatioSelector>
        </OverlayIconButton>
    )
}

export default AspectRatioControls
