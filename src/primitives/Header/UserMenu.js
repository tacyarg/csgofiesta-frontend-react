import React from 'react'
import Box from 'ui-box'

const styles = {
  container: {
    display: 'flex',
    padding: 20,
  },
  btn: {
    // fontWeight: 'bold',
    fontSize: '1.2em',
    display: 'flex',
    alignItems: 'center',
  },
}

const NavBtn = props => (
  <Box {...styles.container} className="container">
    <Box {...styles.btn}>
      {props.username}
    </Box>
  </Box>
)

export default NavBtn
