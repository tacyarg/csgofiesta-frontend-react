import React from 'react'
import { Flex, Box, Text } from 'rebass'
import { FaCog, FaHistory, FaWarehouse, FaShoppingCart } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

class SideNav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: '/profile/settings',
      routes: [
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
      ],
    }
  }

  isSelected = path => {
    const { selected } = this.state
    return path === selected
  }

  onSelect = path => {
    const { onSelect } = this.props
    if (onSelect) onSelect(path)
    this.setState({ selected: path })
  }

  render() {
    const { routes } = this.state
    const { location } = this.props
    return (
      <Flex
        width={1}
        padding={4}
        backgroundColor="#221d2e"
        flexDirection="column"
        alignItems="center"
        css={{
          maxWidth: 300,
          // minWidth: 200,
          borderRight: 'solid rgba(0, 0, 0, 0.2) 1px',
        }}
      >
        {routes.map(({ label, icon, path }) => (
          <Flex
            as={NavLink}
            to={path}
            onClick={e => this.onSelect(path)}
            key={path + label}
            my={1}
            width={1}
            p={2}
            css={{
              cursor: 'pointer',
              '&:hover': hoverStyle,
              ...(location.pathname.includes(path) ? hoverStyle : null),
            }}
          >
            <Box mx={2} as={icon} fontSize="1.3em" />
            <Text fontWeight="bold">{label}</Text>
          </Flex>
        ))}
      </Flex>
    )
  }
}

const hoverStyle = {
  backgroundColor: 'rgba(238, 9, 121, 0.8)',
  // background: 'rgba(27, 23, 37, 0.5)',
  boxShadow: '1px 2px 1px rgba(0, 0, 0, 0.25)',
  outline: 'solid rgba(0, 0, 0, 0.2) 1px',
  borderRadius: 5,
}

export default SideNav
