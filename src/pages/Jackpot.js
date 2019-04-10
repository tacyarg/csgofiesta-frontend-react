import React from 'react'
import { Flex, Box } from 'rebass'

import Chat from '../components/Chat'
import Jackpot from '../components/Jackpot'

class MainJackpot extends React.Component {
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
      >
        <Jackpot />
        <Chat />
      </Flex>
    )
  }
}

export default MainJackpot
