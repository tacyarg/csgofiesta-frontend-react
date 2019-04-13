import React from 'react'
import { Image } from 'rebass'

const Avatar = props => (
  <Image
    width={48}
    height={48}
    css={{
      minWidth: 48,
      minHeight: 48,
      boxShadow: '1px 2px 1px rgba(0, 0, 0, 0.25)',
      border: '1px solid rgba(0, 0, 0, 0.5)',
    }}
    borderRadius={9999}
    {...props}
  />
)

export default Avatar
