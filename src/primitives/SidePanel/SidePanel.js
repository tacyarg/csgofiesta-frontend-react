import React from 'react'
import { Flex } from 'rebass'

import InfoBar from './InfoBar'
import Bet from './Bet'

import fakePlayer from '../../libs/fakePlayer'

class SidePanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = props.scope()
  }

  componentDidMount() {
    const { scope } = this.props
    scope.on('config', config => this.setState({ config }))
    scope.on('bets', bets => this.setState({ bets }))
    scope.on('players', players => this.setState({ players }))
    scope.on('value', value => this.setState({ value }))
  }

  render() {
    const { onRequest, onRefresh } = this.props
    const { config, bets, players, value } = this.state
    return (
      <Flex
        width={1}
        flexDirection="column"
        css={{
          height: '100%',
          maxWidth: 500,
        }}
      >
        <InfoBar config={config} onRequest={onRequest} onRefresh={onRefresh} />
        <Flex
          flex={1}
          flexDirection="column"
          css={{
            height: '100%',
            maxWidth: 500,
            overflowY: 'auto',
          }}
        >
          {bets.map(bet => {
            bet.chance = (100 / (value / bet.value)).toFixed(2)
            bet.player =
              players.find(player => player.id === bet.userid) || fakePlayer
            return <Bet key={bet.id} {...bet} />
          })}
        </Flex>
      </Flex>
    )
  }
}

export default SidePanel
