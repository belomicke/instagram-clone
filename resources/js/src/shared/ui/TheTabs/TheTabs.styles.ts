import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    grid-gap: 20px;
`

export const TabItem = styled.div<{ active: boolean }>`
    cursor: pointer;
    position: relative;
    font-size: 16px;
    font-weight: 800;
    user-select: none;
    color: var(--primary-text-non-active);
    padding: 5px 0;
    transition: .15s;

    &:hover {
        color: var(--primary-green-hover);
    }

    ${props => props.active &&`
        color: var(--primary-green);

        &:hover {
            color: var(--primary-green);
        }

        &:after {
            width: 100%;
        }
    `}
`
