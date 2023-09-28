import getImagePropertiesByAspectRatio from './getImagePropertiesByAspectRatio'
import getRandomString from './getRandomString'

const getResizedImage = (imagePath: string, aspectRatio: string, imageWidth: number = null, imageHeight: number = null): Promise<File> => {
    return new Promise((resolve) => {
        const image = new Image()
        image.src = imagePath

        if (imageWidth) {
            image.width = imageWidth
        }

        if (imageHeight) {
            image.height = imageHeight
        }

        image.addEventListener('load', function () {
            const { width, height } = getImagePropertiesByAspectRatio(this.width, this.height, aspectRatio)

            const canvas = document.createElement('canvas')
            const ctx = canvas.getContext('2d')

            canvas.width = imageWidth ? imageWidth : width
            canvas.height = imageHeight ? imageHeight : height

            ctx.drawImage(image,
                (width - image.width) / 2,
                (height - image.height) / 2,
                image.width,
                image.height
            )

            canvas.toBlob(blob => {
                resolve(new File([blob], getRandomString(10)))
            })
        })
    })
}

export default getResizedImage
