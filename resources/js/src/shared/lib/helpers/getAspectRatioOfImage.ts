const gcd = (a: number, b: number) => {
    return (b === 0) ? a : gcd (b, a % b)
}

const getAspectRatioOfImage = (image: HTMLImageElement) => {
    const x = gcd(image.width, image.height)

    return `${image.width / x}/${image.height / x}`
}

export default getAspectRatioOfImage
