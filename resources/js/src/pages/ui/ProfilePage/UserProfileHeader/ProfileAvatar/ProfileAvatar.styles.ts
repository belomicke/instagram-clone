import Avatar from '@/shared/ui/Avatar'
import { styled } from 'styled-components'

export const AvatarContainer = styled(Avatar)<{ editable: boolean }>`
    ${props => props.editable ? 'cursor: pointer;' : ''};
`
