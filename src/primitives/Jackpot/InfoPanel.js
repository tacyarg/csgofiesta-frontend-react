import React from 'react'
import { Flex } from 'rebass'

const InfoPanel = ({
  accentColor = '#ee0979',
  backgroundColor = 'rgba(238, 9, 121, 0.1)',
  ...props
}) => (
  <Flex
    p={3}
    {...props}
    css={{
      // borderRadius: 5,
      borderLeft: `2px solid ${accentColor}`,
      background: `linear-gradient(45deg, ${backgroundColor},#1a1624)`,
    }}
  />
)

export default InfoPanel
