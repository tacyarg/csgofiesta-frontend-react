import React from 'react'
import { Flex, Box, Text } from 'rebass'

import Avatar from '../Avatar'

const UserDetails = ({ id, username, avatar }) => (
  <Flex
    p={4}
    css={{
      background: 'rgba(0,0,0,0.25)',
      borderBottom: 'solid rgba(0, 0, 0, 0.2) 1px',
    }}
    backgroundColor="#221d2e"

    flexDirection="column"
    alignItems="center"
    justifyContent="center"
  >
    <Avatar m={2} width={128} height={128} src={avatar} />
    <Text fontWeight="bold" fontSize="1.5em">
      {username}
    </Text>
    <Text p={2}>{id}</Text>
  </Flex>
)

export default UserDetails
