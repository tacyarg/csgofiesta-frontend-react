import React from 'react'
import { Flex, Box, Text } from 'rebass'

import Avatar from '../Avatar'

const Message = ({ user, message }) => (
  <Flex
    m={2}
    p={2}
    // width="100%"
    css={{
      background: 'rgba(27, 23, 37, 0.5)',
      border: 'solid rgba(0, 0, 0, 0.2) 1px',
      borderRadius: 5
    }}
  >
    <Avatar src={user.avatar} mx={2} />
    <Flex
      flexDirection="column"
      width={1}
      css={{
        overflow: 'hidden',
      }}
    >
      <Text
        fontWeight="bold"
        css={{
          // opacity: 0.7,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {user.username}
      </Text>
      <Text
        css={{
          opacity: 0.7,
        }}
      >
        {message}
      </Text>
    </Flex>
  </Flex>
)

export default Message
