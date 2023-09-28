const reorderArray = <T>(array: T[], firstIndex: number, secondIndex: number) => {
    if (firstIndex === secondIndex) return

    const newList = array.map((item, index) => {
        if (index === firstIndex) {
            return array[secondIndex]
        }

        if (index === secondIndex) {
            return array[firstIndex]
        }

        return item
    })

    return newList
}

export default reorderArray
