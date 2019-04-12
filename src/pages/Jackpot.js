import React from 'react'
import { Flex, Box } from 'rebass'

import Chat from '../components/Chat'
import Jackpot from '../components/Jackpot'

class MainJackpot extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chat: props.chipsgg.state('chats')[0],
      jackpot: props.chipsgg.state('jackpot'),
    }
  }

  componentDidMount() {
    console.log(this.props.chipsgg.state())
    this.props.chipsgg.state.on('chat', chat => {
      if (!chat.messages) chat.messages = []
      this.setState({ chat })
    })

    this.props.chipsgg.state.on('jackpot', jackpot => {
      this.setState({ jackpot })
    })
  }

  render() {
    const { chat, jackpot } = this.state
    const { chipsgg } = this.props

    return (
      <Flex
        width={1}
        css={{
          height: '100%',
        }}
      >
        <Jackpot
          jackpot={jackpot}
          onRequest={itemids => chipsgg.actions.joinJackpot({ itemids })}
          onRefresh={chipsgg.actions.scanMyVgoInventoryByOpskinsId}
        />
        <Chat
          chat={chat}
          sendMessage={message => chipsgg.actions.chat({ message })}
        />
      </Flex>
    )
  }
}

export default MainJackpot
