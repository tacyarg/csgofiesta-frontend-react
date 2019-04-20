import React from 'react'
import { Flex, Box } from 'rebass'

import fakeJackpot from '../libs/fakeJackpot'
import lodash from 'lodash'
import assert from 'assert'

import SidePanel from '../primitives/SidePanel/SidePanel'
import MainPanel from '../primitives/MainPanel/MainPanel'
import ItemPool from '../primitives/ItemPool/ItemPool'
import WinnerSpinner from '../primitives/WinnerSpinner'

class Jackpot extends React.Component {
  constructor(props) {
    super(props)

    const { userState, state, actions } = props
    this.onRequest = itemids => actions.depositAndJoinJackpot({ itemids })
    this.onRefresh = () => {
      return actions.scanMyVgoInventoryByOpskinsId()
    }
    this.scope = state.scope('jackpot')

    this.state = {
      user: userState ? userState('me') : null,
      items: this.scope('items'),
    }
  }

  componentDidMount() {
    this.scope.on('items', items => this.setState({ items }))
    this.scope.on('players', players => this.setState({ players }))
    this.scope.on('winner', winner => this.setState({ winner }))
  }

  render() { 
    const { user, items, winner, players } = this.state
    return (
      <Flex width={1} p={3}>
        <SidePanel
          scope={this.scope}
          onRequest={this.onRequest}
          onRefresh={this.onRefresh}
        />
        <Box mx={1} />
        <Flex flexDirection="column" width={1}>
          <MainPanel user={user} scope={this.scope} />
          {winner ? <WinnerSpinner winner={winner} players={players} /> : null}
          <ItemPool items={items} />
        </Flex>
      </Flex>
    )
  }
}

export default Jackpot
