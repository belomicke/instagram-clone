import Avatar from '@/shared/ui/Avatar'
import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 40px 1fr 40px;
    align-items: center;
    grid-gap: 15px;
    height: 40px;
`

export const AuthorAvatar = styled(Avatar)`
    cursor: pointer;
`

export const Info = styled.div`
    display: flex;
    align-items: center;
    grid-gap: 10px;
`

export const UsernameContainer = styled.div`
    display: flex;
`

export const Username = styled.div`
    cursor: pointer;
    color: rgb(255, 255, 255);
    font-size: 16px;
    line-height: 18px;
    font-weight: 700;
    transition: .15s;

    &:hover {
        color: rgb(160, 160, 160);
    }
`

export const CreatedAt = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: var(--secondary-text);
`
