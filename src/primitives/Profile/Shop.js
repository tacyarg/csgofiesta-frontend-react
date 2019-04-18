import React from 'react'
import { Flex, Box, Text, Heading } from 'rebass'
import Spinner from '../Spinner'
import ItemPool from '../ItemPool/ItemPool'
import { sortBy, values } from 'lodash'
import PrimaryButton from '../PrimaryButton'

class Shop extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      list: [],
      total: 0,
      selectedItems: [],
      inventoryValue: 0,
      requesting: false,
    }
  }

  componentDidMount() {
    const { chipsgg } = this.props

    console.log(chipsgg.state())

    this.setState({
      loading: false,
      list: chipsgg.state('shop'),
    })

    chipsgg.state.on('shop', list => {
      this.setState({
        loading: false,
        list: list
      })
    })
    // this.loadItems()
  }

  loadItems = async () => {
    this.setState({ loading: true })
    const { chipsgg, ...props } = this.props
    const list = await chipsgg.actions.shopInventory()
    const inventoryValue = list.reduce((memo, item) => {
      memo = item.price + memo
      return memo
    }, 0)
    this.setState({
      inventoryValue,
      loading: false,
      list: sortBy(list, 'updated').reverse(),
    })
  }

  onSelect = item => {
    const { total, selectedItems } = this.state
    if (item.selected) {
      this.setState({
        total: total + item.price,
        selectedItems: [...selectedItems, item.id],
      })
    } else {
      const index = selectedItems.findIndex(id => id === item.id)
      selectedItems.splice(index, 1)

      this.setState({
        total: parseFloat(total.toFixed(2)) - parseFloat(item.price.toFixed(2)),
        selectedItems,
      })
    }
  }

  formatNumber(value) {
    return Number(value).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }

  buyItems = async () => {
    const { selectedItems } = this.state
    const { chipsgg } = this.props
    this.setState({ requesting: true })
    const withdraw = await chipsgg.actions.buyShopItems({ itemids: selectedItems })
    this.setState({ requesting: false, selectedItems: [], total: 0  })
  }

  render() {
    const { loading, list, total, inventoryValue, requesting } = this.state
    return loading ? (
      <Flex
        alignItems="center"
        justifyContent="center"
        css={{ height: '100%' }}
      >
        <Spinner fontSize="2em" />
      </Flex>
    ) : (
      <Flex width={1} flexDirection="column">
        <Flex
          p={3}
          width={1}
          css={{
            background: 'rgba(0,0,0,0.2)',
            borderBottom: 'solid rgba(0, 0, 0, 0.2) 1px',
          }}
          alignItems="center"
        >
          <Heading>Total Value: ${this.formatNumber(inventoryValue)}</Heading>
          <Box mx="auto" />
          <PrimaryButton
            disabled={!(total > 0)}
            loading={requesting}
            onClick={this.buyItems}
          >
            {`Purchase $${this.formatNumber(total)}`}
          </PrimaryButton>
        </Flex>
        <ItemPool onSelect={this.onSelect} selectable={true} items={list} />
      </Flex>
    )
  }
}

export default Shop
