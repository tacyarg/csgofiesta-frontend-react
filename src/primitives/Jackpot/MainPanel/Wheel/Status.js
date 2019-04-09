import React from 'react'
import { Box, Text } from 'rebass'

const Status = ({ label = 'rolling in', value = '0.00s' }) => (
  <Box
    css={{
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      fontWeight: 'bold',
      // lineHeight: 1
    }}
  >
    <Text
      css={{
        opacity: 0.7,
        textTransform: 'uppercase',
      }}
    >
      {label}
    </Text>
    <Text fontSize="2em">{value}</Text>
  </Box>
)

export default Status
