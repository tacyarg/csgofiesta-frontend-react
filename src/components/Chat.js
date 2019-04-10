import React from 'react'
import { Flex, Box } from 'rebass'

import fakeChat from '../libs/fakeChat'

import Header from '../primitives/Chat/Header'
import Room from '../primitives/Chat/Room'
import InputBox from '../primitives/Chat/InputBox'

class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = fakeChat
  }

  sendMessage = message => {
    const { messages } = this.state
    console.log('send message', message)
    this.setState({
      messages: [
        ...messages,
        {
          id: message+'78bb63a5-fe3f-43b2-94a0-03f298d6c02a',
          message,
          timestamp: 1550865069433,
          user: {
            avatar:
              'https://steamcdn-a.opskins.media/steamcommunity/public/images/avatars/41/4137b9b5854d565b229e5912bd373356fe8f5c87_full.jpg',
            expresstradeurl: 'https://trade.opskins.com/t/2695807/1EjQCo3j',
            id: '068bd16a-2a85-4e6d-a450-480ef32c9b8c',
            level: 5,
            opskins: {
              avatar:
                'https://steamcdn-a.opskins.media/steamcommunity/public/images/avatars/41/4137b9b5854d565b229e5912bd373356fe8f5c87_full.jpg',
              id: 2695807,
              id64: '76561197963679680',
              preferred_currency: 102,
              preferred_lang: 'nl',
              username: 'W00zY',
            },
            opskinsid: 2695807,
            sessions: 1,
            steamid: '76561197963679680',
            username: 'W00zY',
          },
        },
      ],
    })
  }

  render() {
    const { messages, id } = this.state
    return (
      <Flex
        width={300}
        flexDirection="column"
        backgroundColor="#221d2e"
        css={{
          minWidth: 340,
          // border: '1px solid',
        }}
      >
        <Header roomid={id} />
        <Room messages={messages} />
        <InputBox onSubmit={this.sendMessage} />
      </Flex>
    )
  }
}

export default Chat
