import React from 'react'
import Box from 'ui-box'

import { Icon } from 'evergreen-ui'

const styles = {
  container: {
    marginLeft: 5,
    marginRight: 5,
  },
}

const FooterLink = props => (
  <Box {...styles.container} key={props.text}>
    <Box is="a" href={props.link} target="_blank">
      <Icon icon={props.icon} />
      {props.text}
    </Box>
  </Box>
)

export default FooterLink
