import React from 'react'
import { Flex, Box, Text } from 'rebass'
import { NavLink } from 'react-router-dom'

const Nav = ({ routes, location }) => (
  <Flex
    p={2}
    width={1}
    css={{
      background: 'rgba(0,0,0,0.2)',
      borderBottom: 'solid rgba(0, 0, 0, 0.2) 1px',
    }}
  >
    {routes.map(({ label, path, action }) => (
      <Box
        as={NavLink}
        to={path}
        key={label}
        p={2}
        px={4}
        css={{
          borderRadius: 5,
          ...(location.pathname.includes(path)
            ? {
                backgroundColor: 'rgba(255,255,255,0.1)',
                boxShadow: '1px 2px 1px rgba(0, 0, 0, 0.25)',
                outline: 'solid rgba(0, 0, 0, 0.2) 1px',
              }
            : null),
        }}
      >
        <Text>{label}</Text>
      </Box>
    ))}
  </Flex>
)

export default Nav
