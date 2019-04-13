import React from 'react'
import { Flex, Box } from 'rebass'

import fakeChat from '../libs/fakeChat'

import Header from '../primitives/Chat/Header'
import Room from '../primitives/Chat/Room'
import InputBox from '../primitives/Chat/InputBox'

class Chat extends React.Component {
  render() {
    const { chat, sendMessage } = this.props
    const { messages = [], id } = chat
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
        <Box css={{ height: '100%', maxHeight: '100%', overflow: 'hidden', overflowY: 'scroll' }}>
          <Room messages={chat.messages} />
        </Box>
        <InputBox onSubmit={sendMessage} />
      </Flex>
    )
  }
}

export default Chat
