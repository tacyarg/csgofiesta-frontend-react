import React from 'react'
import { Box, Image, Flex, Text } from 'rebass'

const Avatar = props => (
  <Image width={48} height={48} borderRadius={9999} {...props} />
)

export default bet => (
  <Flex alignItems="center">
    <Avatar m={3} src={bet.player.image} />
    <Flex flexDirection="column">
      <Text color={bet.color} fontWeight="bold">
        {bet.player.name}
      </Text>
      <Text textBreak="none">
        Deposited <strong>{bet.items.length} skins</strong>, valued at{' '}
        <strong>
          $
          {bet.value.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </strong>
      </Text>
    </Flex>
    <Box mx="auto" />
    <Text m={3}>{bet.chance}% </Text>
  </Flex>
)
