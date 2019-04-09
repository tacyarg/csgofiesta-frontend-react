import React from 'react'
import { Box, Flex } from 'rebass'

import Wheel from './Wheel/Wheel'
import RoundStats from './RoundStats'

import AmigosIcon from '../../../assets/img/amigos.png'
import MaracasIcon from '../../../assets/img/maracas.png'
import SombreroIcon from '../../../assets/img/sombrero.png'
import TacosIcon from '../../../assets/img/tacos.png'

const generateRoundStats = jackpot => {
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
      value: jackpot.players.length,
      label: 'tacos placed',
      icon: TacosIcon,
    },
    {
      value: '0.00%',
      label: 'Your Odds',
      icon: MaracasIcon,
    },
  ]
}

export default props => (
  <Flex
    m={3}
    p={3}
    css={{
      background: 'rgba(0,0,0,0.25)',
    }}
    flex={1}
    alignItems="center"
    flexWrap="wrap"
    justifyContent="center"
  >
    <Wheel
      mx="auto"
      bets={props.bets.map(bet => {
        bet.player = props.players.find(player => player.id === bet.userid)
        return bet
      })}
    />
    <RoundStats stats={generateRoundStats(props)} />
  </Flex>
)
