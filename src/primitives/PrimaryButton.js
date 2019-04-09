import React from 'react'
import { Button } from 'rebass'

const PrimaryButton = ({ bg = '#ee0979', ...props }) => (
  <Button
    bg={bg}
    {...props}
    css={`
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    `}
  />
)

export default PrimaryButton
