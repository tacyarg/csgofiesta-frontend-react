import React from 'react'
import Box from 'ui-box'

import Logo from '../primitives/Header/Logo'
import NavBtn from '../primitives/Header/NavButton'
import UserMenu from '../primitives/Header/UserMenu'

const styles = {
  header: {
    display: 'flex',
    color: 'white',
    width: '100%',
    background: '#221d2e',
    alignItems: 'center',
    padding: '10px',
  },
  headerLeft: {
    display: 'flex',
    flex: 1,
  },
  headerRight: {
    display: 'flex',
  },
  headerBtn: {
    marginLeft: '10px',
  },
}

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      routes: [
        {
          link: '/jackpot',
          text: 'Jackpot',
          value: 0,
        },
        {
          link: '/30max',
          text: '30max',
          value: 0,
        },
        {
          link: '/coinflip',
          text: 'Coinflip',
          value: 0,
        },
      ],
    }
  }

  render() {
    const { routes } = this.state
    return (
      <Box {...styles.header}>
        <Box {...styles.headerLeft}>
          <Logo />
          {routes.map(link => (
            <NavBtn key={link.text} {...link} />
          ))}
        </Box>
        <Box {...styles.headerRight}>
          <UserMenu username="tacyarg" />
        </Box>
      </Box>
    )
  }
}

export default Header
