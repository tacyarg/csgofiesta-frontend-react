import React from 'react'
import { Flex, Box } from 'rebass'

import FooterLink from '../primitives/Footer/Link'

const styles = {
  container: {
    color: 'white',
    display: 'flex',
    position: 'fixed',
    width: '100%',
    bottom: 0,
    background: '#221d2e',
    alignItems: 'center',
    padding: '10px',
  },
  left: {
    flex: 1,
  },
  right: {
    display: 'flex',
  },
}

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      routes: [
        {
          link: '/',
          icon: '',
          text: 'Provable Fair',
        },
        {
          link: '/',
          icon: '',
          text: 'Twitter',
        },
        {
          link: '/',
          icon: '',
          text: 'Discord',
        },
      ],
    }
  }

  render() {
    const { routes } = this.state
    return (
      <Flex width={1} p={10} backgroundColor="#221d2e">
        <Box>
          &copy; 2016-2019 CSGOFiesta
          <span>, All Rights Reserved</span>
        </Box>
        <Box mx="auto" />
        <Flex>
          {routes.map(link => (
            <FooterLink key={link.text} {...link} />
          ))}
        </Flex>
      </Flex>
    )
  }
}

export default Footer
