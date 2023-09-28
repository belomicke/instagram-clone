import { styled } from 'styled-components'

export const Container = styled.div`
    border-radius: 5px;
    background-color: var(--primary-background);
    overflow: hidden;
`

export const TopPart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-gap: 15px;
    padding: 20px 40px;
`

export const Title = styled.div`
    font-weight: 400;
    font-size: 20px;
    color: rgb(245, 245, 245);
`

export const Subtitle = styled.div`
    color: rgb(160, 160, 160);
    font-size: 14px;
`

export const BottomPart = styled.div`
    display: flex;
    flex-direction: column;
`

const getColor = (type: 'info' | 'danger') => {
    if (type === 'info') return 'rgb(245, 245, 245)'
    if (type === 'danger') return 'var(--primary-red)'
}

export const DialogButton = styled.div<{ type: 'info' | 'danger' }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 14px;
    min-height: 48px;
    border-top: 1px solid rgb(60, 60, 60);
    cursor: pointer;
    font-weight: ${props => props.type !== 'info' ? '700' : '400'};
    color: ${props => getColor(props.type)};
    transition: .15s;

    &:hover {
        background-color: var(--primary-background-hover);
    }
`
