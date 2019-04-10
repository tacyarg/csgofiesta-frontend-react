import React from 'react'
import { Flex } from 'rebass'

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

  componentDidMount() {
  }

  render() {
    return (
      <Flex {...this.props} flexWrap="wrap">
        <SidePanel {...this.state} />
        <Flex
          p={3}
          flex={1}
          flexDirection="column"
          css={{
            height: '100%',
            overflow: 'hidden',
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
