import React from 'react'
import { Flex, Box } from 'rebass'

import Jackpot from '../components/Jackpot'

class MainJackpot extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <Box css={{
        height: '100%'
      }}>
        <Jackpot />
      </Box>
    )
  }
}

export default MainJackpot
