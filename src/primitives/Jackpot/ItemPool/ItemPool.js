import React from 'react'
import { Flex, Box, Text, Image } from 'rebass'
import { parseItem } from '../../../libs/utils'

import GameItem from './GameItem'

const ItemPool = ({ items }) => (
  <Flex
    px={3}
    alignItems="stretch"
    flexWrap="wrap"
    alignContent="start"
    justifyContent="center"
  >
    {items.map((item, index) => (
      <GameItem key={item.id+index} {...parseItem(item)} />
    ))}
  </Flex>
)

export default ItemPool
