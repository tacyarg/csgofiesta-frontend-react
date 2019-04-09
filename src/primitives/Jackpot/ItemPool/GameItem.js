import React from 'react'
import { Flex, Box, Text, Image } from 'rebass'

const GameItem = ({
  skin,
  condition,
  image,
  name,
  price,
  color,
  colorFaded,
}) => {
  console.log(color)
  return (
    <Flex
      width={140}
      height={140}
      p={2}
      m={1}
      flexDirection="column"
      alignItems="center"
      css={{
        maxHeight: 140,
        maxWidth: 140,
        overflow: 'hidden',
        position: 'relative',
        borderBottom: '2px solid #e04e3f',
        borderColor: color,
        background: `linear-gradient(0deg, rgba(${colorFaded}, 0.20), transparent)`,
        fontSize: '12px',
        // flexGrow: 1,
        flexShrink: 0,
      }}
      justifyContent="center"
      flexGrow={1}
      flexShrink={0}
    >
      <Image
        src={image}
        css={{
          // height: '100%',
          width: '100%',
          position: 'relative',
          filter: 'saturate(125%) drop-shadow(0 0 8px black)',
          // filter: 'drop-shadow(0 5px 2px rgba(0, 0, 0, 0.5)) saturate(123%) contrast(110%)',
        }}
      />
      <Text
        fontWeight="bold"
        p={2}
        css={{
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      >
        ${price}
      </Text>
      <Box
        width={1}
        css={{
          backgroundColor: 'rgba(0,0,0,0.3)',
          textAlign: 'center',
          position: 'absolute',
          bottom: 0,
          whiteSpace: 'nowrap',
          transform: 'translate(-50%)',
          left: '50%',
          padding: 5,
          // marginBottom: '5px',
        }}
      >
        <Text
          fontWeight="bold"
          css={{
            opacity: 0.8,
            textOverflow: 'ellipsis',
          }}
        >
          {skin || name}
        </Text>
        <Text
          fontWeight="bold"
          css={{
            opacity: 0.5,
            textOverflow: 'ellipsis',
          }}
        >
          {condition}
        </Text>
      </Box>
    </Flex>
  )
}

export default GameItem
