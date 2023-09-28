interface props {
    filled: boolean
}

const BookmarkIcon = ({ filled }: props) => {
    return (
        <svg
            aria-label="Сохранить"
            className="x1lliihq x1n2onr6"
            color="rgb(245, 245, 245)"
            fill="rgb(245, 245, 245)"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
        >
            {filled ?
                <path
                    fill="currentColor"
                    d="M20 22a.999.999 0 0 1-.687-.273L12 14.815l-7.313 6.912A1 1 0 0 1 3 21V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Z"
                />
                :
                <polygon
                    fill="none"
                    points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                />
            }
        </svg>
    )
}

export default BookmarkIcon
