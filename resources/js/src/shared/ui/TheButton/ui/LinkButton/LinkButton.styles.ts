import styled from 'styled-components'

export const LinkButton = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    user-select: none;
    color: var(--primary-blue);
    cursor: pointer;
    transition: .15s;

    &:hover {
        color: var(--hover-link);
    }
`
