import React from 'react'
import { Flex, Box } from 'rebass'
import { FaTwitter, FaDiscord, FaDice } from 'react-icons/fa'

import FooterLink from '../primitives/Footer/Link'

class Footer extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      routes: [
        {
          link: 'https://www.random.org/randomness/',
          icon: FaDice,
          text: 'Provable Fair',
        },
        {
          link: '/',
          icon: FaTwitter,
          text: 'Twitter',
        },
        {
          link: '/',
          icon: FaDiscord,
          text: 'Discord',
        },
      ],
    }
  }

  render() {
    const { routes } = this.state
    return (
      <Flex
        width={1}
        p={10}
        backgroundColor="#221d2e"
        css={{ borderTop: '1px solid rgba(0, 0, 0, 0.25)' }}
      >
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
