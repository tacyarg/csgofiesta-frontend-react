import React from 'react'
import Box from 'ui-box'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    cursor: 'pointer',
  },
  text: {
    fontSize: '2em',
  },
  value: {},
}

export default props => (
  <Box {...styles.container} is="Link" to={props.link}>
    <Box {...styles.text}>{props.text}</Box>
    <Box {...styles.value}>
      $
      {Number(props.value).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}
    </Box>
  </Box>
)
