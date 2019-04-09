import React from 'react'
import Box from 'ui-box'

import { Image, Flex, Text } from 'rebass'

import fakeJackpot from '../libs/fakeJackpot'
import Info from '../primitives/Jackpot/Info'
import BetInfo from '../primitives/Jackpot/BetInfo'

const styles = {
  container: {
    display: 'flex',
    padding: 25,
    color: 'white',
  },
  left: {
    width: '100%',
    maxWidth: 650,
    minWidth: 350,
    display: 'flex',
    flexDirection: 'column',
  },
  right: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}

const CurrentRound = ({ config, bets, players, value, ...props }) => (
  <Flex {...props}>
    <Info config={config} />
    {bets.map(bet => {
      bet.chance = (100 / (value / bet.value)).toFixed(2)
      bet.player = players.find(player => player.id === bet.userid)
      return <BetInfo key={bet.id} {...bet} />
    })}
  </Flex>
)

class Jackpot extends React.Component {
  constructor(props) {
    super(props)
    this.state = fakeJackpot
  }

  render() {
    return (
      <Flex width={1}>
        <CurrentRound
          width={1 / 3}
          p={3}
          flexDirection="column"
          {...this.state}
        />
        <Flex p={3} flexDirection="column">
          I am jackpot
        </Flex>
      </Flex>
    )
  }
}

export default Jackpot
