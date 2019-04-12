import React from 'react'
import { Flex, Box, Text, Button } from 'rebass'

import fakeJackpot from '../libs/fakeJackpot'

import Dialog from './Dialog'
import ItemPool from './ItemPool/ItemPool'
import PrimaryButton from './PrimaryButton'
import Spinner from './Spinner'

class DepositModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      requesting: false
    }
  }

  onRefresh = () => {
    const { onRefresh } = this.props
    this.toggleLoading()

    if (onRefresh) {
      return onRefresh()
    }

    setTimeout(() => {
      this.toggleLoading()
    }, 1000)
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading })
  }

  onRequest = () => {
    const { onRequest } = this.props
    this.toggleRequesting()

    if (onRequest) {
      return onRequest()
    }

    setTimeout(() => {
      this.toggleRequesting()
    }, 1000)
  }

  toggleRequesting = () => {
    this.setState({ requesting: !this.state.requesting })
  }

  render() {
    const { loading, requesting, show } = this.state
    return (
      <Dialog title="Deposit" buttonText="Deposit">
        <Flex
          // justifyContent="center"
          // alignItems="center"
          css={{
            height: '100%',
            // border: '1px solid',
          }}
          flexDirection="column"
        >
          {loading ? (
            <Flex
              alignItems="center"
              justifyContent="center"
              css={{ height: '100%' }}
            >
              <Spinner fontSize="2em" />
            </Flex>
          ) : (
            <ItemPool
              items={[
                ...fakeJackpot.items,
                ...fakeJackpot.items,
                ...fakeJackpot.items,
              ]}
            />
          )}
          <Box my="auto" />
          <Flex p={2} css={{}}>
            <PrimaryButton
              loading={requesting}
              flex={1}
              onClick={this.onRequest}
            >
              Request Deposit
            </PrimaryButton>
            <Box mx={1} />
            <PrimaryButton
              onClick={this.onRefresh}
              bg="rgba(255, 255, 255, 0.1)"
              flex={1}
              loading={loading}
            >
              Refresh Inventory
            </PrimaryButton>
          </Flex>
        </Flex>
      </Dialog>
    )
  }
}
export default DepositModal
