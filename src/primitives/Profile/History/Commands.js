import React from 'react'
import { Flex, Box, Text } from 'rebass'
import moment from 'moment'
import { sortBy } from 'lodash'

class Commands extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
    }
  }

  componentDidMount() {
    this.callAction()
  }

  callAction = async () => {
    const { action } = this.props
    const list = await action()
    this.setState({ list: sortBy(list, 'updated').reverse() })
  }

  render() {
    const { list } = this.state
    return (
      <Box css={{ height: '100%', overflow: 'hidden', overflowY: 'auto' }}>
        {list.map(cmd => {
          return (
            <Flex
              key={cmd.id}
              m={2}
              flexDirection="column"
              backgroundColor="rgba(27, 23, 37, 0.5)"
              css={{
                borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
                borderRadius: 5,
              }}
            >
              <Flex
                p={2}
                backgroundColor="rgba(27, 23, 37, 0.5)"
                css={{ borderBottom: '1px solid rgba(0, 0, 0, 0.25)' }}
              >
                <Text>{cmd.id}</Text>
                <Box mx="auto" />
                <Text>{moment(cmd.updated).calendar()}</Text>
              </Flex>
              <Box
                p={2}
                css={{
                  opacity: 0.7,
                }}
              >
              <Flex p={1}>
                  <Text fontWeight="bold">GAME:</Text>
                  <Box mx={1} />
                  {cmd.game}
                </Flex>
                <Flex p={1}>
                  <Text fontWeight="bold">STATE:</Text>
                  <Box mx={1} />
                  {cmd.state}
                </Flex>
                <Flex p={1}>
                  <Text fontWeight="bold">ITEMIDS:</Text>
                  <Box mx={1} />
                  {cmd.itemids.toString()}
                </Flex>
              </Box>
            </Flex>
          )
        })}
      </Box>
    )
  }
}

export default Commands
