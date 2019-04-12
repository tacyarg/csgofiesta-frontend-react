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
      requesting: false,
      items: [],
    }
  }

  componentDidMount() {
    this.onRefresh()
  }

  onRefresh = () => {
    const { onRefresh } = this.props
    this.toggleLoading()

    if (onRefresh) {
      return onRefresh().then(items => {
        this.setState({ items })
        this.toggleLoading()
      })
    }

    setTimeout(() => {
      this.toggleLoading()
    }, 1000)
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading })
  }

  onRequest = async () => {
    const { items } = this.state
    const { onRequest } = this.props
    this.toggleRequesting()

    if (onRequest) {
      return onRequest(items).catch(this.toggleRequesting)
    }

    setTimeout(() => {
      this.toggleRequesting()
    }, 1000)
  }

  toggleRequesting = () => {
    this.setState({ requesting: !this.state.requesting })
  }

  render() {
    const { loading, requesting, items } = this.state
    return (
      <Dialog title="Deposit" buttonText="Deposit">
        {({ state, close }) => (
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
                items={
                  items || [
                    ...fakeJackpot.items,
                    ...fakeJackpot.items,
                    ...fakeJackpot.items,
                  ]
                }
              />
            )}
            <Box my="auto" />
            <Flex p={2} css={{}}>
              <PrimaryButton
                loading={requesting}
                flex={1}
                onClick={async e => {
                  await this.onRequest()
                  return close()
                }}
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
        )}
      </Dialog>
    )
  }
}
export default DepositModal
