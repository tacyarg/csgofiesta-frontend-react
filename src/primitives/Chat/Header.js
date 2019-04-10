import React from 'react'
import { Flex, Box, Text } from 'rebass'

const Header = ({ roomid }) => (
  <Box p={2} width={1}>
    <Text>Room: {roomid}</Text>
  </Box>
)

export default Header
