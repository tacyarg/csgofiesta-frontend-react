import React from 'react'
import { Flex, Box } from 'rebass'

import Message from './Message'

class Room extends React.Component {
  constructor(props) {
    super(props)
    this.state = { pauseScroll: false }
  }

  componentDidMount() {
    setInterval(this.scrollToBottom, 1000)
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  scrollToBottom = () => {
    const { pauseScroll } = this.state
    if (pauseScroll) return
    this.el.scrollIntoView({ behavior: 'smooth' })
  }

  render() {
    const { messages = [] } = this.props
    return (
      <Flex
        onMouseEnter={e => {
          this.setState({ pauseScroll: true })
        }}
        onMouseLeave={e => {
          this.setState({ pauseScroll: false })
          this.scrollToBottom
        }}
        flexDirection="column"
        css={{
          position: 'relative',
          height: '100%',
          overflowY: 'auto',
        }}
      >
        {messages.map(msg => (
          <Message key={msg.id} {...msg} />
        ))}
        <div
          ref={el => {
            this.el = el
          }}
        />
      </Flex>
    )
  }
}

export default Room
