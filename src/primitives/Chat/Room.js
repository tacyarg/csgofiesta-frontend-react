import React from 'react'
import { Flex, Box } from 'rebass'

import Message from './Message'

class Room extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { pauseScroll: false }
  }

  componentDidMount() {
    // setInterval(this.scrollToBottom, 250)
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  scrollToBottom = () => {
    const { pauseScroll } = this.state
    if (pauseScroll) return
    // this.el.scrollIntoView({ behavior: 'smooth' })
    this.el.scrollIntoView()
  }

  render() {
    const { messages = [] } = this.props
    return (
      <Flex
        px={2}
        onMouseEnter={e => {
          this.setState({ pauseScroll: true })
        }}
        onMouseLeave={e => {
          this.setState({ pauseScroll: false })
          this.scrollToBottom
        }}
        flexDirection="column"
        css={{
          overflow: 'hidden',
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
