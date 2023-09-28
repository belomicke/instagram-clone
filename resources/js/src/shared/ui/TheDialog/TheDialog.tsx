import { BottomPart, Container, DialogButton, Subtitle, Title, TopPart } from './TheDialog.styles'

interface props {
    title: string
    subtitle: string
    submitButtonText: string
    submitHandler: () => void
    closeDialogHandler: () => void
}

const TheDialog = ({ title, subtitle, submitButtonText, submitHandler, closeDialogHandler }: props) => {
    return (
        <Container>
            <TopPart>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
            </TopPart>
            <BottomPart>
                <DialogButton type="danger" onClick={() => submitHandler()}>{submitButtonText}</DialogButton>
                <DialogButton type="info" onClick={() => closeDialogHandler()}>Отмена</DialogButton>
            </BottomPart>
        </Container>
    )
}

export default TheDialog
