import React from 'react'
import { Box, Flex, Image } from 'rebass'
import { clone, sample, random, deb } from 'lodash'

import tickSound from '../assets/sound/tick7.mp3'
import endSound from '../assets/sound/end4.mp3'
import startSound from '../assets/sound/start2.mp3'

import { TimelineMax, Circ, Expo, Power4, TweenMax } from 'gsap'

class WinnerSpinner extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      winner: props.winner,
      spinnerContent: [],
      winningIndex: 200,
      width: 0,
    }

    this.myTween = new TimelineLite({ paused: true })
    window.onresize = this.onResize
  }

  onResize = () => {
    this.setState({ width: this.myElement.offsetWidth })
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log(this.props.winner, nextProps.winner)
  //   // return this.props.winner !== nextProps.winner
  //   return false
  // }

  componentWillMount() {
    const { players } = this.props
    const { winningIndex, winner } = this.state
    const spinnerContent = this.generateSpinner(players)

    const player = clone(players.find(plr => plr.id === winner))
    spinnerContent.splice(winningIndex, 1, player)

    this.setState({ spinnerContent })
  }

  componentDidMount() {
    this.onResize()
    setTimeout(this.roll.bind(this), 1)
  }

  componentWillUnmount() {
    this.myTween.kill()
  }

  setupAudio = sound => {
    const volume = 1

    const start = new Audio(startSound)
    start.volume = volume
    start.playbackRate = 1

    const tick = new Audio(tickSound)
    tick.playbackRate = 4
    tick.volume = volume / 4

    const stop = new Audio(endSound)
    stop.volume = volume

    return {
      start,
      tick,
      stop,
    }
  }

  roll() {
    const { tick, stop, start } = this.setupAudio()
    const { winningIndex, width } = this.state

    const duration = 10

    const offset = random(-50, 50)

    const tileSize = 128
    const tickPos = width / 2
    const centerTile = tickPos - tileSize / 2
    const pos = tileSize * winningIndex - centerTile - offset

    let lastTile = 0

    this.myTween
      .to(this.myElement, duration, {
        onUpdateParams: ['{self}'],
        x: -pos,
        ease: Circ.easeOut,
        onStart() {
          start.play()
        },
        onUpdate(tween) {
          const x = tween.target._gsTransform.x
          const tile = Math.abs(Math.round(x / tileSize))
          if (lastTile < tile) {
            lastTile = tile
            tick.play()
          }
        },
        roundProps: 'x',
      })
      .to(this.myElement, 0.5, {
        delay: 0.3,
        x: -pos - offset,
        // clearProps: 'transform',
        onStart() {
          stop.play()
        },
        onComplete: () => {
          const { players } = this.props
          const { winningIndex, spinnerContent, winner } = this.state

          const player = clone(players.find(plr => plr.id === winner))
          winner.selected = true
          spinnerContent.splice(winningIndex, 1, player)

          this.setState({ spinnerContent })
        },
      })
      .paused(false)
  }

  generateSpinner = items => {
    if (!items) return
    items = clone(items)
    const size = 500
    let count = 0
    const sampleSet = []

    while (count < size) {
      ++count
      const item = sample(items)
      sampleSet.push(item)
    }

    return sampleSet
  }

  render() {
    const { spinnerContent } = this.state
    return (
      <Box
        // width={1}
        my={2}
        css={{
          boxShadow: 'inset 0 0 10px #000000',
          borderRadius: 5,
          minHeight: 130,
          overflow: 'hidden',
          position: 'relative',
          background: 'rgba(27, 23, 37, 0.5)',
          border: 'solid rgba(0, 0, 0, 0.2) 1px',
        }}
        {...this.props}
      >
        <Tick />
        <Flex
          css={{
            position: 'absolute',
          }}
          width={1}
          ref={div => (this.myElement = div)}
        >
          {spinnerContent.map((user, idx) => {
            return (
              <Avatar
                selected={user.selected}
                key={user.id + idx}
                src={user.image}
              />
            )
          })}
        </Flex>
      </Box>
    )
  }
}

const Avatar = props => (
  <Image
    {...props}
    width={128}
    height={128}
    css={{
      borderRadius: 5,
      minWidth: 128,
      minHeight: 128,
      // boxShadow: '1px 2px 1px rgba(0, 0, 0, 0.25)',
      // border: '1px solid rgba(0, 0, 0, 0.5)',
      ...(props.selected
        ? {
            border: '1px solid white',
          }
        : null),
    }}
  />
)

const Tick = () => (
  <Box
    css={{
      backgroundColor: 'red',
      borderRadius: 4,
      position: 'absolute',
      left: 0,
      right: 0,
      margin: 'auto',
      width: 2,
      top: 0,
      bottom: 0,
      zIndex: 1,
    }}
  />
)

export default WinnerSpinner
