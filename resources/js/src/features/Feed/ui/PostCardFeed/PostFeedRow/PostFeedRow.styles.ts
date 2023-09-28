import { styled } from 'styled-components'

export const Container = styled.div`
    display: inline-grid;
    grid-template-columns: repeat(3, minmax(0, 300px));
    justify-content: center;
    grid-gap: 20px;
`
