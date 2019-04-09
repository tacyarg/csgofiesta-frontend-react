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
            borderWidth: 10,
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

  mapBets() {
    const { bets = [] } = this.props

    console.log(bets)

    const names = bets.map(bet => bet.player.name)
    const values = bets.map(bet => bet.value)
    const colors = bets.map(bet => bet.color)

    this.setState({
      data: {
        labels: names,
        datasets: [
          {
            data: values,
            backgroundColor: colors,
            // hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      },
    })
  }

  render() {
    const { options, data } = this.state
    const { status, ...props } = this.props
    return (
      <Box {...props} css={{ 
        minWidth: 320,
        position: 'relative' }}>
        <Doughnut height="100%" width="100%" data={data} options={options} />
        <Status {...status} />
      </Box>
    )
  }
}

export default Wheel
