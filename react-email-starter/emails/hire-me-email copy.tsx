import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text
} from '@react-email/components'
import * as React from 'react'

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 251.5471802 315"
            width="3em"
            height="auto"
            fill="#fb8f13"
            style={{ display: 'flex', margin: '0 auto' }}
          >
            <g id="color_index_0">
              <path d="M154.8465424,0v114.3059998c30.0048218,11.6494064,51.25737,40.7830811,51.25737,74.9005737&#9;&#9;c0,44.3691101-35.9612122,80.3303223-80.3303223,80.3303223s-80.3303299-35.9612122-80.3303299-80.3303223&#9;&#9;c0-34.1174927,21.2525558-63.2511673,51.2573776-74.9005737V0C73.370285,44.4591293-0.209643,130.8089142,0.000449,189.2065735&#9;&#9;C0.250482,258.6771545,56.3025093,315,125.7735901,315s125.5231018-56.3228455,125.7731323-125.7934265&#9;&#9;C251.7569427,130.8089142,178.1770172,44.4591293,154.8465424,0z" />
            </g>
          </svg>
          <Hr style={hr} />
          <Text style={h1}>{title}</Text>
          <Text style={paragraph}>{message}</Text>
          <Text style={paragraph}>Sent by {email}</Text>
          <Hr style={hr} />
          <Text style={paragraph}>— dpaulos6</Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export default HireMeEmail

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
