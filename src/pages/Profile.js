import React from 'react'
import { Flex, Box, Heading } from 'rebass'
import { Route } from 'react-router-dom'

import SideNav from '../primitives/Profile/SideNav'
import Settings from '../primitives/Profile/Settings/Settings'
import History from '../primitives/Profile/History/History'
import Backpack from '../primitives/Profile/Backpack'
import Shop from '../primitives/Profile/Shop'
import Support from '../primitives/Profile/Support'

class Profile extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      user: props.chipsgg.userState ? props.chipsgg.userState('me') : null,
      routes: [
        {
          path: '/profile/settings',
          Component: Settings,
        },
        {
          path: '/profile/history',
          Component: History,
        },
        {
          path: '/profile/backpack',
          Component: Backpack,
        },
        {
          path: '/profile/shop',
          Component: Shop,
        },
        {
          path: '/profile/support',
          Component: Support,
        },
      ],
    }
  }

  componentDidMount() {
    // console.log(this.state)
  }

  render() {
    const { user, routes } = this.state
    if (!user) {
      return (
        <Flex
          p={4}
          width={1}
          justifyContent="center"
          alignItems="create"
        >
          <Heading>Please login to view your profile.</Heading>
        </Flex>
      )
    } else {
      return (
        <Flex
          width={1}
          css={{ height: '100%' }}
        >
          <SideNav {...this.props} />
          <Box width={1} css={{ height: '100%' }}>
            {routes.map(({ path, Component }) => (
              <Route
                key={path}
                path={path}
                render={props => <Component {...this.props} user={user} />}
              />
            ))}
          </Box>
        </Flex>
      )
    }
  }
}

export default Profile
