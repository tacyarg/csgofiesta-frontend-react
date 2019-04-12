import React from 'react'
import { Flex, Button } from 'rebass'

import Spinner from './Spinner'

const PrimaryButton = ({
  bg = 'rgba(238, 9, 121, 0.8)',
  loading,
  onClick,
  ...props
}) => (
  <Flex
    onClick={loading ? () => {} : onClick}
    as={Button}
    justifyContent="center"
    alignItems="center"
    bg={bg}
    {...props}
    css={{
      outline: 'none',
      boxShadow: '1px 2px 1px rgba(0, 0, 0, 0.25)',
      border: '1px solid rgba(0, 0, 0, 0.25)',
      cursor: 'pointer',
      transition: 'all 0.3s ease 0s',
      '&:hover': {
        opacity: 0.8,
        // boxShadow: '1px 2px 1px rgba(0, 0, 0, 0.1)',
      },
      '&:active': {
        boxShadow: '1px 2px 1px rgba(0, 0, 0, 0)',
      },
    }}
  >
    {loading ? <Spinner /> : props.children}
  </Flex>
)

export default PrimaryButton
