import { Section, Body, Header, Subtitle, Title } from './SettingsSection.styles'

interface props {
    title: string
    subtitle?: string
    children: React.ReactNode
}

const SettingsSection = ({ title, subtitle = '', children }: props) => {
    return (
        <Section>
            <Header>
                <Title>{title}</Title>
                {subtitle.length !== 0 &&
                    <Subtitle>{subtitle}</Subtitle>
                }
            </Header>
            <Body>
                {children}
            </Body>
        </Section>
    )
}

export default SettingsSection
