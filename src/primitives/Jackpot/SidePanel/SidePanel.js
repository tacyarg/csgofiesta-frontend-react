import React from 'react'
import { Flex } from 'rebass'

import InfoBar from './InfoBar'
import Bet from './Bet'

const SidePanel = ({ config, bets, players, value, ...props }) => (
  <Flex {...props} p={3} flexDirection="column">
    <InfoBar config={config} />
    {bets.map(bet => {
      bet.chance = (100 / (value / bet.value)).toFixed(2)
      bet.player = players.find(player => player.id === bet.userid)
      return <Bet key={bet.id} {...bet} />
    })}
  </Flex>
)

export default SidePanel
