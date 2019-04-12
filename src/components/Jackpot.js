import React from 'react'
import { Flex, Box } from 'rebass'

import fakeJackpot from '../libs/fakeJackpot'

import SidePanel from '../primitives/Jackpot/SidePanel/SidePanel'
import MainPanel from '../primitives/Jackpot/MainPanel/MainPanel'
import ItemPool from '../primitives/ItemPool/ItemPool'

import lodash from 'lodash'

class Jackpot extends React.Component {
  render() {
    const { jackpot = fakeJackpot, ...props } = this.props

    return (
      <Flex width={1} p={3}>
        <SidePanel {...jackpot} />
        <Box mx={2} />
        <Flex flexDirection="column" width={1}> 
          <MainPanel {...jackpot} />
          <ItemPool {...jackpot} />
        </Flex>
      </Flex>
    )
  }
}

export default Jackpot
