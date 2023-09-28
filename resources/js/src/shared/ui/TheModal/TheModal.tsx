import React, { useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'
import {
    ModalContainer,
    Background,
    ModalCenteredContainer
} from './TheModal.styles'

interface props {
    isActive: boolean
    close?: () => void
    center?: boolean
    children?: React.ReactNode
}

const TheModal = ({ isActive, close, center = true, children }: props) => {
    const body = document.querySelector('body')

    useLayoutEffect(() => {
        if (isActive) {
            body.style.overflow = 'hidden'
            body.style.paddingRight = '15px'
        }

        return () => {
            console.log(document.querySelectorAll(`.${ModalContainer.styledComponentId}`).length)
            if (document.querySelectorAll(`.${ModalContainer.styledComponentId}`).length === 0) {
                body.removeAttribute('style')
            }
        }
    }, [isActive])

    if (!isActive) return <></>

    return createPortal(
        <ModalContainer>
            <Background onClick={close} />
            {center ?
                <ModalCenteredContainer>
                    {children}
                </ModalCenteredContainer>
                :
                children
            }
        </ModalContainer>,
        body
    )
}

export default TheModal
