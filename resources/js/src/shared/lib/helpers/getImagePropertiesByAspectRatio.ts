const getImagePropertiesByAspectRatio = (width: number, height: number, ar: string) => {
    let canvasWidth = 0, canvasHeight = 0
    let x = 0

    const arWidth = Number(ar.split('/')[0])
    const arHeight = Number(ar.split('/')[1])

    if (width > height) {
        x = height / arHeight
    } else if (height > width) {
        x = width / arWidth
    } else {
        if (arWidth > arHeight) {
            x = width / arWidth
        } else {
            x = height / arHeight
        }
    }

    canvasWidth = x * arWidth
    canvasHeight = x * arHeight

    return {
        width: canvasWidth,
        height: canvasHeight
    }
}

export default getImagePropertiesByAspectRatio
