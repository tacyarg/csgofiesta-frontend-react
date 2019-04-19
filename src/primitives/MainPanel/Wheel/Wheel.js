import React from 'react'
import { Flex, Box, Text } from 'rebass'
import { Doughnut } from 'react-chartjs-2'

import Status from './Status'

class Wheel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
        // tooltips: { enabled: false },
        // hover: { mode: null },
        responsive: true,
        cutoutPercentage: 80,
        maintainAspectRatio: true,
        elements: {
          arc: {
            borderWidth: 0,
            borderColor: '#1b2024',
          },
        },
      },
      data: {
        labels: ['Red', 'Green', 'Yellow'],
        datasets: [
          {
            borderWidth: 8,
            data: [300, 50, 100],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            // hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      },
    }
  }

  componentDidMount() {
    this.mapBets()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {bets} = this.props
    if (prevProps.bets.length === bets.length) return false
    // console.log(bets.length)
    this.mapBets(bets)
  }

  mapBets() {
    const { bets = [] } = this.props

    if(bets.length < 1) {
      return this.setState({
        data: {
          labels: ['n/a'],
          datasets: [
            {
              data: [1],
              backgroundColor: ['rgba(255,255,255,0.1)'],
              // hoverBackgroundColor: colors,
            },
          ],
        },
      })
    }

    const names = bets.map(bet => bet.player.name)
    const values = bets.map(bet => {
      return Number(bet.value).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    })
    const colors = bets.map(bet => bet.color)

    this.setState({
      data: {
        labels: names,
        datasets: [
          {
            data: values,
            backgroundColor: colors,
            // hoverBackgroundColor: colors,
          },
        ],
      },
    })
  }

  render() {
    const { options, data } = this.state
    return (
      <Box
        mx="auto"
        flex={1}
        // p={5}
        // width={2 / 3}
        css={{
          position: 'relative',
          // border: '1px solid',
        }}
      >
        <Box as={Doughnut} data={data} options={options} css={{
          // width: '100%',
          // height: '100%'
        }} />
        <Status {...this.props} />
      </Box>
    )
  }
}

export default Wheel
