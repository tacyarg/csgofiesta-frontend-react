import React from 'react'
import { Flex, Button } from 'rebass'

import Spinner from './Spinner'

const style = {
  outline: 'none',
  boxShadow: '1px 2px 1px rgba(0, 0, 0, 0.25)',
  border: '1px solid rgba(0, 0, 0, 0.25)',
  transition: 'all 0.3s ease 0s',
}

const PrimaryButton = ({
  bg = 'rgba(238, 9, 121, 0.8)',
  loading,
  onClick,
  disabled,
  ...props
}) => (
  <Flex
    onClick={loading || disabled ? () => {} : onClick}
    as={Button}
    justifyContent="center"
    alignItems="center"
    bg={bg}
    {...props}
    css={{
      ...style,
      ...(!disabled
        ? {
            cursor: 'pointer',
            '&:hover': {
              opacity: 0.8,
              // boxShadow: '1px 2px 1px rgba(0, 0, 0, 0.1)',
            },
            '&:active': {
              boxShadow: '1px 2px 1px rgba(0, 0, 0, 0)',
            },
          }
        : {
            opacity: 0.5,
            cursor: 'not-allowed',
          }),
    }}
  >
    {loading ? <Spinner /> : props.children}
  </Flex>
)

export default PrimaryButton
