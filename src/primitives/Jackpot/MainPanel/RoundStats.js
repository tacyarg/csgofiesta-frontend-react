import React from 'react'
import { Image, Flex, Text, Box, Heading } from 'rebass'

function parseType(type, value) {
  switch (type) {
    case 'number':
      return `$${Number(value).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`
    default:
      return value
  }
}

const Icon = props => <Image width={40} {...props} />

const Stat = ({ type, value, label, icon }) => (
  <Flex
    // width={1}
    m={2}
    p={15}
    alignItems="center"
    backgroundColor="rgba(26, 22, 36, 0.8)"
    css={{
      borderRadius: 5,
      minWidth: 300,
    }}
  >
    <Box>
      <Heading>{parseType(type, value)}</Heading>
      <Text
        fontWeight="bold"
        css={{
          textTransform: 'uppercase',
          background: 'linear-gradient(-45deg, #ff6a00, #ee0979)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </Text>
    </Box>
    <Box mx="auto" />
    {icon ? <Icon src={icon} /> : <Box mx="auto" />}
  </Flex>
)

export default ({ stats = [], ...props }) => (
  <Flex {...props}flexDirection="column">
    {stats.map(row => (
      <Stat key={row.label} {...row} />
    ))}
  </Flex>
)
