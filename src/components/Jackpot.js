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
    setInterval(this.placeFakeBet, 1000)
  }

  placeFakeBet = () => {
    const clonedState = lodash.cloneDeep(this.state)
    const bet = lodash.sample(this.state.bets)
    bet.color = '#' + Math.floor(Math.random() * 16777215).toString(16)
    bet.id = lodash.random(0, 10000)
    bet.items = bet.items.map(item => {
      return {
        ...item,
        price: lodash.random(0.01, 10),
        id: lodash.random(bet.id, 10000),
      }
    })
    bet.value = bet.items.reduce((memo, item) => {
      memo += item.price
      return memo
    }, 0)
    console.log('placing bet', bet)
    clonedState.bets.push(bet)
    this.setState({
      value: clonedState.value + bet.value,
      bets: clonedState.bets,
      items: [...this.state.items, ...bet.items],
    })
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
            overflowY: 'auto',
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
