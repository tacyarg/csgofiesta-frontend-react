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
      <Jackpot
        width={1}
        css={{
          height: '100%',
          overflow: 'hidden',
          // overflowY: 'auto',
        }}
      />
    )
  }
}

export default MainJackpot
