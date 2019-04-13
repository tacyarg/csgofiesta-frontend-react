import React from 'react'
import { Flex, Box } from 'rebass'

import UserDetails from '../primitives/Profile/UserDetails'
import SideNav from '../primitives/Profile/SideNav'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: props.chipsgg.userState ? props.chipsgg.userState('me') : null,
    }
  }

  componentDidMount() {
    console.log(this.state)
  }

  render() {
    const { user } = this.state

    return (
      <Flex
        // p={4}
        width={1}
        css={{ height: '100%' }}
      >
        <SideNav />
        <Box width={1}>
          <UserDetails {...user} />
        </Box>

        {/* <UserDetails {...user} />
        <Flex css={{ height: '100%' }}>
          <SideNav />
        </Flex> */}
      </Flex>
    )
  }
}

export default Profile
