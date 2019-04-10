import React from 'react'
import { Flex, Box } from 'rebass'

class NotFound extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <Flex
        width={1}
        css={{
          height: '100%',
          overflow: 'hidden',
          // overflowY: 'auto',
        }}
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <h1 className="title">404</h1>
          <h2 className="subtitle">Not Found</h2>
        </Box>
      </Flex>
    )
  }
}

export default NotFound
