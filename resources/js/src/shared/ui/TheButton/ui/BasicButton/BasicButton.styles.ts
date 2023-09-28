import styled from 'styled-components'
import { ButtonVariants } from '../../types'

const getColorsByVariant = (variant: ButtonVariants) => {
    switch (variant) {
    case 'danger':
        return {
            '--text': 'rgb(255, 255, 255)',
            '--background': 'var(--primary-red)',
            '--background-hover': 'var(--primary-red-hover)',
            '--background-button-down': 'var(--primary-red-hover)'
        }
    case 'info':
        return {
            '--text': 'rgb(255, 255, 255)',
            '--background': 'rgb(50, 50, 50)',
            '--background-hover': 'rgb(40, 40, 40)',
            '--background-button-down': 'rgb(35, 35, 35)'
        }
    default:
        return {
            '--text': 'var(--primary-text)',
            '--background': 'var(--primary-blue)',
            '--background-hover': 'var(--primary-blue-hover)',
            '--background-button-down': 'var(--primary-blue-button-down)'
        }
    }
}

export const BasicButton = styled.button<{ block?: boolean, variant: ButtonVariants, disabled: boolean }>`
    ${props => getColorsByVariant(props.variant)};

    display: flex;
    justify-content: center;
    white-space: nowrap;
    align-items: center;
    text-align: center;
    user-select: none;

    border: 0;
    padding: 0.5rem 0.75rem;
    border-radius: 5px;
    line-height: 1rem;
    position: relative;
    font-weight: 700;
    font-size: 0.875rem;
    overflow: hidden;
    transition: .15s;

    ${props => props.block &&`
        justify-content: center;
        width: 100%;
    `}

    ${props => props.disabled ? `
        pointer-events: none;
        color: var(--text);
        background-color: var(--background);
        opacity: .8;
    ` : `
        cursor: pointer;
        color: var(--text);
        background-color: var(--background);

        &:hover {
            background-color: var(--background-hover);
        }

        &:active {
            background-color: var(--background-button-down);
        }
    `};
`
