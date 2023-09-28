import { useState } from 'react'
import { DropdownOption } from './types'
import DropdownContainer from './DropdownContainer'
import { DropdownItem, DropdownList, DropdownValue } from './Dropdown.styles'

interface props {
    value: string
    setValue: (option: DropdownOption) => void
    options?: DropdownOption[]
}

const Dropdown = ({ value, setValue, options = [] }: props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const dropdownItemClickHandler = (option: DropdownOption) => {
        setValue(option)
        setIsOpen(false)
    }

    return (
        <DropdownContainer close={() => setIsOpen(false)}>
            <DropdownValue active={isOpen} onClick={() => setIsOpen(true)}>{value}</DropdownValue>
            {isOpen &&
                <DropdownList>
                    {options.map((option) => (
                        <DropdownItem onClick={() => dropdownItemClickHandler(option)} key={option.value}>{option.label}</DropdownItem>
                    ))}
                </DropdownList>
            }
        </DropdownContainer>
    )
}

export default Dropdown
