import React from 'react'
import { Box, Flex, Text } from 'rebass'

import InfoPanel from '../InfoPanel'
import PrimaryButton from '../../PrimaryButton'

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

const Rule = ({ label, value, type }) => (
  <Box
    px={1}
    css={{
      opacity: 0.7,
      whiteSpace: 'nowrap'
    }}
  >
    <u>{label}:</u> {parseType(type, value)}
  </Box>
)

const Rules = ({ betValueMin = 0, betValueMax = 0, betItemLimit = 0 }) => (
  <Flex flexWrap="wrap">
    <Rule label="Min. Bet" value={betValueMin} type="number" />
    <Rule label="Max Bet" value={betValueMax} type="number" />
    <Rule label="Max Items" value={betItemLimit} />
  </Flex>
)

export default ({ config }) => (
  <InfoPanel>
    <Flex flexDirection="column">
      <Text px={1} fontWeight="bold">
        CURRENT GAME
      </Text>
      <Rules {...config} />
    </Flex>
    <Box mx="auto" />
    <PrimaryButton>Deposit</PrimaryButton>
  </InfoPanel>
)
