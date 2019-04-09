import React from 'react'
import { Flex } from 'rebass'

import fakeJackpot from '../libs/fakeJackpot'

import SidePanel from '../primitives/Jackpot/SidePanel/SidePanel'
import MainPanel from '../primitives/Jackpot/MainPanel/MainPanel'

class Jackpot extends React.Component {
  constructor(props) {
    super(props)
    this.state = fakeJackpot
  }

  render() {
    return (
      <Flex width={1}>
        <SidePanel width={[1, 1 / 3]} {...this.state} />
        <MainPanel {...this.state} />
      </Flex>
    )
  }
}

export default Jackpot
