import moment from 'moment/moment'

const addZeroToStartIfNumberLowerThenTen = (number: number) => {
    if (number < 10) {
        return `0${number}`
    } else {
        return number
    }
}

const getDate = (date: moment.Moment) => {
    return addZeroToStartIfNumberLowerThenTen(date.date())
}

const getMonth = (date: moment.Moment) => {
    return addZeroToStartIfNumberLowerThenTen(date.month() + 1)
}

const getShortPublishDate = (created_at: string) => {
    const now = moment(new Date())
    const createdDate = moment(created_at)

    const weeks = Math.ceil((now.dayOfYear() - createdDate.dayOfYear()) / 7)

    if (now.year() > createdDate.year()) {
        return `${getDate(createdDate)}-${getMonth(createdDate)}-${createdDate.year()}`
    } else if (now.month() > createdDate.month()) {
        return `${getDate(createdDate)}-${getMonth(createdDate)}`
    } else if (now.month() === createdDate.month() && now.dayOfYear() - createdDate.dayOfYear() >= 7) {
        return `${weeks} н.`
    } else if (now.dayOfYear() - createdDate.dayOfYear() > 0){
        return now.dayOfYear() - createdDate.dayOfYear() + ' д.'
    } else if (now.hour() - createdDate.hour()) {
        return now.hour() - createdDate.hour() + ' ч.'
    } else if (now.minutes() - createdDate.minutes() > 0) {
        return now.minutes() - createdDate.minutes() + ' м.'
    } else {
        return now.seconds() - createdDate.seconds() + ' с.'
    }
}

export default getShortPublishDate
