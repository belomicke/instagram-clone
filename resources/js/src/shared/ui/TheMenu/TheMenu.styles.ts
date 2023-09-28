import { styled } from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(40, 40, 40);
    width: 400px;
    border-radius: 5px;
    overflow: hidden;
`

export const Option = styled.div<{ variant: 'info' | 'danger' }>`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    min-height: 48px;
    cursor: pointer;
    transition: .15s;

    color: ${props => props.variant === 'info' ? 'var(--primary-text)' : 'var(--primary-red)'};
    font-weight: ${props => props.variant === 'info' ? '400' : '700'};

    &:hover {
        background-color: rgb(60, 60, 60);
    }

    & + & {
        border-top: 1px solid var(--border-color);
    }
`
