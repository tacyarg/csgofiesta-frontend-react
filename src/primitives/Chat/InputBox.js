import React from 'react'
import { Flex, Box } from 'rebass'
import { FaPaperPlane } from 'react-icons/fa'

class InputBox extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }

  submitMessage = message => {
    const { onSubmit } = this.props
    if (message.length < 1) return

    if (!onSubmit) console.log('Send me:', message)
    else onSubmit(message)

    this.setState({ value: '' })
  }

  render() {
    const { value } = this.state
    return (
      <Flex
        alignItems="center"
        m={2}
        p={3}
        css={{
          border: 'solid rgba(0, 0, 0, 0.2) 1px',
          borderRadius: 5,
        }}
      >
        <Flex
          onKeyPress={e => {
            if (e.charCode != 13) return
            e.preventDefault()
            this.submitMessage(value)
          }}
          onChange={e => {
            this.setState({ value: e.target.value })
          }}
          value={value}
          as="textarea"
          flex={1}
          width={1}
          // p={2}
          css={{
            border: 0,
            resize: 'none',
            background: 'transparent',
            outline: 'none',
            fontSize: '1em',
          }}
        />
        <Box
          onClick={e => {
            this.submitMessage(value)
          }}
          as={FaPaperPlane}
          mx={2}
          fontSize="1.4em"
          css={{
            cursor: 'pointer',
            background: 'linear-gradient(-45deg, #ff6a00, #ee0979)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
          }}
        />
      </Flex>
    )
  }
}

export default InputBox
