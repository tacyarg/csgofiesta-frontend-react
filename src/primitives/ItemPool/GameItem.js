import React from 'react'
import { Flex, Box, Text, Image } from 'rebass'

class GameItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false,
    }
  }

  toggleSelected = () => {
    const { selected } = this.state

    const { onSelect, ...props } = this.props
    if (onSelect) onSelect({ ...props, selected: !selected })

    this.setState({
      selected: !selected,
    })
  }

  render() {
    const {
      skin,
      condition,
      image,
      name,
      price,
      color,
      colorFaded,
      selectable,
    } = this.props

    const { selected } = this.state

    return (
      <Flex
        onClick={selectable ? this.toggleSelected : () => {}}
        m={1}
        flexDirection="column"
        alignItems="center"
        css={{
          cursor: selectable ? 'pointer' : null,
          '&:hover': selectable
            ? {
                opacity: 0.6,
              }
            : null,
          minHeight: 120,
          minWidth: 120,
          maxWidth: 'calc(8VW - 4px)',
          maxHeight: 'calc(8VW - 4px)',

          overflow: 'hidden',
          position: 'relative',
          borderBottom: '2px solid #e04e3f',
          borderColor: color,
          background: `linear-gradient(0deg, rgba(${colorFaded}, 0.20), transparent)`,
          fontSize: '12px',
          border: selected ? '2px solid #e04e3f' : null,
          opacity: selected ? 0.6 : 1,
          // flexGrow: 1,
          // flexShrink: 0,
          // flexBasis: 1
          // flexBasis: 'calc(10% - 8px)'
        }}
        justifyContent="center"
      >
        <Image
          // width={140}
          // height={140}
          src={image}
          css={{
            // height: '100%',
            width: '100%',
            position: 'relative',
            // filter: 'saturate(125%) drop-shadow(0 0 8px black)',
            // filter: 'drop-shadow(0 5px 2px rgba(0, 0, 0, 0.5)) saturate(123%) contrast(110%)',
          }}
        />
        <Text
          backgroundColor="rgba(0,0,0,0.8)"
          fontWeight="bold"
          p={2}
          css={{
            borderRadius: 5,
            position: 'absolute',
            top: 0,
            right: 0,
          }}
        >
          $
          {Number(price).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </Text>
        <Box
          width={1}
          css={{
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
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
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              width: '100%',
            }}
          >
            {skin || name}
          </Text>
          <Text
            fontWeight="bold"
            css={{
              opacity: 0.5,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              width: '100%',
            }}
          >
            {condition}
          </Text>
        </Box>
      </Flex>
    )
  }
}

export default GameItem
