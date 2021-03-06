import React from 'react'
import { Flex, Box, Text } from 'rebass'
import { Route, Redirect } from 'react-router-dom'

import Nav from './Nav'
import Commands from './Commands'

class History extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      routes: [
        // {
        //   label: 'Payouts',
        //   action: props.chipsgg.actions.myPayoutHistory,
        //   path: '/profile/history/payouts',
        //   Component: Commands,
        // },
        // {
        //   label: 'Jackpot',
        //   action: props.chipsgg.actions.myJackpotHistory,
        //   path: '/profile/history/jackpots',
        //   Component: Commands,
        // },
        // {
        //   label: 'Deposits',
        //   action: props.chipsgg.actions.myDepositHistory,
        //   path: '/profile/history/deposits',
        //   Component: Commands,
        // },
        {
          label: 'Withdraws',
          action: props.chipsgg.actions.myWithdrawHistory,
          path: '/profile/history/withdraws',
          Component: Commands,
        },
      ],
    }
  }

  onSelect = () => {}

  render() {
    const { routes } = this.state
    return (
      <Flex
        width={1}
        flexDirection="column"
        css={{ height: '100%', overflow: 'hidden' }}
      >
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
