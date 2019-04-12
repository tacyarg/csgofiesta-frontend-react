import React from 'react'
import { Flex, Box } from 'rebass'

const styles = {
  container: {
    marginLeft: 5,
    marginRight: 5,
  },
}

const FooterLink = props => (
  <Box mx={2} as="a" href={props.link} target="_blank">
    <Box as={props.icon} mx={2} />
    {props.text}
  </Box>
)

export default FooterLink
