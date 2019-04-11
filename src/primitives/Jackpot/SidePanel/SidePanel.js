import React from 'react'
import { Flex } from 'rebass'

import InfoBar from './InfoBar'
import Bet from './Bet'

const SidePanel = ({ config, bets, players, value, ...props }) => (
  <Flex
    {...props}
    width={1}
    flexDirection="column"
    css={{
      height: '100%',
      maxWidth: 600,
    }}
  >
    <InfoBar config={config} />
    <Flex
      flex={1}
      flexDirection="column"
      css={{
        height: '100%',
        maxWidth: 600,
        overflowY: 'auto',
      }}
    >
      {bets.map(bet => {
        bet.chance = (100 / (value / bet.value)).toFixed(2)
        bet.player = players.find(player => player.id === bet.userid)
        return <Bet key={bet.id} {...bet} />
      })}
    </Flex>
  </Flex>
)

export default SidePanel
