import React from 'react'
import { Image } from 'rebass'

const Avatar = props => (
  <Image width={48} height={48} css={{
    minWidth: 48,
    maxHeight: 48
  }} borderRadius={9999} {...props} />
)

export default Avatar
