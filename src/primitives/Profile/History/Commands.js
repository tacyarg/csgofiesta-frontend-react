import React from 'react'
import { Flex, Box, Text, Link } from 'rebass'
import moment from 'moment'
import { sortBy } from 'lodash'

import Spinner from '../../Spinner'
import ItemPool from '../../ItemPool/ItemPool'
import PrimaryButton from '../../PrimaryButton'

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

  renderType(cmd) {
    switch (cmd.type) {
      case 'payoutAndWithdrawItems':
        return <Payout {...cmd} />
      case 'vgoWithdraw':
        return <Offer {...cmd} />
      case 'vgoDeposit':
        return <Offer {...cmd} />
      default:
        return <Payout {...cmd} />
    }
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
            // console.log(cmd)
            return (
              <Flex
                key={cmd.id+cmd.created}
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
                {this.renderType(cmd)}
              </Flex>
            )
          })
        )}
      </Box>
    )
  }
}

export default Commands

function openWindow(url) {
  window.open(url, 'popup', 'width=1024,height=768,scrollbars=no,resizable=no')
}

const Prop = ({ label, value }) => (
  <Flex
    p={0.5}
    css={{
      opacity: 0.8,
    }}
  >
    <Text fontWeight="bold">{label}</Text>
    <Box mx={1} />
    {value}
  </Flex>
)

const Payout = cmd => (
  <Box
    p={3}
    css={{
      opacity: 0.7,
    }}
  >
    <Prop label="GAME:" value={cmd.game || cmd.type} />
    <Prop
      label="STATE:"
      value={cmd.state !== 'Success' ? cmd.reject.message : cmd.state}
    />
    <Prop
      label="VALUE:"
      value={`$${Number(cmd.value).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`}
    />
    {cmd.items ? (
      <ItemPool items={cmd.items} />
    ) : (
      <Prop label="ITEMS:" value={cmd.itemids.join(', ')} />
    )}
  </Box>
)

const Offer = cmd => (
  <Box p={3}>
    <Flex>
      <Box>
        <Prop
          label="STATE:"
          value={cmd.state === 'Error' ? cmd.reject.message : cmd.state}
        />
        <Prop
          label="VALUE:"
          value={`$${Number(cmd.value).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`}
        />
      </Box>
      <Box mx="auto" />
      <PrimaryButton
        disabled={cmd.done}
        onClick={() => {
          openWindow(cmd.offerurl)
        }}
      >
        View Offer
      </PrimaryButton>
    </Flex>
    {cmd.items ? (
      <ItemPool items={cmd.items} />
    ) : (
      <Prop label="ITEMS:" value={cmd.itemids.join(', ')} />
    )}
  </Box>
)

// cmd.offerurl ? (
//   <Flex p={1}>
//     <Box flex={1} />
//     <PrimaryButton src={cmd.offerurl}>
//       View Offer
//     </PrimaryButton>
//   </Flex>
// )
