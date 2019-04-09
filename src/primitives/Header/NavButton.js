import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Flex, Box, Text } from 'rebass'

class NavButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false,
    }
  }

  render() {
    const { path, label, value, isActive } = this.props
    return (
      <Flex
        as={NavLink}
        mx={30}
        to={path}
        css={{
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Text
          fontFamily="JIMargarita"
          fontSize="2.5em"
          css={
            isActive
              ? {
                  background: 'linear-gradient(-45deg, #ff6a00, #ee0979)',
                  '-webkit-background-clip': 'text',
                  '-webkit-text-fill-color': 'transparent',
                  whiteSpace: 'nowrap',
                }
              : {
                  background: 'rgba(238, 238, 238, 0.6)',
                  // background: 'linear-gradient(-45deg, #ff6a00, #ee0979)',
                  '-webkit-background-clip': 'text',
                  '-webkit-text-fill-color': 'transparent',
                  whiteSpace: 'nowrap',
                }
          }
        >
          {label}
        </Text>
        <Text fontWeight="bold">
          $
          {Number(value).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </Text>
      </Flex>
    )
  }
}

export default NavButton
