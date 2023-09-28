import { Container, TabItem } from './TheTabs.styles'

interface Tab {
    value: string
    label: string
}

interface props {
    activeTab: string
    setTab: (value: string) => void
    tabs: Tab[]
}

const TheTabs = ({ activeTab, tabs, setTab }: props) => {
    return (
        <Container>
            {tabs.map((item) => (
                <TabItem onClick={() => setTab(item.value)} active={activeTab === item.value} key={item.value}>{item.label}</TabItem>
            ))}
        </Container>
    )
}

export default TheTabs
