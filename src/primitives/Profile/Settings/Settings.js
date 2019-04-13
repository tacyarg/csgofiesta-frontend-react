import React from 'react'
import { Flex, Box } from 'rebass'
import UserDetails from './UserDetails'

const Input = () => {
  
}

const Settings = ({ user }) => (
  <Box width={1}>
    <UserDetails {...user} />
  </Box>
)

export default Settings