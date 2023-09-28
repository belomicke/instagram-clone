import { Stat, StatValue } from './EntityPageHeaderStat.styles'

interface props {
    value: number
    label: string
    onClick?: () => void
}

const EntityPageHeaderStat = ({ value, label, onClick }: props) => {
    return (
        <Stat clickable={Boolean(onClick)} onClick={onClick}><StatValue>{value}</StatValue> {label}</Stat>
    )
}

export default EntityPageHeaderStat
