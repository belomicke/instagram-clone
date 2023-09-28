import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import User from '@/shared/api/models/User/User'
import TextAutolink from '@/shared/ui/TextAutolink'
import { Container, Author, More } from './PostDescription.styles'

interface props {
    description: string
    user: User
}

const PostDescription = ({ description, user }: props) => {
    const navigate = useNavigate()
    const [descriptionIsOpened, setDescriptionIsOpen] = useState<boolean>(description.length < 125)

    const formattedDescription = useMemo(() => {
        if (description.length < 125 || descriptionIsOpened) return description

        const splitDescription = description.split(' ')
        let result = ''

        for (let index = 0; index < splitDescription.length; index++) {
            if (result.length + splitDescription[index].length <= 125) {
                if (result.length) {
                    result += ' ' + splitDescription[index]
                } else {
                    result += splitDescription[index]
                }
            } else {
                result += '...'
                break
            }
        }

        return result
    }, [description, descriptionIsOpened])

    return (
        <Container>
            <Author onClick={() => navigate(`/user/${user.username}`)}>{user.username}</Author>
            &nbsp;
            <TextAutolink
                text={formattedDescription}
            />
            {!descriptionIsOpened &&
                <> <More onClick={() => setDescriptionIsOpen(true)}>ещё</More></>
            }
        </Container>
    )
}

export default PostDescription
