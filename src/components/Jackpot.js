import React from 'react'
import { Flex } from 'rebass'

import fakeJackpot from '../libs/fakeJackpot'

import SidePanel from '../primitives/Jackpot/SidePanel/SidePanel'
import MainPanel from '../primitives/Jackpot/MainPanel/MainPanel'
import ItemPool from '../primitives/Jackpot/ItemPool/ItemPool'

class Jackpot extends React.Component {
  constructor(props) {
    super(props)
    this.state = fakeJackpot
  }

  componentDidMount() {
    setInterval(() => {})
  }

  placeFakeBet() {}

  render() {
    return (
      <Flex width={1} flexWrap="wrap">
        <SidePanel {...this.state} />
        <Flex p={3} flex={1} flexDirection="column">
          <MainPanel {...this.state} />
          <ItemPool {...this.state} />
        </Flex>
      </Flex>
    )
  }
}

export default Jackpot
