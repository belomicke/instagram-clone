import { useState } from 'react'
import CurrentUserSettingsMenu from './CurrentUserSettingsMenu'
import TheModal from '@/shared/ui/TheModal'
import CogIcon from '@/shared/ui/Icon/icons/CogIcon'
import { Container } from './SettingsButton.styles'

const SettingsButton = () => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

    return (
        <>
            <Container onClick={() => setModalIsOpen(true)}>
                <CogIcon />
            </Container>
            <TheModal
                isActive={modalIsOpen}
                close={() => setModalIsOpen(false)}
            >
                <CurrentUserSettingsMenu
                    close={() => setModalIsOpen(false)}
                />
            </TheModal>
        </>
    )
}

export default SettingsButton
