import React from 'react'
import { Flex, Box, Text } from 'rebass'
import UserDetails from './UserDetails'

import { debounce } from 'lodash'

import PrimaryButton from '../../PrimaryButton'
import Input from '../../Input'


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
      250
    )
    this.setMyYoutubeUrl = debounce(chipsgg.actions.setMyYoutubeUrl, 250)
    this.setMyTwitchUrl = debounce(chipsgg.actions.setMyTwitchUrl, 250)
    this.setMySupportEmail = debounce(chipsgg.actions.setMySupportEmail, 250)
    this.setMyProfileBackgroundURL = debounce(
      chipsgg.actions.setMyProfileBackgroundURL,
      250
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
