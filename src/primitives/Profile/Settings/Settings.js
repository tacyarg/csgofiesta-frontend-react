import React from 'react'
import { Flex, Box, Text } from 'rebass'
import UserDetails from './UserDetails'

import { debounce } from 'lodash'

import PrimaryButton from '../../PrimaryButton'

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value || '',
    }
  }

  render() {
    const { label = 'Some Input', onChange } = this.props
    const { value } = this.state
    return (
      <Flex p={2} alignItems="center">
        <Text
          fontWeight="bold"
          mx={2}
          css={{
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </Text>
        <Box
          my={2}
          onChange={e => {
            this.setState({ value: e.target.value })
            return onChange(e.target.value)
          }}
          value={value}
          as="input"
          width={1}
          p={2}
          css={{
            background: 'rgba(0,0,0, 0.5)',
            border: 'solid rgba(0, 0, 0, 0.2) 1px',
            borderRadius: 5,
            resize: 'none',
            outline: 'none',
            fontSize: '1em',
          }}
        />
      </Flex>
    )
  }
}

class Settings extends React.Component {
  constructor(props) {
    super(props)
    this.state = props.user
  }

  componentDidMount() {
    console.log(this.props)
    const { chipsgg } = this.props
    this.setMyExpressTradeUrl = debounce(
      chipsgg.actions.setMyExpressTradeUrl,
      1000
    )
    this.setMyYoutubeUrl = debounce(chipsgg.actions.setMyYoutubeUrl, 1000)
    this.setMyTwitchUrl = debounce(chipsgg.actions.setMyTwitchUrl, 1000)
    this.setMySupportEmail = debounce(chipsgg.actions.setMySupportEmail, 1000)
    this.setMyProfileBackgroundURL = debounce(
      chipsgg.actions.setMyProfileBackgroundURL,
      1000
    )
  }

  render() {
    const { user } = this.props
    return (
      <Box width={1}>
        <UserDetails {...user} />
        <Flex flexDirection="column" p={4} justifyContent="center">
          <Text p={3} alignSelf="center">
            All settings will update automatically after editing.
          </Text>

          <Input
            label="ExpressTrade URL :"
            value={user.expresstradeurl}
            onChange={expresstradeurl =>
              this.setMyExpressTradeUrl({ expresstradeurl })
            }
          />
          <Input
            label="Youtube URL :"
            value={user.youtubeurl}
            onChange={youtubeurl => this.setMyYoutubeUrl({ youtubeurl })}
          />
          <Input
            label="Twitch.tv URL :"
            value={user.twitchurl}
            onChange={twitchurl => this.setMyTwitchUrl({ twitchurl })}
          />
          <Input
            label="Support Email :"
            value={user.email}
            onChange={email => this.setMySupportEmail({ email })}
          />
          <Input
            label="Profile Background URL :"
            value={user.backgroundURL}
            onChange={backgroundURL =>
              this.setMyProfileBackgroundURL({ backgroundURL })
            }
          />
        </Flex>
      </Box>
    )
  }
}

export default Settings
