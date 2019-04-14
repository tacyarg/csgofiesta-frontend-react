import React from 'react'
import { Flex, Box, Text } from 'rebass'
import moment from 'moment'
import { sortBy } from 'lodash'

import Spinner from '../../Spinner'
import ItemPool from '../../ItemPool/ItemPool'

class Commands extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.callAction()
  }

  callAction = async () => {
    this.setState({ loading: true })
    const { action } = this.props
    const list = await action()
    this.setState({ loading: false, list: sortBy(list, 'updated').reverse() })
  }

  render() {
    const { list, loading } = this.state
    return (
      <Box css={{ height: '100%', overflow: 'hidden', overflowY: 'auto' }}>
        {loading ? (
          <Flex
            alignItems="center"
            justifyContent="center"
            css={{ height: '100%' }}
          >
            <Spinner fontSize="2em" />
          </Flex>
        ) : (
          list.map(cmd => {
            return (
              <Flex
                key={cmd.id}
                m={4}
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
                  css={{
                    borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
                    borderRadius: 5,
                  }}
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
                    <Text fontWeight="bold">VALUE:</Text>
                    <Box mx={1} />$
                    {Number(cmd.value).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </Flex>
                  {cmd.items ? (
                    <ItemPool items={cmd.items} />
                  ) : (
                    <Flex p={1}>
                      <Text fontWeight="bold">ITEMS:</Text>
                      <Box mx={1} />
                      {cmd.itemids.join(', ')}
                    </Flex>
                  )}
                </Box>
              </Flex>
            )
          })
        )}
      </Box>
    )
  }
}

export default Commands
