const setClipboard = (value: string) => {
    const tempInput = document.createElement('input')

    tempInput.setAttribute('style', 'position: absolute; left: -1000px; top: -1000px')
    tempInput.value = value

    document.body.appendChild(tempInput)

    tempInput.select()

    document.execCommand('copy')
    document.body.removeChild(tempInput)
}

export default setClipboard
