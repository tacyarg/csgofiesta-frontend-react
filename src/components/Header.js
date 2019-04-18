import React from 'react'
import { Flex, Box, Button } from 'rebass'

import Logo from '../primitives/Header/Logo'
import NavBtn from '../primitives/Header/NavButton'
import UserMenu from '../primitives/Header/UserMenu'

import PrimaryButton from '../primitives/PrimaryButton'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: props.chipsgg.userState ? props.chipsgg.userState('me') : null,
      walletBalance: props.chipsgg.userState ? props.chipsgg.userState(['wallet', 'balance']) : 0,
      routes: [
        {
          path: '/jackpot',
          label: 'Jackpot',
          value: 0,
        },
        {
          path: '/30max',
          label: '30max',
          value: 0,
        },
        {
          path: '/coinflip',
          label: 'Coinflip',
          value: 0,
        },
      ],
    }
  }

  componentDidMount() {
    const { chipsgg } = this.props

    if(chipsgg.userState) {
      chipsgg.userState.on(['wallet', 'balance'], walletBalance => {
        this.setState({walletBalance})
      })
    }
  }

  render() {
    const { routes, user, walletBalance } = this.state
    const { chipsgg } = this.props

    return (
      <Flex
        backgroundColor="#221d2e"
        alignItems="center"
        p={10}
        css={{
          boxShadow: '1px 2px 1px rgba(0, 0, 0, 0.25)',
          zIndex: 999,
        }}
      >
        <Logo />
        {routes.map(link => (
          <NavBtn
            key={link.path}
            isActive={link.path === this.props.location.pathname}
            {...link}
          />
        ))}
        <Box mx="auto" />
        {user ? (
          <UserMenu {...user} walletBalance={walletBalance} />
        ) : (
          <PrimaryButton mx={4} onClick={chipsgg.actions.loginOpskins}>
            Opskins Login
          </PrimaryButton>
        )}
      </Flex>
    )
  }
}

export default Header
