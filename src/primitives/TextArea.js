import React from 'react'
import { Flex, Box, Text } from 'rebass'

class TextArea extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value || '',
    }
  }

  render() {
    const { label = 'Some Input', onChange, ...props } = this.props
    const { value } = this.state
    return (
      <Flex p={2} alignItems="center">
        <Text
          fontWeight="bold"
          mx={2}
          css={{
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </Text>
        <Box
          my={2}
          onChange={e => {
            this.setState({ value: e.target.value })
            return onChange(e.target.value)
          }}
          value={value}
          as="textarea"
          width={1}
          p={2}
          css={{
            background: 'rgba(0,0,0, 0.5)',
            border: 'solid rgba(0, 0, 0, 0.2) 1px',
            borderRadius: 5,
            resize: 'none',
            outline: 'none',
            fontSize: '1em',
          }}
        />
      </Flex>
    )
  }
}

export default TextArea