import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    padding: 5px 0;
`

export const DropdownList = styled.div<{ withFooter?: boolean }>`
    display: flex;
    flex-direction: column;
    grid-gap: 5px;
    position: absolute;
    top: calc(100% + 10px);
    right: 0;
    background-color: var(--pg-background);
    border: 1px solid var(--border-color);
    width: 200px;
    border-radius: 5px;
    padding: 5px 0;
    overflow: hidden;
    z-index: 1000;
`

export const DropdownItemGroup = styled.div`
    display: flex;
    flex-direction: column;
`

export const DropdownSeparator = styled.div`
    width: 100%;
    height: 1px;
    background-color: var(--border-color);
`

export const DropdownItem = styled.div`
    cursor: pointer;
    padding: 5px 10px;
    font-weight: 600;
    transition: .15s;

    &:hover {
        background-color: rgba(200, 200, 200, .2);
    }
`

export const DropdownValue = styled.div<{ active: boolean }>`
    cursor: pointer;
    font-weight: 700;
    transition: .25s;

    ${props => props.active ? `
        color: var(--primary-text);
    ` : `
        color: var(--primary-text-non-active);
    `}

    &:hover {
        color: var(--primary-text);
    }
`
