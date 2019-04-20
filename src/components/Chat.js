import React from 'react'
import { Flex, Box } from 'rebass'

import fakeChat from '../libs/fakeChat'

import Header from '../primitives/Chat/Header'
import Room from '../primitives/Chat/Room'
import InputBox from '../primitives/Chat/InputBox'

class Chat extends React.Component {
  constructor(props) {
    super(props)

    const { userState, state, actions } = props
    this.sendMessage = message => actions.chat({ message })
    this.scope = state.scope('chat')

    this.state = {
      id: this.scope('id'),
      messages: this.scope('messages'),
    }
  }
  
  componentDidMount() {
    this.scope.on('messages', messages => {
      this.setState({
        messages,
      })
    })
  }

  componentWillUnmount() {
    this.scope.disconnect()
  }

  render() {
    const { messages = [], id } = this.state
    return (
      <Flex
        width={300}
        flexDirection="column"
        backgroundColor="#221d2e"
        css={{
          height: '100%',
          minWidth: 340,
          // border: '1px solid',
        }}
      >
        <Header roomid={id} />
        <Box
          css={{
            height: '100%',
            maxHeight: '100%',
            overflow: 'hidden',
            overflowY: 'scroll',
          }}
        >
          <Room messages={messages} />
        </Box>
        <InputBox onSubmit={this.sendMessage} />
      </Flex>
    )
  }
}

export default Chat
