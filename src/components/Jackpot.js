import React from 'react'
import { Flex, Box } from 'rebass'

import fakeJackpot from '../libs/fakeJackpot'

import SidePanel from '../primitives/SidePanel/SidePanel'
import MainPanel from '../primitives/MainPanel/MainPanel'
import ItemPool from '../primitives/ItemPool/ItemPool'

import lodash from 'lodash'

class Jackpot extends React.Component {
  render() {
    const { jackpot = fakeJackpot, ...props } = this.props

    return (
      <Flex width={1} p={3}>
        <SidePanel {...fakeJackpot} />
        <Box mx={1} />
        <Flex flexDirection="column" width={1}> 
          <MainPanel {...fakeJackpot} />
          <ItemPool {...fakeJackpot} />
        </Flex>
      </Flex>
    )
  }
}

export default Jackpot
