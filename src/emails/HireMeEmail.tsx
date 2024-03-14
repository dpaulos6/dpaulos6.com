import {
  Body,
  Container,
  Head,
  Hr,
  Img,
  Html,
  Preview,
  Section,
  Text
} from '@react-email/components'

const email = 'dycjh@example.com'
const title = 'Portfolio'
const message =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

export const HireMeEmail = () => (
  <Html>
    <Head />
    <Preview>You're now ready to make live transactions with Stripe!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img src="/static/logo.png" alt="dpaulos6" width="50" height="auto" style={{ display: 'flex', margin: '0 auto'}}/>
          <Hr style={hr} />
          <Text style={h1}>{title}</Text>
          <Text style={paragraph}>{message}</Text>
          <Text style={paragraph}>Sent by {email}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif'
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px'
}

const box = {
  padding: '0 48px'
}

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0'
}

const h1 = {
  color: '#fb8f13',
  fontSize: '20px',
  fontWeight: '700',
  textAlign: 'left' as const
}

const paragraph = {
  color: '#61677A',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const
}
