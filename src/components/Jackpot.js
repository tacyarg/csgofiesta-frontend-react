import React from 'react'
import { Flex, Box } from 'rebass'

import fakeJackpot from '../libs/fakeJackpot'

import SidePanel from '../primitives/Jackpot/SidePanel/SidePanel'
import MainPanel from '../primitives/Jackpot/MainPanel/MainPanel'
import ItemPool from '../primitives/Jackpot/ItemPool/ItemPool'

import lodash from 'lodash'

class Jackpot extends React.Component {
  constructor(props) {
    super(props)
    this.state = fakeJackpot
  }

  componentDidMount() {}

  render() {
    return (
      <Flex
        p={3}
        {...this.props}
        // flexWrap="wrap"
      >
        <SidePanel {...this.state} />
        <Box mx={2} />
        <Flex
          flex={1}
          flexDirection="column"
          css={{
            minWidth: 300,
            height: '100%',
            overflow: 'hidden',
            // overflowY: 'auto'
          }}
        >
          <MainPanel {...this.state} />
          <ItemPool {...this.state} />
        </Flex>
      </Flex>
    )
  }
}

export default Jackpot
