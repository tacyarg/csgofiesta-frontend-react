import React from 'react'
import { Flex, Box, Text, Image } from 'rebass'
import { parseItem } from '../../libs/utils'

import GameItem from './GameItem'

class ItemPool extends React.Component {
  render() {
    const { items, ...props } = this.props
    return (
      <Flex
        // width={1}
        // px={3}
        alignItems="stretch"
        flexWrap="wrap"
        alignContent="start"
        justifyContent="center"
        css={{
          maxHeight: '100%',
          overflow: 'hidden',
          overflowY: 'auto',
          // border: '1px solid'
        }}
      >
        {items.map((item, index) => (
          <GameItem
            key={item.id + index}
            {...parseItem(item)}
            {...props}
          />
        ))}
      </Flex>
    )
  }
}

export default ItemPool
