import React from 'react'
import { Flex, Box, Text } from 'rebass'
import {
  FaChevronDown,
  FaHistory,
  FaCog,
  FaWarehouse,
  FaShoppingCart,
  FaHeadset
} from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

import Avatar from '../Avatar'

class UserMenu extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      showMenu: false,
    }
  }

  componentDidMount() {
    // console.log(this.props)
  }

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu })
  }

  render() {
    const {
      avatar = 'https://steamcdn-a.opskins.media/steamcommunity/public/images/avatars/41/4137b9b5854d565b229e5912bd373356fe8f5c87_full.jpg',
      username = 'taycarg',
      walletBalance = 0,
    } = this.props
    const { showMenu } = this.state
    return (
      <Flex
        mx={4}
        p={2}
        css={{
          cursor: 'pointer',
          position: 'relative',
        }}
        onMouseEnter={this.toggleMenu}
        onMouseLeave={this.toggleMenu}
        flexDirection="column"
      >
        <Flex alignItems="center">
          <Box p={2}>
            $
            {Number(walletBalance).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Box>
          <Avatar src={avatar} mx={2} />
          <Text mx={2} fontWeight="bold">
            {username}
          </Text>
          <Box mx={2} as={FaChevronDown} />
        </Flex>
        {showMenu ? <Menu /> : null}
      </Flex>
    )
  }
}

const Menu = ({
  entries = [
    {
      label: 'Settings',
      icon: FaCog,
      path: '/profile/settings',
    },
    {
      label: 'History',
      icon: FaHistory,
      path: '/profile/history/withdraws',
    },
    {
      label: 'Backpack',
      icon: FaWarehouse,
      path: '/profile/backpack',
    },
    {
      label: 'Shop',
      icon: FaShoppingCart,
      path: '/profile/shop',
    },
    {
      label: 'Support',
      icon: FaHeadset,
      path: '/profile/support',
    }
  ],
}) => (
  <Flex
    flexDirection="column"
    width={1}
    css={{
      top: '100%',
      position: 'absolute',
      borderRadius: 5,
      backgroundColor: '#1f1b2b',
      boxShadow: '1px 2px 1px rgba(0, 0, 0, 0.25)',
    }}
  >
    {entries.map(row => (
      <Flex
        as={NavLink}
        to={row.path}
        key={row.label}
        p={2}
        css={{
          ':hover': {
            borderRadius: 5,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        <Box as={row.icon} mx={2} />
        <Text>{row.label}</Text>
      </Flex>
    ))}
  </Flex>
)

export default UserMenu
