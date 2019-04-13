import React from 'react'
import { Flex, Box, Text } from 'rebass'
import { Route, Redirect } from 'react-router-dom'

import Nav from './Nav'
import Commands from './Commands'


class History extends React.Component {
  constructor(props) {
    super(props)

    console.log(props)

    this.state = {
      routes: [
        {
          label: 'Payouts',
          action: props.chipsgg.actions.myPayoutHistory,
          path: '/profile/history/payouts',
          Component: Commands,
        },
        {
          label: 'Jackpot',
          action: props.chipsgg.actions.myJackpotHistory,
          path: '/profile/history/jackpots',
          Component: Commands,
        },
      ],
    }
  }

  onSelect = () => {}

  render() {
    const { routes } = this.state
    return (
      <Flex width={1} flexDirection="column" css={{ height: '100%', overflow: 'hidden'}}>
        <Nav {...this.props} routes={routes} onSelect={this.onSelect} />
        {routes.map(({ path, Component, action }) => (
          <Route
            key={path}
            path={path}
            render={props => <Component action={action} />}
          />
        ))}
      </Flex>
    )
  }
}

export default History
