import { Interweave } from 'interweave'
import { useNavigate } from 'react-router-dom'
import { HashtagMatcher, MentionMatcher, UrlMatcher } from 'interweave-autolink'

interface props {
    className?: string
    text: string
}

const TextAutolink = ({ text, className }: props) => {
    const navigate = useNavigate()

    const clickHandler = (e) => {
        e.preventDefault()

        const elementValue = e.target.innerHTML as string

        if (elementValue[0] === '#') {
            navigate(`/tag/${elementValue.slice(1, elementValue.length)}`)
        } else if (elementValue[0] === '@') {
            navigate(`/user/${elementValue.slice(1, elementValue.length)}`)
        }
    }

    return (
        <Interweave
            className={className}
            content={text}
            matchers={[
                new UrlMatcher('url'),
                new HashtagMatcher('hashtag'),
                new MentionMatcher('mention'),
            ]}
            onClick={clickHandler}
            mentionUrl="http://localhost/{{mention}}"
        />
    )
}

export default TextAutolink
