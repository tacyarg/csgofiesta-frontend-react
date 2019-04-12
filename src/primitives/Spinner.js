import React from 'react'
import { Box } from 'rebass'
import { FaCog } from 'react-icons/fa'

const Spinner = props => (
  <Box
    as={FaCog}
    fontSize="1em"
    {...props}
    css={{
      animation: 'rotation 1s infinite linear',
    }}
  />
)

export default Spinner
