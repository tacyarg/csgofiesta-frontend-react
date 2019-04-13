import React from 'react'
import { Flex, Box } from 'rebass'
import { Route } from 'react-router-dom'

import SideNav from '../primitives/Profile/SideNav'
import Settings from '../primitives/Profile/Settings/Settings'
import History from '../primitives/Profile/History/History'

class Profile extends React.Component {
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
      ],
    }
  }

  componentDidMount() {
    console.log(this.state)
  }

  changePage = path => {}

  render() {
    const { user, routes } = this.state

    return (
      <Flex
        // p={4}
        width={1}
        css={{ height: '100%' }}
      >
        <SideNav {...this.props} onSelect={this.changePage} />
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

export default Profile
