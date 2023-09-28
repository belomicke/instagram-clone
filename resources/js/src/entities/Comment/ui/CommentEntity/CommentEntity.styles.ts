import styled from 'styled-components'
import Avatar from '@/shared/ui/Avatar'
import TextAutolink from '@/shared/ui/TextAutolink'


export const Container = styled.div`
    display: grid;
    grid-template-columns: 32px 1fr;
    grid-gap: 10px;
`

export const AuthorAvatar = styled(Avatar)`
    display: flex;
    cursor: pointer;
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 5px;
`

export const Header = styled.div`
    display: flex;
`

export const Username = styled.div`
    cursor: pointer;
    color: var(--primary-text);
    font-size: 14px;
    font-weight: 700;
    transition: .15s;

    &:hover {
        color: var(--secondary-text-hover);
    }

    &:active {
        color: var(--secondary-text);
    }
`

export const Text = styled(TextAutolink)`
    font-size: 14px;
`

export const Footer = styled.div`

`

export const CreatedAt = styled.div`
    color: var(--secondary-text);
    font-size: 14px;
    font-weight: 400;
`
