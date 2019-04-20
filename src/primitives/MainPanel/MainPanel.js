import React from 'react'
import { Box, Flex } from 'rebass'

import Wheel from './Wheel/Wheel'
import RoundStats from './RoundStats'

import AmigosIcon from '../../assets/img/amigos.png'
import MaracasIcon from '../../assets/img/maracas.png'
import SombreroIcon from '../../assets/img/sombrero.png'
import TacosIcon from '../../assets/img/tacos.png'

const generateRoundStats = (jackpot, userid) => {
  const totalBet = jackpot.bets.reduce((memo, bet) => {
    if (bet.userid === userid) {
      memo += bet.value
    }
    return memo
  }, 0)

  return [
    {
      type: 'number',
      value: jackpot.value,
      label: 'Tacos Value',
      icon: SombreroIcon,
    },
    {
      value: jackpot.players.length,
      label: 'Amigos in the pot',
      icon: AmigosIcon,
    },
    {
      value: jackpot.items.length,
      label: 'tacos placed',
      icon: TacosIcon,
    },
    {
      value: userid ? (100 / (jackpot.value / totalBet)).toFixed(2) + '%' : '0.00%',
      label: 'Your Odds',
      icon: MaracasIcon,
    },
  ]
}

class MainPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = props.scope()
  }

  componentDidMount() {
    const { scope } = this.props
    scope.on('bets', bets => this.setState({ bets }))
    scope.on('players', players => this.setState({ players }))
    scope.on('value', value => this.setState({ value }))
    scope.on('items', items => this.setState({ items }))
  }

  render() {
    const { user = {} } = this.props
    const { bets, players } = this.state

    return (
      <Flex
        p={2}
        css={{
          background: 'rgba(0,0,0,0.25)',
        }}
        alignItems="center"
        flexWrap="wrap"
        justifyContent="center"
      >
        <Wheel
          bets={bets.map(bet => {
            bet.player = players.find(player => player.id === bet.userid)
            return bet
          })}
        />
        <RoundStats stats={generateRoundStats(this.state, user.id)} />
      </Flex>
    )
  }
}

export default MainPanel
