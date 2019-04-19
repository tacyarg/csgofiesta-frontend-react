import React from 'react'
import { Flex, Box, Text } from 'rebass'
import { FaHeadset, FaAmbulance } from 'react-icons/fa'

import PrimaryButton from '../PrimaryButton'
import Input from '../Input'
import TextArea from '../TextArea'

class Settings extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      user: props.user,
      subject: '',
      message: '',
      email: props.user.email,
      loading: false,
      disabled: false,
    }
  }

  componentDidMount() {}

  setMySupportEmail = async () => {
    const { chipsgg } = this.props
    const { user, message, email } = this.state
    this.setState({ loading: true })
    await chipsgg.actions.setMySupportEmail({
      email,
      message,
    })
    this.setState({ loading: false, disabled: true, message: '' })
  }

  render() {
    const { loading, disabled, user, subject, email } = this.state
    return (
      <Flex
        p={4}
        width={1}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Header {...user} />
        {disabled ? (
          <Text p={2}>
            Your ticket has been submitted, we will get back to you soon.
          </Text>
        ) : (
          <Flex
            p={2}
            // css={{ border: '1px solid red' }}
            width={1 / 2}
            flexDirection="column"
          >
            <Input
            label="Email:"
            value={email}
            onChange={email => this.setState({ email })}
          />
            <TextArea
              label="Message:"
              value={subject}
              onChange={subject => this.setState({ subject })}
            />
            <Flex width={1} p={2}>
              <Box mx="auto" />
              <PrimaryButton
                onClick={this.setMySupportEmail}
                loading={loading}
                disabled={disabled}
              >
                Submit Ticket <Box mx={1} />
                <Box as={FaAmbulance} />
              </PrimaryButton>
            </Flex>
          </Flex>
        )}
      </Flex>
    )
  }
}

const Header = ({ email }) => (
  <Flex
    width={1}
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    <Box m={3} as={FaHeadset} fontSize="4em" />
    <Text fontSize="2em">Looking for some assistance?</Text>
    <Box
      m={2}
      width={1 / 2}
      as="hr"
      bg="white"
      css={{
        opacity: 0.2,
        border: 0,
        height: 1,
      }}
    />
    {/* {email} */}
  </Flex>
)

export default Settings
