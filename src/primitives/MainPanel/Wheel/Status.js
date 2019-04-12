import React from 'react'
import { Box, Text } from 'rebass'

class Status extends React.Component {
  render() {
    const { state = 'rolling in', timeleft = 0, ...props } = this.props
    // console.log(this.props)
    return (
      <Box
        css={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      >
        <Text
          css={{
            opacity: 0.7,
            textTransform: 'uppercase',
          }}
        >
          {state}
        </Text>
        <Text fontSize="2em">{parseInt(timeleft / 1000)}s</Text>
      </Box>
    )
  }
}

export default Status
