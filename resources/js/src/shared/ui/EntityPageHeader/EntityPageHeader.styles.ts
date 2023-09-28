import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-gap: 25px;
    max-width: 1440px;
    width: 100%;
`

export const AvatarWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 10px;
`

export const Username = styled.div`
    font-weight: 700;
    font-size: 24px;
`

export const Stats = styled.div`
    display: flex;
    grid-gap: 40px;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 32px;
`
