import { styled } from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 10px;
    position: relative;
`

export const Author = styled.div`
    display: flex;
    align-items: center;
    grid-gap: 10px;
    padding: 10px 10px 0;
`

export const Username = styled.div`
    font-weight: 700;
`

export const Description = styled.textarea`
    width: 100%;
    height: 200px;
    background-color: transparent;
    color: rgb(245, 245, 245);
    font-size: 14px;
    padding: 0 10px;
    border: 0;
    outline: 0;
    resize: none;
`

export const DescriptionFooter = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 10px;
`

export const DescriptionLengthCounter = styled.div`
    color: rgb(160, 160, 160);
    font-size: 14px;
    font-weight: 400;
`

export const SwitchOption = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`

export const SwitchOptionTitle = styled.div`
    font-size: 16px;
    color: rgb(255, 255, 255);
`
