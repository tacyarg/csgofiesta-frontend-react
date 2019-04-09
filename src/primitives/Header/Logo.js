import React from 'react'
import Box from 'ui-box'

import image from '../../assets/img/logo.png'

const logo = {
  display: 'flex'
}

const logoImg = {
  // height: '100%',
  // width: '100%',
  height: 100
}

const Logo = props => (
  <Box {...logo}>
    <img {...logoImg} src={image} />
  </Box>
)

export default Logo
